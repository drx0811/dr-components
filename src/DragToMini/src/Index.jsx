import { CaretRightOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Collapse, Tabs,message } from 'antd';
import classNames from 'classnames';
import update from 'immutability-helper';
import _ from 'lodash';
import uniqueId from 'lodash/uniqueId';
import { useCallback, useEffect, useState } from 'react';
import Sortable from 'react-sortablejs';
import {
  AreaItem,
  CheckboxItem,
  DatePickerItem,
  ImageItem,
  InputItem,
  NavigatorItem,
  PickerItem,
  RadioItem,
  RichTextItem,
  TitleItem,
  UploadItem,
} from './components/BasicMoudle/Index.js';

import { EditForm } from './components/EditForm/EditForm';
import { StepItem } from './components/LayoutModule/Index';
import FormModules from './components/FormModules/Index';
import styles from './Index.less';
// import { baseCtrl, componentLib } from './json.js';
import {
  getCloneItem,
  getItem,
  indexToArray,
  isPath,
  itemAdd,
  itemRemove,
  setInfo,
} from './utils/utils';

const { Panel } = Collapse;
const { TabPane } = Tabs;
const sortableOption = {
  animation: 150,
  fallbackOnBody: true,
  swapThreshold: 0.65,
  group: {
    name: 'formItem',
    pull: true,
    put: true,
  },
};
const DragToMini = (dragProps) => {
  const [itemData, setItemData] = useState([]);
  const [curItemKey, setCurItemKey] = useState('');
  const [allModules, setAllModules] = useState([]);
  const [allLibs, setAllLibs] = useState([]);
  useEffect(() => {
    const {baseCtrl = [],componentLib = []} = dragProps
    setAllModules(baseCtrl);
    setAllLibs(componentLib);
  }, []);
  const sortableChoose = (e) => {
    const curKey = e.item.getAttribute('data-id');
    setCurItemKey(curKey);
  };
  const sortableAdd = (e) => {
    const isGroup = e.clone.getAttribute('data-group');
    const nameOrIndex = e.clone.getAttribute('data-id');
    const parentPath = e.path[1].getAttribute('data-id');
    const { newIndex } = e;
    const newPath = parentPath ? `${parentPath}-${newIndex}` : newIndex;
    if (isPath(nameOrIndex)) {
      const oldIndex = nameOrIndex;
      const dragItem = getCloneItem(oldIndex, itemData);
      if (indexToArray(oldIndex) > indexToArray(newPath)) {
        let newTreeData = itemRemove(oldIndex, itemData);
        newTreeData = itemAdd(newPath, newTreeData, dragItem);
        setItemData([...newTreeData]);
        return;
      }
      let newData = itemAdd(newPath, itemData, dragItem);
      newData = itemRemove(oldIndex, newData);
      setCurItemKey(newPath + '');
      setItemData([...newData]);
      return;
    }
    if (!isGroup) {
      const id = nameOrIndex;
      const allInput = allModules.reduce((pre, cur) => {
        return [...pre, ...cur.children];
      }, []);
      const newItem = _.cloneDeep(allInput.find((item) => item.code === id));
      let Data = itemAdd(newPath, itemData, newItem);
      setCurItemKey(newPath + '');
      setItemData([...Data]);
    }else {
      const groupList = allLibs.reduce((pre, cur) => {
        return [...pre, ...cur.children];
      }, []);
      const newItem = groupList.find((it) => it.code === nameOrIndex);
      if (newItem?.props?.children) {
        setItemData([...newItem?.props?.children,...itemData]);
      }
    }
  };

  const sortableUpdate = (e) => {
    const { newIndex, oldIndex } = e;
    const parentPath = e.path[1].getAttribute('data-id');
    let parent = parentPath ? getItem(parentPath, itemData) : itemData;
    let dragItem = parent[oldIndex];
    if (!Array.isArray(parent)) {
      parent = parent?.props?.children;
      dragItem = parent[oldIndex];
    }
    const newPath = parentPath ? `${parentPath}-${newIndex}` : newIndex;
    setCurItemKey(newPath + '');
    parent = update(parent, {
      $splice: [
        [oldIndex, 1],
        [newIndex, 0, dragItem],
      ],
    });
    const Data = parentPath ? setInfo(parentPath, itemData, parent) : parent;
    setItemData([...Data]);
  };
  const handleDelFn = () => {
    let newTreeData = itemRemove(curItemKey, itemData);
    setCurItemKey('');
    setItemData([...newTreeData]);
  };
  const loop = useCallback(
    (arr = [], index) => {
      return arr.map((item, i) => {
        const indexLine = index === '' ? String(i) : `${index}-${i}`;
        if (item) {
          const { props } = item;
          if (props.children) {
            return (
              <div
                key={indexLine}
                data-id={indexLine}
                className={classNames(
                  indexLine === curItemKey
                    ? styles.clickFormItem
                    : styles.formItem,
                )}
              >
                <div className={styles.ctrlItem}>
                  {props?.type === 'grid' && (
                    <div key={indexLine} className={styles.ctrlBox}>
                      <div className={styles.ctrlName}>{item.name}</div>
                      <div
                        data-id={indexLine}
                        className={styles.ctrlContentBox}
                      >
                        <Sortable
                          style={{
                            width: '100%',
                            minHeight: '100px',
                            border: '1px dashed #666',
                          }}
                          className={styles.gridBoxDrag}
                          key={uniqueId()}
                          ref={(c) => c && c.sortable}
                          options={{
                            ...sortableOption,
                            onUpdate: (e) => sortableUpdate(e),
                            onAdd: (e) => sortableAdd(e),
                            onChoose: (e) => sortableChoose(e),
                          }}
                        >
                          {loop(props.children, indexLine)}
                        </Sortable>
                      </div>
                    </div>
                  )}
                </div>
                {indexLine === curItemKey && (
                  <div className={styles.tool}>
                    <DeleteOutlined
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelFn(item);
                      }}
                    />
                  </div>
                )}
              </div>
            );
          }
          return (
            <div
              data-id={indexLine}
              key={indexLine}
              className={classNames(
                indexLine === curItemKey
                  ? styles.clickFormItem
                  : styles.formItem,
              )}
            >
              <div className={styles.ctrlItem}>
                {props?.type === 'field' && <InputItem {...item} />}
                {props?.type === 'radio' && <RadioItem {...item} />}
                {props?.type === 'checkboxGroup' && <CheckboxItem {...item} />}
                {props?.type === 'calendar' && <DatePickerItem {...item} />}
                {props?.type === 'image' && <ImageItem {...item} />}
                {props?.type === 'richText' && <RichTextItem {...item} />}
                {props?.type === 'picker' && <PickerItem {...item} />}
                {props?.type === 'area' && <AreaItem {...item} />}
                {props?.type === 'upload' && <UploadItem {...item} />}
                {props?.type === 'title' && <TitleItem {...item} />}
                {props?.type === 'navigator' && <NavigatorItem {...item} />}
                {props?.type === 'step' && <StepItem {...item} />}
              </div>
              {indexLine === curItemKey && (
                <div className={styles.tool}>
                  <DeleteOutlined
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelFn(item);
                    }}
                  />
                </div>
              )}
            </div>
          );
        } else {
          return null;
        }
      });
    },
    [curItemKey, itemData],
  );
  const handleItemFn = (item) => {
    if (curItemKey && curItemKey.indexOf('-') !== -1) {
      const curItemKeyList = curItemKey.split('-');
      let newChildProps =
        itemData[curItemKeyList[0]].props.children[curItemKeyList[1]].props;
      itemData[curItemKeyList[0]].props.children[curItemKeyList[1]].props = {
        ...newChildProps,
        ...item,
      };
      const newItemData = [...itemData];
      setItemData(newItemData);
    } else {
      const newProps = itemData[curItemKey].props;
      itemData[curItemKey].props = { ...newProps, ...item };
      const newItemData = [...itemData];
      setItemData(newItemData);
    }
  };
  const handleFormFn = () => {
    setCurItemKey('ALL_FORM');
  };
  const handleDelFormFn = () => {
    setItemData([]);
    setCurItemKey('');
  };
  const submitFn = () => {
    let flag = true;
    const handelItems = itemData.reduce((pre, cur) => {
      if (cur?.props?.type === 'grid') {
        let grid = {
          ...cur,
          children: undefined,
        };
        return [...pre, grid, ...(cur.children || []).filter((it) => !!it)];
      } else {
        return pre.concat(cur);
      }
    }, []);
    for (let i = 0; i < handelItems.length; i++) {
      if (!handelItems[i]?.props?.ctrlcode) {
        let findError = handelItems[i]?.props?.label;
        if (handelItems[i]?.props.type === 'grid') {
          findError = '折叠块没有添加name';
        }
        message.error(findError)
        flag = false;
        break;
      }
    }
    if (flag) {

      // const handlePropertyFn = (children) => {
      //   return children.reduce((pre, cur) => {
      //     pre[cur?.props?.ctrlcode] = cur?.props;
      //     return pre;
      //   }, {});
      // };
      // const params = itemData.reduce((pre, cur) => {
      //   if (cur?.props?.type !== 'grid') {
      //     pre[cur?.props?.ctrlcode] = cur?.props;
      //   } else {
      //     pre[cur?.props?.ctrlcode] = {
      //       ...cur?.props,
      //       children: undefined,
      //       ...handlePropertyFn(cur?.props?.children),
      //     };
      //   }
      //   return pre;
      // }, {});
    }
  };
  return (
    <div className={styles.pageContent}>
      <div className={styles.pageContentLeft}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="控件库" key="1">
            <Collapse
              bordered={false}
              defaultActiveKey={['1']}
              expandIcon={({ isActive }) => (
                <CaretRightOutlined rotate={isActive ? 90 : 0} />
              )}
              className={styles.pageContentLeftCollapse}
            >
              {allModules.map((module, index) => {
                return (
                  <Panel header={module.title} key={index}>
                    <Sortable
                      className={styles.pageContentLeftCollapsePanel}
                      options={{
                        group: {
                          name: 'formItem',
                          pull: 'clone',
                          put: false,
                        },
                        sort: false,
                      }}
                    >
                      {(module.children || []).map((item) => (
                        <Button
                          className={styles.controller}
                          data-id={item.code}
                          key={item.name}
                          style={{ marginTop: 10 }}
                        >
                          {item.name}
                        </Button>
                      ))}
                    </Sortable>
                  </Panel>
                );
              })}
            </Collapse>
          </TabPane>
          <TabPane tab="组件库" key="2">
            <Collapse
              bordered={false}
              defaultActiveKey={['0']}
              expandIcon={({ isActive }) => (
                <CaretRightOutlined rotate={isActive ? 90 : 0} />
              )}
              className={styles.pageContentLeftCollapse}
            >
              {allLibs.map((module, index) => {
                return (
                  <Panel header={module.title} key={index}>
                    <Sortable
                      className={styles.pageContentLeftCollapsePanel}
                      options={{
                        group: {
                          name: 'formItem',
                          pull: 'clone',
                          put: false,
                        },
                        sort: false,
                      }}
                    >
                      {(module.children || []).map((item) => (
                        <Button
                          className={styles.controller}
                          data-id={item.code}
                          data-group={item.group}
                          key={item.name}
                          style={{ marginTop: 10 }}
                        >
                          {item.name}
                        </Button>
                      ))}
                    </Sortable>
                  </Panel>
                );
              })}
            </Collapse>
          </TabPane>
        </Tabs>
      </div>
      <div className={styles.pageContentCenterBox}>
        <div
          onClick={() => {
            handleFormFn();
          }}
          className={styles.pageContentCenterTitle}
        >
          <Button
            size='small'
            className={styles.pageContentCenterTitleBtn}
            type='primary'
          >
            点击设置组件属性
          </Button>
          {curItemKey === 'ALL_FORM' && (
            <DeleteOutlined
              className={styles.pageContentCenterTitleDel}
              onClick={(e) => {
                handleDelFormFn();
              }}
            />
          )}
        </div>
        <Sortable
          className={classNames(
            styles.pageContentCenter,
            curItemKey === 'ALL_FORM' ? styles.selectAllForm : '',
          )}
          ref={(c) => c && c.sortable}
          options={{
            ...sortableOption,
            onUpdate: (e) => sortableUpdate(e),
            onAdd: (e) => sortableAdd(e),
            onChoose: (e) => sortableChoose(e),
          }}
          key={uniqueId()}
        >
          {loop(itemData, '')}
        </Sortable>
      </div>
      <div className={styles.pageContentRight}>
        {curItemKey && curItemKey !== 'ALL_FORM' && (
          <EditForm
            curItemKey={curItemKey}
            itemData={itemData}
            blurCallback={(formDataItem) => {
              handleItemFn(formDataItem);
            }}
          />
        )}
        {
          curItemKey === 'ALL_FORM' &&
          <FormModules allLibs={allLibs}  />
        }
      </div>
    </div>
  );
};

export default DragToMini;

import { Checkbox, Form, Input, Radio } from 'antd';
import { useEffect, useState } from 'react';
import { v4 as uuidFlag } from 'uuid';
import EditTable from './EditTable';
import  './Index.less';
export const EditForm = (originProps) => {
  const { curItemKey, itemData } = originProps;
  const [currentItem, setCurrentItem] = useState({});
  const [editName, setEditName] = useState('');
  const [form] = Form.useForm();
  const indexToArray = curItemKeys => `${curItemKeys}`.split('-').map(n => +n);
  const getItemChild = (curItemKeys, itemDatas)=>{
    const keys = indexToArray(curItemKeys);
    if (keys.length===1) {
      return itemDatas[keys[0]]||{}
    }else {
      return itemDatas[keys[0]]?.props?.children[keys[1]]||{}
    }
  }
  useEffect(() => {
    if (curItemKey!=='ALL_FORM') {
      const { props, name } = getItemChild(curItemKey, itemData);
      form.setFieldsValue({
        label: props.label,
        isTitleRow: props.isTitleRow,
        required: props.required,
        placeholder: props.placeholder,
        ctrlcode: props.ctrlcode ? props.ctrlcode : undefined,
        value:
          props.type === 'radio' && props.value ? props.value[0] : props.value,
      });
      setCurrentItem(props);
      setEditName(name);
    }
  }, [originProps]);
  const blurFn = (value) => {
    form
      .validateFields()
      .then((res) => {
        if (value) {
          originProps.blurCallback({ ...res, enum: value });
        } else {
          if (currentItem.type === 'radio') {
            res.value = [res.value];
          }
          originProps.blurCallback({ ...res });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <h3 className={'drag-editName'}>{editName}</h3>
      <Form
        className={'drag-editFormBox'}
        form={form}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 14,
        }}
      >
        <Form.Item
          rules={[
            { required: true, message: 'name必填!' },
            {
              validator: (_, value) => {
                if (value) {
                  if (value.trim(' ') === value) {
                    let reg = /^[a-zA-Z_]+$/g
                    if (reg.test(value)) {
                      return Promise.resolve();
                    }else {
                      return Promise.reject('输入的内容只能为字母下划线');
                    }
                  } else {
                    return Promise.reject('输入内容前后不得包含空格');
                  }
                } else {
                  return Promise.resolve();
                }
              },
            },
          ]}
          label="name"
          name="ctrlcode"
        >
          <Input
            onBlur={() => {
              blurFn();
            }}
            placeholder="请输入唯一标识"
          />
        </Form.Item>
        {currentItem.type !== 'step' && (
          <>
            <Form.Item label="标签名称" name="label">
              <Input
                onBlur={() => {
                  blurFn();
                }}
                placeholder="标签名称"
              />
            </Form.Item>
            <Form.Item label="标题是否一行" name="isTitleRow">
              <Radio.Group
                onChange={() => {
                  blurFn();
                }}
              >
                <Radio value={true}>是</Radio>
                <Radio value={false}>否</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="是否必选" name="required">
              <Radio.Group
                onChange={() => {
                  blurFn();
                }}
              >
                <Radio value={true}>是</Radio>
                <Radio value={false}>否</Radio>
              </Radio.Group>
            </Form.Item>
            {currentItem.type === 'field' && (
              <Form.Item
                label="placeholder"
                name="placeholder"
                rules={[{ required: true, message: 'placeholder必填!' }]}
              >
                <Input
                  onBlur={() => {
                    blurFn();
                  }}
                  placeholder="请输入placeholder"
                />
              </Form.Item>
            )}
            {currentItem.type === 'field' &&
              currentItem.inputType === 'textarea' && (
                <Form.Item label="默认值" name="value">
                  <Input.TextArea
                    onBlur={() => {
                      blurFn();
                    }}
                    placeholder="请输入默认值"
                  />
                </Form.Item>
              )}
            {currentItem.type === 'field' &&
              currentItem.inputType === undefined && (
                <Form.Item label="默认值" name="value">
                  <Input
                    onBlur={() => {
                      blurFn();
                    }}
                    placeholder="请输入默认值"
                  />
                </Form.Item>
              )}
            {currentItem.type === 'radio' && (
              <Form.Item label="默认值" name="value">
                <Radio.Group
                  onChange={() => {
                    blurFn();
                  }}
                >
                  {(currentItem?.enum || []).map((it) => {
                    return (
                      <Radio key={it.code} value={it.code}>
                        {it.text}
                      </Radio>
                    );
                  })}
                </Radio.Group>
              </Form.Item>
            )}
            {currentItem.type === 'checkboxGroup' && (
              <Form.Item label="默认值" name="value">
                <Checkbox.Group
                  onChange={() => {
                    blurFn();
                  }}
                >
                  {(currentItem?.enum || []).map((it) => {
                    return (
                      <Checkbox key={it.code} value={it.code}>
                        {it.text}
                      </Checkbox>
                    );
                  })}
                </Checkbox.Group>
              </Form.Item>
            )}
          </>
        )}
        {(currentItem.type === 'radio' ||
          currentItem.type === 'checkboxGroup' ||
          currentItem.type === 'step' ||
          currentItem.type === 'picker') && (
          <>
            <EditTable
              tableCallback={(value) => {
                blurFn(value);
              }}
              currentItem={currentItem}
            />
          </>
        )}
      </Form>
    </>
  );
};

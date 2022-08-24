import { Button, Form, Input, Popconfirm, Table } from 'antd';
import React, { useContext, useEffect, useRef, useState } from 'react';
const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (record) {
      form.setFieldsValue({
        [dataIndex]: record[dataIndex],
      });
    }
  }, [record]);

  const save = async () => {
    try {
      const values = await form.validateFields();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };
  let childNode = children;
  childNode = editable ? (
    <Form.Item
      style={{ margin: 0}}
      name={dataIndex}
      rules={[
        {
          required: true,
          message: `${title}必填.`,
        },
      ]}
    >
      <Input ref={inputRef} onPressEnter={save} onBlur={save} />
    </Form.Item>
  ) : (
    <div
      className="editable-cell-value-wrap"
      style={{
        paddingRight: 24,
      }}
    >
      {children}
    </div>
  );
  return <td {...restProps}>{childNode}</td>;
};

const EditTable = (props) => {
  const {currentItem} = props;
  const [dataSource, setDataSource] = useState();
  const [count, setCount] = useState(0);
  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
    props.tableCallback(newData)
  };
  useEffect(()=>{
    setDataSource((currentItem.enum||[]).map((it,index)=>({...it,key:index})));
    setCount(currentItem.enum.length)
  },[currentItem])

  const defaultColumns = [
    {
      title: 'code',
      dataIndex: 'code',
      width: '30%',
      editable: true,
    },
    {
      title: 'text',
      dataIndex: 'text', width: '40%',
      editable: true,
    },
    {
      title: '操作',
      width: '30%',
      dataIndex: 'operation',
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm
            title="确定是否要删除?"
            onConfirm={() => handleDelete(record.key)}
          >
            <a>删除</a>
          </Popconfirm>
        ) : null,
    },
  ];

  const handleAdd = () => {
    const newData = {
      key: count,
      code: '',
      text: '',
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
  };

  const handleSave = (row) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    setDataSource(newData);
    props.tableCallback(newData)
  };

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };
  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });
  return (
    <>
      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        title={()=>{
          return '编辑选项'
        }}
        pagination={false}
        dataSource={dataSource}
        columns={columns}
      />
      <Button
        onClick={handleAdd}
        type="primary"
        block
        style={{
          marginBottom: 16,
        }}
      >
        新增一行
      </Button>
    </>
  );
};

export default EditTable;

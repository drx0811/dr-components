import IdCardAuth from './IdCardAuth/IdCardAuth';
import CreditAuth from './CreditAuth/CreditAuth';
import styles from './Index.less'
import { Select, Form } from 'antd';
import { useEffect, useState,memo,useMemo } from 'react';
import ApprovalStatement from './ApprovalStatement/ApprovalStatement';
const { Option } = Select;
const FormModules = (props)=>{
  const { allLibs } = props;
  const libCodeList = allLibs.reduce((pre,cur)=>{
    return [...pre,...cur.children]
  },[]);
  const [formCode,setFormCode] = useState('')
  const [formItem,setFormItem] = useState({})
  const [form] = Form.useForm();
  const getFormItemFn = (code) => {
    setFormCode(code);
    const findLibItem = libCodeList.find(it=>{
      return it.code === code
    });
    if (findLibItem) {
      setFormItem(findLibItem)
    }
  }
  return(
    <Form
      labelCol={{
        span: 9,
      }}
      wrapperCol={{
        span: 13,
      }}
      className={'drag-editFormBox'}
      form={form}
    >
      <h3 className={'drag-editName'}>表单属性</h3>
      <Form.Item label="组件库" name="libCode">
        <Select
          showSearch
          onChange={(code)=>{
            getFormItemFn(code)
          }}
          placeholder="请选择组件库"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option.children).toLowerCase().includes(input.toLowerCase())
          }
        >
          {
            libCodeList.map(item=>{
              return <Option key={item.code} value={item.code}>{item.name}</Option>
            })
          }
        </Select>
      </Form.Item>
      {
        (formCode === 'identityAuthOne'||formCode === 'identityAuthTwo'||formCode === 'identityAuthThree') &&
        <IdCardAuth form={form} formItem={formItem} />
      }
      {
        (formCode === 'creditAuth') &&
        <CreditAuth form={form} formItem={formItem} />
      }
      {
        (formCode === 'approvalStatement') &&
        <ApprovalStatement form={form} formItem={formItem} />
      }

    </Form>
  )
}
export default memo(FormModules)

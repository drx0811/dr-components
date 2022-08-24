import { useEffect } from 'react';
import { Select, Form,InputNumber } from 'antd';
const readMethodEnum = [
  { value:'1',label:"强制阅读" },
  { value:'2',label:"拉至底部" },
]
const CreditAuth = (props)=>{
  const {formItem={},form} = props;
  const {allFormItem} = formItem;
  useEffect(()=>{
    if (allFormItem) {
      form.setFieldsValue({
        readMethod:allFormItem.readMethod,
        readTime:allFormItem.readTime,
      })
    }
  },[props])
  const selectBefore = (
    <Form.Item name="readMethod" noStyle>
      <Select style={{ width: 100 }}>
        {
          readMethodEnum.map(it=>{
            return <Select.Option key={it.value} value={it.value}>{it.label}</Select.Option>
          })
        }
      </Select>
    </Form.Item>
  );
  return (
    <div>
      <Form.Item label="文本阅读设置" name="readTime">
        <InputNumber addonBefore={selectBefore} addonAfter='秒' />
      </Form.Item>
    </div>
  )
}
export default CreditAuth
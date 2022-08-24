import { useEffect } from 'react';
import { Select, Form,InputNumber } from 'antd';
const realAuthMethodEnum = [
  { value:'1',label:"人脸识别" },
  { value:'2',label:"三要素认证" },
  { value:'3',label:"si要素认证" },
]
const IdCardAuth = (props)=>{
  const {formItem={},form} = props;
  const {allFormItem} = formItem;
  useEffect(()=>{
    if (allFormItem) {
      form.setFieldsValue({
        validityDate:allFormItem.validityDate,
        realAuthMethod:allFormItem.realAuthMethod,
      })
    }
  },[props])
  return (
    <div>
      <Form.Item label="身份证剩余有效期" name="validityDate">
        <InputNumber addonAfter="天" />
      </Form.Item>
      <Form.Item label="实名认证方式" name="realAuthMethod">
        <Select
          showSearch
          placeholder="请选择组件库"
          optionFilterProp="children"
        >
          {
            realAuthMethodEnum.map(item=>{
              return <Select.Option key={item.value} value={item.value}>{item.label}</Select.Option>
            })
          }
        </Select>
      </Form.Item>
    </div>
  )
}
export default IdCardAuth
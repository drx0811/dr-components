import { useEffect } from 'react';
import { Form,Input } from 'antd';
const ApprovalStatement = (props)=>{
  const {formItem={},form} = props;
  const {allFormItem} = formItem;
  useEffect(()=>{
    if (allFormItem) {
      form.setFieldsValue({
        approvalStatementDesc:allFormItem.approvalStatementDesc,
      })
    }
  },[props])
  return (
    <div>
      <Form.Item label="录频文案" name="approvalStatementDesc">
        <Input.TextArea
          autoSize={{
            minRows: 2,
            maxRows: 6,
          }}
        />
      </Form.Item>
    </div>
  )
}
export default ApprovalStatement
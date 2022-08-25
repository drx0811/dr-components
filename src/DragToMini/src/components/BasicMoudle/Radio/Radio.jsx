import { Radio, Space } from 'antd'
import Icon, { RightOutlined } from '@ant-design/icons'
import  '../Index.less'
const RadioItem = (props) => {
  let originProps = props.props
  return (
    <div className={"drag-ctrlBox"}>
      <div className={"drag-ctrlName"}>{props.name}</div>
      {
        originProps.isTitleRow ?
          <div className={"drag-ctrlContentBoxRow"}>
            <span className={'drag-ctrlContentLabelRow'}>
              {
                originProps.required && <span style={{color:'red'}}>*</span>
              }
              {originProps.label}
            </span>
            <div className={'drag-ctrlContentRow'}>
              <Radio.Group className={'drag-ctrlContent'} value={originProps.value?originProps.value[0]:undefined}>
                <Space direction={originProps.direction}>
                  {(originProps.enum || []).map((item) => {
                    return (
                      <Radio key={item.code} value={item.code}>
                        {item.text}
                      </Radio>
                    )
                  })}
                </Space>
              </Radio.Group>
              <RightOutlined className={'drag-ctrlContentIcon'} />
            </div>
          </div>:
          <div className={'drag-ctrlContentBox'}>
            <span className={'drag-ctrlContentLabel'}>
               {
                 originProps.required && <span style={{color:'red'}}>*</span>
               }
              {originProps.label}
            </span>
            <Radio.Group className={'drag-ctrlContent'} value={originProps.value?originProps.value[0]:undefined}>
              <Space direction={originProps.direction}>
                {(originProps.enum || []).map((item) => {
                  return (
                    <Radio key={item.code} value={item.code}>
                      {item.text}
                    </Radio>
                  )
                })}
              </Space>
            </Radio.Group>
            <RightOutlined className={'drag-ctrlContentIcon'} />
          </div>
      }
    </div>
  )
}
export default RadioItem

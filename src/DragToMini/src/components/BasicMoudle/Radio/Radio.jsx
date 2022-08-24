import { Radio, Space } from 'antd'
import Icon, { RightOutlined } from '@ant-design/icons'
import style from '../Index.less'
const RadioItem = (props) => {
  let originProps = props.props
  return (
    <div className={style.ctrlBox}>
      <div className={style.ctrlName}>{props.name}</div>
      {
        originProps.isTitleRow ?
          <div className={style.ctrlContentBoxRow}>
            <span className={style.ctrlContentLabelRow}>
              {
                originProps.required && <span style={{color:'red'}}>*</span>
              }
              {originProps.label}
            </span>
            <div className={style.ctrlContentRow}>
              <Radio.Group className={style.ctrlContent} value={originProps.value?originProps.value[0]:undefined}>
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
              <RightOutlined className={style.ctrlContentIcon} />
            </div>
          </div>:
          <div className={style.ctrlContentBox}>
            <span className={style.ctrlContentLabel}>
               {
                 originProps.required && <span style={{color:'red'}}>*</span>
               }
              {originProps.label}
            </span>
            <Radio.Group className={style.ctrlContent} value={originProps.value?originProps.value[0]:undefined}>
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
            <RightOutlined className={style.ctrlContentIcon} />
          </div>
      }
    </div>
  )
}
export default RadioItem

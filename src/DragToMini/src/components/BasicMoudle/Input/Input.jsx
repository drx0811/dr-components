import { Input } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import style from '../Index.less'
import classNames from 'classnames';
const InputItem = (props) => {
  let originProps = props.props
  let { titleWidth,isTitleRow, ...inputProps } = originProps
  let { inputType, ...textareaProps } = inputProps;
  return (
    <div className={style.ctrlBox}>
      <div className={style.ctrlName}>{props.name}</div>
      {
        originProps.isTitleRow ?
        <div className={style.ctrlContentBoxRow}>
          <span className={style.ctrlContentLabelRow}>
            {
              textareaProps.required && <span style={{color:'red'}}>*</span>
            }
            {textareaProps.label}
          </span>
          <div className={style.ctrlContentRow}>
            {
              inputType==='textarea' ?
              <Input.TextArea
                className={style.ctrlContent}
                bordered={false}
                {...textareaProps}
              />:
              <Input
                className={style.ctrlContent}
                bordered={false}
                style={{ width: '50%' }}
                {...textareaProps}
              />
            }
            <RightOutlined className={style.ctrlContentIcon} />
          </div>
        </div>:
          <div className={style.ctrlContentBox}>
            <span className={classNames(style.ctrlContentLabel)}>
              {
                textareaProps.required && <span style={{color:'red'}}>*</span>
              }
              {textareaProps.label}
            </span>
            {
              inputType ==='textarea' ?
                <Input.TextArea
                  className={style.ctrlContent}
                  bordered={false}
                  {...textareaProps}
                />:
                <Input
                  className={style.ctrlContent}
                  bordered={false}
                  style={{ width: '50%' }}
                  {...textareaProps}
                />
            }
            <RightOutlined className={style.ctrlContentIcon} />
          </div>
      }
    </div>
  )
}
export default InputItem

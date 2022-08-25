import { Input } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import '../Index.less'
import classNames from 'classnames';
const InputItem = (props) => {
  let originProps = props.props
  let { titleWidth,isTitleRow, ...inputProps } = originProps
  let { inputType, ...textareaProps } = inputProps;
  return (
    <div className={"drag-ctrlBox"}>
      <div className={"drag-ctrlName"}>{props.name}</div>
      {
        originProps.isTitleRow ?
        <div className={"drag-ctrlContentBoxRow"}>
          <span className={'drag-ctrlContentLabelRow'}>
            {
              textareaProps.required && <span style={{color:'red'}}>*</span>
            }
            {textareaProps.label}
          </span>
          <div className={'drag-ctrlContentRow'}>
            {
              inputType==='textarea' ?
              <Input.TextArea
                className={'drag-ctrlContent'}
                bordered={false}
                {...textareaProps}
              />:
              <Input
                className={'drag-ctrlContent'}
                bordered={false}
                style={{ width: '50%' }}
                {...textareaProps}
              />
            }
            <RightOutlined className={'drag-ctrlContentIcon'} />
          </div>
        </div>:
          <div className={'drag-ctrlContentBox'}>
            <span className={classNames('drag-ctrlContentLabel')}>
              {
                textareaProps.required && <span style={{color:'red'}}>*</span>
              }
              {textareaProps.label}
            </span>
            {
              inputType ==='textarea' ?
                <Input.TextArea
                  className={'drag-ctrlContent'}
                  bordered={false}
                  {...textareaProps}
                />:
                <Input
                  className={'drag-ctrlContent'}
                  bordered={false}
                  style={{ width: '50%' }}
                  {...textareaProps}
                />
            }
            <RightOutlined className={'drag-ctrlContentIcon'} />
          </div>
      }
    </div>
  )
}
export default InputItem

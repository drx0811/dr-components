import Icon, { RightOutlined } from '@ant-design/icons'
import style from '../Index.less'
const DatePickerItem = (originProps) => {
  const { props = {} } = originProps;
  return (
    <div className={style.ctrlBox}>
      <div className={style.ctrlName}>{originProps.name}</div>
      {
        props.isTitleRow ?
          <div className={style.ctrlContentBoxRow}>
            <span className={style.ctrlContentLabelRow}> {props.required && <span style={{ color: 'red' }}>*</span>}{props.label}</span>
            <div className={style.ctrlContentRow}>
              {props.value ? (
                <span className={style.value}>{props.value}</span>
              ) : (
                <span className={style.placeholder}>{props.placeholder}</span>
              )}
              <RightOutlined className={style.ctrlContentIcon} />
            </div>
          </div>:
          <div className={style.ctrlContentBox}>
            <span className={style.ctrlContentLabel}> {props.required && <span style={{ color: 'red' }}>*</span>}{props.label}</span>
            <div className={style.ctrlContent}>
              {props.value ? (
                <span className={style.value}>{props.value}</span>
              ) : (
                <span className={style.placeholder}>{props.placeholder}</span>
              )}
            </div>
            <RightOutlined className={style.ctrlContentIcon} />
          </div>
      }
    </div>
  )
}
export default DatePickerItem

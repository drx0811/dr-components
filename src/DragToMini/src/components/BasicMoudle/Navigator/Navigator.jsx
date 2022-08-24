import { Button } from 'antd'
import style from '../Index.less'
const NavigatorItem = (props) => {
  let originProps = props.props
  return (
    <div className={style.ctrlBox}>
      <div className={style.ctrlName}>{props.name}</div>
      <div className={style.ctrlContentBox}>
        <Button type="text">{originProps.label}</Button>
      </div>
    </div>
  )
}
export default NavigatorItem

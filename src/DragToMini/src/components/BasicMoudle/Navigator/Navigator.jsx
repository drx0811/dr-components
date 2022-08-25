import { Button } from 'antd'
import  '../Index.less'
const NavigatorItem = (props) => {
  let originProps = props.props
  return (
    <div className={"drag-ctrlBox"}>
      <div className={"drag-ctrlName"}>{props.name}</div>
      <div className={'drag-ctrlContentBox'}>
        <Button type="text">{originProps.label}</Button>
      </div>
    </div>
  )
}
export default NavigatorItem

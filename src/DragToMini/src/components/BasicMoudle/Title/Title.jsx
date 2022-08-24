
import style from '../Index.less'
const TitleItem = (originProps) => {
  const props = originProps.props;
  return (
    <div className={style.ctrlBox}>
      <div className={style.ctrlName}>{originProps.name}</div>
      <div className={style.ctrlContentBox}>
        <span className={style.ctrlContentLabel}>{originProps.title}</span>
        <span>（{props.desc}）</span>
      </div>
    </div>
  )
}
export default TitleItem

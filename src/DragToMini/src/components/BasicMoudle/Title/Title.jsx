import  '../Index.less'
const TitleItem = (originProps) => {
  const props = originProps.props;
  return (
    <div className={"drag-ctrlBox"}>
      <div className={"drag-ctrlName"}>{originProps.name}</div>
      <div className={'drag-ctrlContentBox'}>
        <span className={'drag-ctrlContentLabel'}>{originProps.title}</span>
        <span>（{props.desc}）</span>
      </div>
    </div>
  )
}
export default TitleItem

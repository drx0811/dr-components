import React from 'react'
import  '../Index.less'
export default (originProps) => {
  const { props = {} } = originProps
  return (
    <div className={"drag-ctrlBox"}>
      <div className={"drag-ctrlName"}>{originProps.name}</div>
      <div className={'drag-ctrlContentBox'}>
        <div dangerouslySetInnerHTML={{ __html: props.value }}></div>
      </div>
    </div>
  )
}

import React from 'react'
import style from '../Index.less'
export default (originProps) => {
  const { props = {} } = originProps
  return (
    <div className={style.ctrlBox}>
      <div className={style.ctrlName}>{originProps.name}</div>
      <div className={style.ctrlContentBox}>
        <div dangerouslySetInnerHTML={{ __html: props.value }}></div>
      </div>
    </div>
  )
}

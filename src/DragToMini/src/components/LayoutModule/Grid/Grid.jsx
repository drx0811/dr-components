import React from 'react'
import style from '../Index.less'
import { v4 as flagUuid } from 'uuid'
const GridItem = (originProps) => {
  const { props } = originProps;
  return (
    <div className={style.ctrlBox}>
      <div className={style.ctrlName}>{originProps.name}</div>
      <div className={style.ctrlContentBox}>
        {originProps.children}
      </div>
    </div>
  )
}
export default GridItem

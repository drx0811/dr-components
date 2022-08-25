import React from 'react'
import  '../Index.less'
import { v4 as flagUuid } from 'uuid'
const GridItem = (originProps) => {
  const { props } = originProps;
  return (
    <div className={'drag-ctrlBox'}>
      <div className={'drag-ctrlName'}>{originProps.name}</div>
      <div className={'drag-ctrlContentBox'}>
        {originProps.children}
      </div>
    </div>
  )
}
export default GridItem

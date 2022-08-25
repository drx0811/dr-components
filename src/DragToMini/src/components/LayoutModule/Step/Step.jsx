import { Steps } from 'antd'
import React from 'react'
const { Step } = Steps
import  '../Index.less'
const StepItem = (originProps) => {
  const { props = {} } = originProps;
  return (
    <div className={'drag-ctrlBox'}>
      <div className={'drag-ctrlName'}>{originProps.name}</div>
      <div className={'drag-ctrlContentBox'}>
        <Steps progressDot={true} size="small" current={props.active}>
          {
            (props.enum||[]).map(it=>{
              return <Step key={it.code} title={it.text} />
            })
          }
        </Steps>
      </div>
    </div>
  )
}
export default StepItem

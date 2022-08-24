import { Steps } from 'antd'
import React from 'react'
const { Step } = Steps
import style from '../Index.less'
const StepItem = (originProps) => {
  const { props = {} } = originProps;
  console.log(props);

  return (
    <div className={style.ctrlBox}>
      <div className={style.ctrlName}>{originProps.name}</div>
      <div className={style.ctrlContentBox}>
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

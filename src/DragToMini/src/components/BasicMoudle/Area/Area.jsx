import { RightOutlined } from '@ant-design/icons';
import '../Index.less';
const AreaItem = (originProps) => {
  const { props = {} } = originProps;
  return (
    <div className={'drag-ctrlBox'}>
      <div className={'drag-ctrlName'}>{originProps.name}</div>
      {props.isTitleRow ? (
        <div className={'drag-ctrlContentBoxRow'}>
          <span className={'drag-ctrlContentLabelRow'}>
            {props.required && <span style={{ color: 'red' }}>*</span>}
            {props.label}
          </span>
          <div className={'drag-ctrlContentRow'}>
            {props.value ? (
              <span className={'drag-value'}>{props.value}</span>
            ) : (
              <span className={'drag-placeholder'}>{props.placeholder}</span>
            )}
            <RightOutlined className={'drag-ctrlContentIcon'} />
          </div>
        </div>
      ) : (
        <div className={'drag-ctrlContentBox'}>
          <span className={'drag-ctrlContentLabel'}>
            {props.required && <span style={{ color: 'red' }}>*</span>}
            {props.label}
          </span>
          <div className={'drag-ctrlContent'}>
            {props.value ? (
              <span className={'drag-value'}>{props.value}</span>
            ) : (
              <span className={'drag-placeholder'}>{props.placeholder}</span>
            )}
          </div>
          <RightOutlined className={'drag-ctrlContentIcon'} />
        </div>
      )}
    </div>
  );
};
export default AreaItem;

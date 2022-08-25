import { Image } from 'antd';
import '../Index.less';
const ImageItem = (originProps) => {
  const { props = {} } = originProps;
  return (
    <div className={"drag-ctrlBox"}>
      <div className={"drag-ctrlName"}>{originProps.name}</div>
      {props.isTitleRow ? (
        <div className={"drag-ctrlContentBoxRow"}>
          <span className={'drag-ctrlContentLabelRow'}>
            {props.required && <span style={{ color: 'red' }}>*</span>}
            {props.label}
          </span>
          <div className={'drag-ctrlContentRow'}>
            <Image
              className={'drag-ctrlContent'}
              width={100}
              height={100}
              src=""
            />
          </div>
        </div>
      ) : (
        <div className={'drag-ctrlContentBox'}>
          <span className={'drag-ctrlContentLabel'}>
            {props.required && <span style={{ color: 'red' }}>*</span>}
            {props.label}
          </span>
          <Image
            className={'drag-ctrlContent'}
            width={100}
            height={100}
            src=""
          />
        </div>
      )}
    </div>
  );
};
export default ImageItem;

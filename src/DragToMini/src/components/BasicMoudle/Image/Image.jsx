import { Image } from 'antd';
import style from '../Index.less';
const ImageItem = (originProps) => {
  const { props = {} } = originProps;
  return (
    <div className={style.ctrlBox}>
      <div className={style.ctrlName}>{originProps.name}</div>
      {props.isTitleRow ? (
        <div className={style.ctrlContentBoxRow}>
          <span className={style.ctrlContentLabelRow}>
            {props.required && <span style={{ color: 'red' }}>*</span>}
            {props.label}
          </span>
          <div className={style.ctrlContentRow}>
            <Image
              className={style.ctrlContent}
              width={100}
              height={100}
              src=""
            />
          </div>
        </div>
      ) : (
        <div className={style.ctrlContentBox}>
          <span className={style.ctrlContentLabel}>
            {props.required && <span style={{ color: 'red' }}>*</span>}
            {props.label}
          </span>
          <Image
            className={style.ctrlContent}
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

import { RightOutlined } from '@ant-design/icons';
import { Checkbox, Space } from 'antd';
import style from '../Index.less';
const CheckboxItem = (props) => {
  let originProps = props.props;
  return (
    <div className={style.ctrlBox}>
      <div className={style.ctrlName}>{props.name}</div>
      {originProps.isTitleRow ? (
        <div className={style.ctrlContentBoxRow}>
          <span className={style.ctrlContentLabelRow}>
            {originProps.required && <span style={{ color: 'red' }}>*</span>}
            {originProps.label}
          </span>
          <div className={style.ctrlContentRow}>
            <Checkbox.Group
              className={style.ctrlContent}
              value={originProps.value}
            >
              <Space direction={originProps.direction}>
                {(originProps.enum || []).map((item) => {
                  return (
                    <Checkbox key={item.code} value={item.code}>
                      {item.text}
                    </Checkbox>
                  );
                })}
              </Space>
            </Checkbox.Group>
            <RightOutlined className={style.ctrlContentIcon} />
          </div>
        </div>
      ) : (
        <div className={style.ctrlContentBox}>
          <span className={style.ctrlContentLabel}>
            {originProps.required && <span style={{ color: 'red' }}>*</span>}
            {originProps.label}
          </span>
          <Checkbox.Group
            className={style.ctrlContent}
            value={originProps.value}
          >
            <Space direction={originProps.direction}>
              {(originProps.enum || []).map((item) => {
                return (
                  <Checkbox key={item.code} value={item.code}>
                    {item.text}
                  </Checkbox>
                );
              })}
            </Space>
          </Checkbox.Group>
          <RightOutlined className={style.ctrlContentIcon} />
        </div>
      )}
    </div>
  );
};
export default CheckboxItem;

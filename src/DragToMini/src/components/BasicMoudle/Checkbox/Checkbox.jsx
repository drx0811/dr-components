import { RightOutlined } from '@ant-design/icons';
import { Checkbox, Space } from 'antd';
import '../Index.less';
const CheckboxItem = (props) => {
  let originProps = props.props;
  return (
    <div className={"drag-ctrlBox"}>
      <div className={"drag-ctrlName"}>{props.name}</div>
      {originProps.isTitleRow ? (
        <div className={"drag-ctrlContentBoxRow"}>
          <span className={'drag-ctrlContentLabelRow'}>
            {originProps.required && <span style={{ color: 'red' }}>*</span>}
            {originProps.label}
          </span>
          <div className={'drag-ctrlContentRow'}>
            <Checkbox.Group
              className={'drag-ctrlContent'}
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
            <RightOutlined className={'drag-ctrlContentIcon'} />
          </div>
        </div>
      ) : (
        <div className={'drag-ctrlContentBox'}>
          <span className={'drag-ctrlContentLabel'}>
            {originProps.required && <span style={{ color: 'red' }}>*</span>}
            {originProps.label}
          </span>
          <Checkbox.Group
            className={'drag-ctrlContent'}
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
          <RightOutlined className={'drag-ctrlContentIcon'} />
        </div>
      )}
    </div>
  );
};
export default CheckboxItem;

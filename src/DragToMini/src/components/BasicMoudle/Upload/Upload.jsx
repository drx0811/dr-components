import { PlusOutlined } from '@ant-design/icons'
import { Upload } from 'antd'
import React, { useState } from 'react'
import style from '../Index.less'
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })

const UploadItem = (originProps) => {
  const { props = {} } = originProps
  const [fileList, setFileList] = useState([])
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj)
    }
  }
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList)
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        {props.placeholder}
      </div>
    </div>
  )
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
            <Upload
              className={style.ctrlContent}
              action=""
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
          </div>
        </div>
      ):(
        <div className={style.ctrlContentBox}>
          <span className={style.ctrlContentLabel}> {props.required && <span style={{ color: 'red' }}>*</span>}{props.label}</span>
          <Upload
            className={style.ctrlContent}
            action=""
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
          >
            {fileList.length >= 8 ? null : uploadButton}
          </Upload>
        </div>
      )}
    </div>
  )
}
export default UploadItem

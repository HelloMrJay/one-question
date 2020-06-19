import React, { useState } from 'react';
import { Button, Input } from 'antd';
import PageTitle from '../../../components/page-title';
import withModal, { WithModalProps } from '../../../components/modal';
import Form from '../../../components/form'
import './index.scss';

const fields = [
  {
    label: '用户名',
    name: 'username',
    type: 'input',
    key: 'username',
    placeholder: '请输入用户名',
    labelCol: { span: 6 },
    rules: [{ required: true, message: '请输入用户名' }]
  },
  {
    label: '密码',
    name: 'password',
    type: 'password',
    key: 'password',
    placeholder: '请输入密码',
    labelCol: { span: 6 },
    rules: [{ required: true, message: '请输入密码' }]
  },
  {
    label: '邮箱',
    name: 'email',
    type: 'input',
    key: 'email',
    placeholder: '请输入邮箱',
    labelCol: { span: 6 },
    rules: [{ required: true, message: '请输入邮箱' }]
  }
]

@withModal
class Modal extends React.Component<WithModalProps> {
  render() {
    return (
      <Form fields={fields} />
    )
  }
}

const UserList:React.FC = () => {
  const [visible, setVisible] = useState(false)
  const addStaffHandler = () => {
    setVisible(true)
  }

  return (
    <div className="user-list-container">
      <div className="user-list__header">
        <PageTitle title="用户列表" />
        <div className="filter-wrapper">
          <div className="w188">
            <Input placeholder="请输入关键字" />
          </div>
          <Modal
            onCancel={() => setVisible(false)}
            visible={visible}
            title={'新增用户'}
            onOk={() => setVisible(false)}
          />
          <Button type="primary" onClick={() => addStaffHandler()}>新增用户</Button>
        </div>
      </div>
    </div>
  )
}

export default UserList;

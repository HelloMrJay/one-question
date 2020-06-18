import React, { useState } from 'react';
import { Button, Input } from 'antd';
import PageTitle from '../../../components/page-title';
import withModal, { WithModalProps } from '../../../components/modal';
import './index.scss';

@withModal
class Modal extends React.Component<WithModalProps> {
  render() {
    return <span>弹出框内容</span>;
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

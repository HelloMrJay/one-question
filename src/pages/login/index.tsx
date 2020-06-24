import React from "react";
import "./login.scss";
import {
  Form,
  Input,
  Button,
  Col
} from 'antd';
import { login } from '@api/user';
import { useHistory } from 'react-router-dom'

import {
  UserOutlined,
  LockOutlined
} from '@ant-design/icons';

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const Login: React.FC = () => {
  const history = useHistory()

  const onFinishHandler = async (values: User.LF) => {
    let res = await login(values)
    if (res) {
      localStorage.setItem('USER_INFO', JSON.stringify(res))
      history.push('/home')
    }
    console.log(res)
  }

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-form__header">
          <Col span={3} />
          <img src={require('@image/Logo.png')} width="100%" height="80px" alt=""/>
        </div>

        <div className="login-form__content">
          <Form
            {...layout}
            name="basic"
            onFinish={(values) => onFinishHandler(values as User.LF)}
          >
            <Form.Item
              label="用户名"
              name="username"
              rules={[{ required: true, message: '请输入用户名!' }]}
            >
              <Input placeholder="请输入用户名" autoComplete="off" prefix={<UserOutlined />} />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: '请输入密码!' }]}
            >
              <Input.Password prefix={<LockOutlined />} placeholder="请输入密码" />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                登 录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from 'react';
import { Form, Input, Button, Row, Col, Card } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';

const ForgotPassword = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
    // Add logic to handle form submission (e.g., sending a reset password link)
  };

  return (
   
        <Card >
          <div className="text-center"style={{width:"100%",flexDirection:"column",display:"flex",justifyContent:"center",alignItems:"center" }}>
            <h3><LockOutlined style={{ fontSize: '64px'}} /></h3>
            <h2 className="text-center">Forgot Password?</h2>
            <p>You can reset your password here.</p>
          </div>
          <Form name="forgot_password_form" onFinish={onFinish}>
            <Form.Item name="email" rules={[{ required: true, message: 'Please enter your email!' }]}>
              <Input prefix={<MailOutlined />} placeholder="Email Address" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Reset Password
              </Button>
            </Form.Item>
          </Form>
        </Card>
    
  );
};

export default ForgotPassword;

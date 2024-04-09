import React from 'react';
import { Card, Form, Input, DatePicker, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import { UserHeader } from '../Header/Header';

const { TextArea } = Input;

const MyForm = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
  <UserHeader/>
    <div style={{ backgroundColor: '#f0f2f5', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card title="Customer Information" style={{ width: 900, backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',marginTop:"3.5rem" }}>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
          style={{padding: '15px',display:"grid",gridTemplateColumns:" repeat(auto-fit, minmax(200px, 1fr))",justifyContent:"flex-start",columnGap:"1rem" }}
        >
          <Form.Item label="CHOOSE PACKAGE" name="choosePackage" style={{ marginBottom: '15px' }}>
            <Input />
          </Form.Item>
          <Form.Item label="First Name" name="firstName" style={{ marginBottom: '15px' }}>
            <Input />
          </Form.Item>
          <Form.Item label="Last Name" name="lastName" style={{ marginBottom: '15px' }}>
            <Input />
          </Form.Item>
          <Form.Item label="Title" name="title" style={{ marginBottom: '15px' }}>
            <Input />
          </Form.Item>
          <Form.Item label="DOB" name="dob" style={{ marginBottom: '15px' }}>
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item label="Room" name="room" style={{ marginBottom: '15px' }}>
            <Input />
          </Form.Item>
          <Form.Item label="Bedding" name="bedding" style={{ marginBottom: '15px' }}>
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email" style={{ marginBottom: '15px' }}>
            <Input />
          </Form.Item>
          <Form.Item label="Phone Number" name="phoneNumber" style={{ marginBottom: '15px' }}>
            <Input />
          </Form.Item>
          <Form.Item label="Mobile Number" name="mobileNumber" style={{ marginBottom: '15px' }}>
            <Input />
          </Form.Item>
       
          <Form.Item label="Amount Due" name="amountDue" style={{ marginBottom: '15px' }}>
            <Input />
          </Form.Item>
          <Form.Item label="Deposit Due" name="depositDue" style={{ marginBottom: '15px' }}>
            <Input />
          </Form.Item>
          <Form.Item label="Remainder Due" name="remainderDue" style={{ marginBottom: '15px' }}>
            <Input />
          </Form.Item>
          <Form.Item label="Travel Insurance" name="travelInsurance" style={{ marginBottom: '20px' }}>
            <Input />
          </Form.Item>
          <Form.Item label="Notes" name="notes" style={{ marginBottom: '15px' }}>
            <TextArea />
          </Form.Item>
       
        
        </Form>
        <div style={{width:"96%",display:"flex",justifyContent:"flex-end",gap:"1rem"}}>
        <Button type="primary" htmlType="submit" >
              Save
            </Button>
            <Button type="primary">
              Edit
            </Button>
            <Button >
           <NavLink to={"/cardinfo"}>Next</NavLink>  
            </Button>
        </div>
      </Card>
    </div>
    </>
  );
};

export default MyForm;

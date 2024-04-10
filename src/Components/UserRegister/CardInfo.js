import React from 'react';
import { Card, Form, Input, Button, Row, Col } from 'antd';
import { NavLink } from 'react-router-dom';


const CardInfo = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>

    <div style={{ backgroundColor: '#f0f2f5', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card title="Payment Information" style={{ width: 600, backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',marginTop:"3rem"}}>
        <Form
          name="paymentForm"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
          style={{ padding: '15px' }}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="First Name" name="firstName">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Last Name" name="lastName">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Credit Card Type" name="creditCardType">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Credit Card Number" name="creditCardNumber">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Expiry Date (MM/YY)" name="expiryDate">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="CVV" name="cvv">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item label="Billing Address" name="billingAddress">
            <Input.TextArea />
          </Form.Item>
        
        </Form>

        <div style={{width:"96%",display:"flex",justifyContent:"flex-end",gap:"1rem"}}>
        <Button>     <NavLink to={"/userregister"}>Back </NavLink> 
            </Button>
        <Button type="primary" htmlType="submit" style={{ marginRight: '10px' }}>
              Save
            </Button>
            <Button type="primary">
        Edit
            </Button>
          </div>
      </Card>
    </div>
    </>
  );
};

export default CardInfo;

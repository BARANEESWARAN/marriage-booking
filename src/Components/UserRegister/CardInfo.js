import React, { useEffect, useState } from "react";
import { Card, Input, Button, Row, Col, message } from "antd";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const CardInfo = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const [editingId, setEditingId] = useState(id);
  const currentAccessToken = localStorage.getItem("accesstoken");
  const [disable, setDisable] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    creditCardType: "",
    creditCardNumber: "",
    expiryDate: "",
    cvv: "",
    billingAddress: "",
    eventid: id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/data");
      const userData = response.data.find((item) => item.id === editingId);
      console.log("1", userData.payment);
      if (userData && userData.payment) {
        // If user data exists, filter it based on access token
        const currentUserData = userData.payment.find(
          (payment) => payment.eventid === id
        );

        if (currentUserData) {
          console.log("3");
          // If user with matching access token exists, set it to the form values
          setFormData({
            ...currentUserData,
          });
          setDisable(true);
        }
      }

      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [editingId]);

  const handleSubmit = async (e) => {
    try {
      const isIdExists = data && data.some((item) => item.id === editingId);
      if (isIdExists) {
        const updatedData = data.map((item) => {
          if (item.id === editingId) {
            if (!item.payment) {
              // If user array doesn't exist, create it and add the new user object
              return {
                ...item,
                payment: [{ ...formData }],
              };
            } else if (item.payment.some((payment) => payment.eventid === id)) {
              // If user array exists and user with matching email exists, update the user object
              const updatedUserArray = item.payment.map((payment) => {
                if (payment.eventid === id) {
                  return { ...payment, ...formData };
                }
                return payment;
              });
              return {
                ...item,
                payment: updatedUserArray,
              };
            } else {
              // If user array exists but no user with matching email, add the new user object
              return {
                ...item,
                payment: [...item.payment, { ...formData }],
              };
            }
          }
          return item;
        });
        await axios.put(
          `http://localhost:8000/data/${editingId}`,
          updatedData.find((item) => item.id === editingId)
        );
      } else {
        await axios.post("http://localhost:8000/data", {
          ...formData,
        });
      }

      message.success("Thankyou, data saved successfully.");
      navigate("/");
    } catch (error) {
      console.error("Error adding/updating data:", error);
    } finally {
      fetchData();
    }
  };

  const handleEdit = () => {
    setDisable(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#f0f2f5",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          title="Payment Information"
          style={{
            width: 600,
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            marginTop: "3rem",
          }}
        >
          <div style={{ padding: "15px" }}>
            <Row gutter={16}>
              <Col span={12}>
                <div style={{ marginBottom: "15px" }}>
                  <label>First Name</label>
                  <Input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    disabled={disable}
                  />
                </div>
              </Col>
              <Col span={12}>
                <div style={{ marginBottom: "15px" }}>
                  <label>Last Name</label>
                  <Input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    disabled={disable}
                  />
                </div>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <div style={{ marginBottom: "15px" }}>
                  <label>Credit Card Type</label>
                  <Input
                    name="creditCardType"
                    value={formData.creditCardType}
                    onChange={handleChange}
                    disabled={disable}
                  />
                </div>
              </Col>
              <Col span={12}>
                <div style={{ marginBottom: "15px" }}>
                  <label>Credit Card Number</label>
                  <Input
                    name="creditCardNumber"
                    value={formData.creditCardNumber}
                    onChange={handleChange}
                    disabled={disable}
                  />
                </div>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <div style={{ marginBottom: "15px" }}>
                  <label>Expiry Date (MM/YY)</label>
                  <Input
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    disabled={disable}
                  />
                </div>
              </Col>
              <Col span={12}>
                <div style={{ marginBottom: "15px" }}>
                  <label>CVV</label>
                  <Input
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    disabled={disable}
                  />
                </div>
              </Col>
            </Row>
            <div style={{ marginBottom: "20px" }}>
              <label>Billing Address</label>
              <Input.TextArea
                name="billingAddress"
                value={formData.billingAddress}
                onChange={handleChange}
                disabled={disable}
              />
            </div>
          </div>
          <div
            style={{
              width: "96%",
              display: "flex",
              justifyContent: "flex-end",
              gap: "1rem",
              padding: "15px",
            }}
          >
            <Button>
              <NavLink to={`/userregister/${id}`}>Back</NavLink>
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              style={{ marginRight: "10px" }}
              onClick={handleSubmit}
              disabled={disable}
            >
              Save
            </Button>
            <Button type="primary" onClick={handleEdit}>
              Edit
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
};

export default CardInfo;

import React, { useEffect, useState } from "react";
import { Card, Input, Button, Row, Col, message, DatePicker } from "antd";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./CreateEvent.css";

const CreateEvent = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const [editingId, setEditingId] = useState(id);
  const currentAccessToken = localStorage.getItem("accesstoken");
  const [disable, setDisable] = useState(false);
  const [formData, setFormData] = useState({
    eventname: "",
    startdate: "",
    enddate: "",
    location: "",
  });

  const handleChange = (e, dateString) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      await axios.post("http://localhost:8000/data", {
        ...formData,
      });

      message.success("Thankyou, data saved successfully.");
      navigate("/");
    } catch (error) {
      console.error("Error adding/updating data:", error);
    } finally {
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
          alignItems: "flex-start",
        }}
      >
        <Card
          title="Create Event"
          style={{
            width: 600,
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            marginTop: "5rem",
          }}
        >
          <div style={{ padding: "15px" }}>
            <Row gutter={16}>
              <Col span={12}>
                <div style={{ marginBottom: "15px" }}>
                  <label>Event Name</label>
                  <Input
                    name="eventname"
                    value={formData.eventname}
                    onChange={handleChange}
                    disabled={disable}
                  />
                </div>
              </Col>

              <Col span={12}>
                <div style={{ marginBottom: "15px" }}>
                  <label>Location</label>
                  <Input
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    disabled={disable}
                  />
                </div>
              </Col>

              <Col span={12}>
                <div style={{ marginBottom: "15px" }}>
                  <label>Start Date</label>
                  <DatePicker
                    name="startdate"
                    value={formData.startdate}
                    onChange={handleChange}
                    disabled={disable}
                  />
                </div>
              </Col>

              <Col span={12}>
                <div style={{ marginBottom: "15px" }}>
                  <label>End Date</label>
                  <DatePicker
                    name="enddate"
                    value={formData.enddate}
                    onChange={handleChange}
                    disabled={disable}
                  />
                </div>
              </Col>
            </Row>
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
            <Button
              type="primary"
              htmlType="submit"
              style={{ marginRight: "10px" }}
              onClick={handleSubmit}
              disabled={disable}
            >
              Save
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
};

export default CreateEvent;

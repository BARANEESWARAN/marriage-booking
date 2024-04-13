import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Header from "../Header/Header";
import {
  Modal,
  Card,
  Input,
  Button,
  Row,
  Col,
  message,
  DatePicker,
  Popconfirm,
} from "antd";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BaseUrl } from "../../BaseUrl/Url";
import ViewCard from "../ViewCard/ViewCard";
import dayjs from "dayjs";
import moment from "moment";

// Define a Card component

const Dashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([
    {
      "id": "1",
      "eventname": "event 1",
      "startdate": "2024-04-15",
      "enddate": "2024-04-17",
      "location": "location 1",
      "user": [
        {
          "choosePackage": "1000",
          "firstName": "Barani",
          "lastName": "A",
          "title": "Marriage",
          "dob": "",
          "room": "2",
          "bedding": "1",
          "email": "Brendan.Cleary@gtigrows.com",
          "phoneNumber": "+913024942953",
          "mobileNumber": "+913024942953",
          "amountDue": "100",
          "depositDue": "800",
          "remainderDue": "400",
          "travelInsurance": "500",
          "notes": "with ac",
          "accesstoken": "baranees1@gmail.com"
        },
        {
          "choosePackage": "dfsdfds",
          "firstName": "asd",
          "lastName": "sad",
          "title": "aa",
          "dob": "2024-04-18",
          "room": "a",
          "bedding": "a",
          "email": "baranees1@gmail.com",
          "phoneNumber": "a",
          "mobileNumber": "a",
          "amountDue": "a",
          "depositDue": "a",
          "remainderDue": "a",
          "travelInsurance": "a",
          "notes": "a",
          "accesstoken": "baranees1@gmail.com"
        }
      ],
      "payment": [
        {
          "firstName": "asd",
          "lastName": "sad",
          "creditCardType": "a",
          "creditCardNumber": "a",
          "expiryDate": "a",
          "cvv": "a",
          "billingAddress": "",
          "email": "baranees1@gmail.com"
        }
      ]
    },
    {
      "id": "2",
      "eventname": "event 2",
      "startdate": "2024-05-20",
      "enddate": "2024-05-22",
      "location": "location 2",
      "user": [
        {
          "choosePackage": "2000",
          "firstName": "Prashanth",
          "lastName": "A",
          "title": "Marriage",
          "dob": "",
          "room": "2",
          "bedding": "1",
          "email": "Brendan.Cleary@gtigrows.com",
          "phoneNumber": "+913024942953",
          "mobileNumber": "+913024942953",
          "amountDue": "100",
          "depositDue": "800",
          "remainderDue": "400",
          "travelInsurance": "500",
          "notes": "no",
          "accesstoken": "baranees1@gmail.com"
        },
        {
          "choosePackage": "dfsdfds",
          "firstName": "asd",
          "lastName": "sad",
          "title": "a",
          "dob": "",
          "room": "2",
          "bedding": "a",
          "email": "Brendan.Cleary@gtigrows.com",
          "phoneNumber": "+913024942953",
          "mobileNumber": "+913024942953",
          "amountDue": "100",
          "depositDue": "800",
          "remainderDue": "400",
          "travelInsurance": "500",
          "notes": "a"
        },
        {
          "choosePackage": "20000",
          "firstName": "Barani0",
          "lastName": "sad0",
          "title": "m0",
          "dob": "",
          "room": "20",
          "bedding": "a0",
          "email": "baranees1@gmail.com",
          "phoneNumber": "+9130249429530",
          "mobileNumber": "+9130249429530",
          "amountDue": "1000",
          "depositDue": "8000",
          "remainderDue": "4000",
          "travelInsurance": "5000",
          "notes": "no0",
          "accesstoken": "baranees1@gmail.com"
        }
      ],
      "payment": [
        {
          "firstName": "BArani",
          "lastName": "A",
          "creditCardType": "a",
          "creditCardNumber": "A",
          "expiryDate": "A",
          "cvv": "A",
          "billingAddress": "A",
          "email": "baranees1@gmail.com"
        }
      ]
    },
    {
      "id": "3",
      "eventname": "event 3",
      "startdate": "2024-06-10",
      "enddate": "2024-06-12",
      "location": "location 3"
    },
    {
      "id": "4",
      "eventname": "event 4",
      "startdate": "2024-07-05",
      "enddate": "2024-07-07",
      "location": "location 4"
    },
    {
      "id": "5",
      "eventname": "event 5",
      "startdate": "2024-08-12",
      "enddate": "2024-08-14",
      "location": "location 5"
    },
    {
      "id": "c433",
      "eventname": "event 6",
      "startdate": "2024-04-26",
      "enddate": "2024-05-26",
      "location": "location 6"
    },
    {
      "id": "965a",
      "eventname": "event 7",
      "startdate": "2024-04-30",
      "enddate": "",
      "location": "location 7"
    },
    {
      "id": "2f6b",
      "eventname": "event 8",
      "startdate": "2024-04-02",
      "enddate": "2024-04-30",
      "location": "location 8"
    },
    {
      "id": "86c9",
      "eventname": "Barani event",
      "startdate": "2024-04-01",
      "enddate": "2024-04-10",
      "location": "chennai"
    }
  ]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState(false);
  const { id } = useParams();
  const [userId, setUserId] = useState();
  const [editingId, setEditingId] = useState(id);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);

  const [formData, setFormData] = useState({
    eventname: "",
    startdate: "",
    enddate: "",
    location: "",
  });

  const [formDataEdit, setFormDataEdit] = useState({
    eventname: "",
    startdate: "",
    enddate: "",
    location: "",
  });

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const result = await axios.get(BaseUrl);
        setData(result.data);
        setLoading(false);
        console.log("first", result.data);
      } catch {
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/data");
      const userData = response.data.find((item) => item.id === editingId);
      console.log(userData, "data");
      if (userData) {
        // If user data exists, filter it based on access token
        setFormDataEdit({
          ...userData,
        });
      }
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [editingId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleChangeEdit = (e) => {
    const { name, value } = e.target;
    setFormDataEdit({ ...formDataEdit, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      await axios.post("http://localhost:8000/data", {
        ...formData,
      });

      message.success("Event Created successfully.");
      handleCancel();
      // navigate("/");
    } catch (error) {
      console.error("Error adding/updating data:", error);
    } finally {
      fetchData();
      handleClear()
    }
  };

  const handleUpdate = async (e) => {
    try {
      const updatedData = data.map((item) => {
        console.log(item, "item");
        if (item.id === editingId) {
          // If user array exists and user with matching email exists, update the user object
          return {
            ...item,
            ...formDataEdit,
          };
        }
        return item;
      });
      console.log(updatedData, "updateddasta");
      await axios.put(
        `http://localhost:8000/data/${editingId}`,
        updatedData.find((item) => item.id === editingId)
      );
      message.success("Event updated successfully.");
    } catch (error) {
      console.error("Error adding/updating data:", error);
    } finally {
      fetchData();
      handleCancelEdit();
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/data/${id}`);
      const newData = data.filter((item) => item.id !== id);
      setData(newData);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  // const handleDelete = async (id) => {
  //   setEditingId(id);
  //   try {
  //     const deleteData = data.map((item) => {
  //       console.log(item, "item");
  //       if (item.id === editingId) {
  //         return "";
  //       }
  //       return item;
  //     });
  //     console.log(deleteData, "deletedata");
  //     await axios.put(
  //       `http://localhost:8000/data/${editingId}`,
  //       deleteData.find((item) => item.id === editingId)
  //     );
  //   } catch (error) {
  //     console.error("Error adding/updating data:", error);
  //   } finally {
  //     fetchData();
  //   }
  // };

  const handleClear = () => {
    setFormData({
      eventname: "",
      startdate: "",
      enddate: "",
      location: "",
    });
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModalEdit = () => {
    setIsModalOpenEdit(true);
  };

  const handleOkEdit = () => {
    setIsModalOpenEdit(false);
  };

  const handleCancelEdit = () => {
    setIsModalOpenEdit(false);
  };

  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };

  const handleEdit = async (id) => {
    setEditingId(id);
    setIsModalOpenEdit(true);
    fetchData();
  };

  const Cards = ({ data }) => {
    return (
      <Card className="card">
        <h2>
          {data["first name"]} {data["eventname"]}
        </h2>
        <p>
          <span className="bold">Location:</span> {data.location}
        </p>
        <p>
          <span className="bold">StartDate:</span> {data.startdate}
        </p>
        <p>
          <span className="bold">EndDate:</span> {data.enddate}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          <Button type="primary" onClick={() => handleEdit(data.id)}>
            Edit
          </Button>
          <Popconfirm
            className="commonPopconfirm"
            title="Delete the Event"
            description="Are you sure to delete this Event"
            onConfirm={() => handleDelete(data.id)}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <Button>Delete</Button>
          </Popconfirm>
        </div>
      </Card>
    );
  };

  const handleDateChange = (date, dateString) => {
    if (date) {
      // Check if date is not null or undefined
      setFormData({ ...formData, startdate: dateString });
      // setFormData({ ...formData, enddate: dateString });
    } else {
      // Handle case where date is null or undefined
      // For example, set startdate to an empty string or some default value
      setFormData({ ...formData, startdate: "" });
      // setFormData({ ...formData, enddate: dateString });
    }
  };

  console.log(formData.startdate, "??,date");

  return (
    <>
      <Modal
        title="Create Event"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
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
                />
              </div>
            </Col>

            <Col span={12}>
              <div style={{ marginBottom: "15px" }}>
                <label>Start Date</label>
                <DatePicker
                  style={{ width: "100%" }}
                  name="startdate"
                  value={formData.startdate ? moment(formData.startdate) : null}
                  onChange={(date,dateString) => setFormData({ ...formData, startdate: dateString })}
                />
              </div>
            </Col>

            <Col span={12}>
              <div style={{ marginBottom: "15px" }}>
                <label>End Date</label>
                <DatePicker
                  style={{ width: "100%" }}
                  name="enddate"
                  value={formData.enddate ? moment(formData.enddate) : null}
                  onChange={(date, dateString) =>
                    setFormData({ ...formData, enddate: dateString })
                  }
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
          >
            Save
          </Button>
        </div>
      </Modal>

      <Modal
        title="Edit Event"
        open={isModalOpenEdit}
        onOk={handleOkEdit}
        onCancel={handleCancelEdit}
        footer={false}
      >
        <div style={{ padding: "15px" }}>
          <Row gutter={16}>
            <Col span={12}>
              <div style={{ marginBottom: "15px" }}>
                <label>Event Name</label>
                <Input
                  name="eventname"
                  value={formDataEdit.eventname}
                  onChange={handleChangeEdit}
                />
              </div>
            </Col>

            <Col span={12}>
              <div style={{ marginBottom: "15px" }}>
                <label>Location</label>
                <Input
                  name="location"
                  value={formDataEdit.location}
                  onChange={handleChangeEdit}
                />
              </div>
            </Col>

            <Col span={12}>
              <div style={{ marginBottom: "15px" }}>
                <label>Start Date</label>
                <DatePicker
                  style={{ width: "100%" }}
                  name="startdate"
                  value={dayjs(formDataEdit.startdate)}
                  onChange={(date, dateString) =>
                    setFormDataEdit({ ...formDataEdit, startdate: dateString })
                  }
                />
              </div>
            </Col>

            <Col span={12}>
              <div style={{ marginBottom: "15px" }}>
                <label>End Date</label>
                <DatePicker
                  style={{ width: "100%" }}
                  name="enddate"
                  // value={formDataEdit.enddate}
                  value={dayjs(formDataEdit.enddate)}
                  onChange={(date, dateString) =>
                    setFormDataEdit({ ...formDataEdit, enddate: dateString })
                  }
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
            onClick={handleUpdate}
          >
            Update
          </Button>
        </div>
      </Modal>

      {loading === false ? (
        view === false ? (
          <>
            <div className="create-btn">
              <Button type="primary" onClick={showModal}>
                Create Event
              </Button>
            </div>
            <div className="card-container">
              {data && data.map((card) => <Cards key={card.id} data={card} />)}
            </div>
          </>
        ) : (
          <>
            <ViewCard id={userId} />
          </>
        )
      ) : (
        <div className="loader">
          <div className="custom-loader"></div>
        </div>
      )}
    </>
  );
};

export default Dashboard;

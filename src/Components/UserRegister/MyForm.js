import React, { useEffect, useState } from 'react';
import { Card, Form, Input, DatePicker, Button } from 'antd';
import { NavLink, useParams } from 'react-router-dom';
import { BaseUrl } from '../../BaseUrl/Url';
import axios from 'axios';
import { UserUrl } from '../../BaseUrl/UserUrl';
import dayjs from 'dayjs';
import moment from 'moment';

const { TextArea } = Input;

const MyForm = () => {
  const {id}=useParams()
  const [data, setData] = useState(null);
  const [formData, setFormData] = useState({});
  const [editingId, setEditingId] = useState(id);
  const currentAccessToken= localStorage.getItem("accesstoken")
  const[disable,setDisable]=useState(false)
  const [formValues, setFormValues] = useState({
    choosePackage: "",
    firstName: "",
    lastName: "",
    title: "",
    dob: "",
    room: "",
    bedding: "",
    email: currentAccessToken?currentAccessToken:"",
    phoneNumber: "",
    mobileNumber: "",
    amountDue: "",
    depositDue: "",
    remainderDue: "",
    travelInsurance: "",
    notes: "",
    accesstoken: currentAccessToken?currentAccessToken:""
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

 








  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/data');
      const userData = response.data.find(item => item.id === editingId);
      console.log("1",userData.user)
      if (userData && userData.user) {
      
        // If user data exists, filter it based on access token
        const currentUserData = userData.user.find(user => user.email === currentAccessToken);
        console.log("2",currentUserData)
        if (currentUserData) {
          console.log("3")
          // If user with matching access token exists, set it to the form values
          setFormValues({
        
            ...currentUserData
          });
          setDisable(true)
        }
      }
   
        setData(response.data);
     




     
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [editingId]);


  const handleSubmit = async (e) => {
  
    try {
      const isIdExists = data && data.some(item => item.id === editingId);
      if (isIdExists) {
        const updatedData = data.map(item => {
          if (item.id === editingId) {
            if (!item.user) {
              // If user array doesn't exist, create it and add the new user object
              return {
                ...item,
                user: [{ ...formValues }]
              };
            } else if (item.user.some(user => user.email === currentAccessToken)) {
              // If user array exists and user with matching email exists, update the user object
              const updatedUserArray = item.user.map(user => {
                if (user.email === currentAccessToken) {
                  return { ...user, ...formValues };
                }
                return user;
              });
              return {
                ...item,
                user: updatedUserArray
              };
            } else {
              // If user array exists but no user with matching email, add the new user object
              return {
                ...item,
                user: [...item.user, { ...formValues }]
              };
            }
          }
          return item;
        });
        await axios.put(`http://localhost:8000/data/${editingId}`, updatedData.find(item => item.id === editingId));
       
      } else {
        await axios.post('http://localhost:8000/data', {
          ...formValues,
        });
      }
      
      
    
      setFormValues({
        choosePackage: "",
        firstName: "",
        lastName: "",
        title: "",
        dob: "",
        room: "",
        bedding: "",
        email: "",
        phoneNumber: "",
        mobileNumber: "",
        amountDue: "",
        depositDue: "",
        remainderDue: "",
        travelInsurance: "",
        notes: ""
      }); // Clear the form values after submission
  
    } catch (error) {
      console.error('Error adding/updating data:', error);
    }

    finally{
      fetchData();
    }
  };
  
  

  const handleEdit = () => {
 
    setDisable(false)
  };


  
  

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <div style={{ backgroundColor: '#f0f2f5', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Card title="Customer Information" style={{ width: 900, backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginTop: "3.5rem" }}>
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={handleSubmit}
            onFinishFailed={onFinishFailed}
            layout="vertical"
            style={{ padding: '15px', display: "grid", gridTemplateColumns: " repeat(auto-fit, minmax(200px, 1fr))", justifyContent: "flex-start", columnGap: "1rem" }}
          >
            <div style={{ marginBottom: '15px' }}>
              <label>CHOOSE PACKAGE</label>
              <Input name="choosePackage" value={formValues.choosePackage} onChange={handleChange} disabled={disable}/>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label>First Name</label>
              <Input name="firstName" value={formValues.firstName} onChange={handleChange} disabled={disable} />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label>Last Name</label>
              <Input name="lastName" value={formValues.lastName} onChange={handleChange} disabled={disable} />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label>Title</label>
              <Input name="title" value={formValues.title} onChange={handleChange} disabled={disable}/>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label>DOB</label>

              {
                formValues.dob?
                (
                  <DatePicker style={{ width: '100%' }} disabled={disable} allowClear={false}
                  value={dayjs(formValues.dob)}
                  onChange={(date, dateString) =>
                    setFormValues({ ...formValues, dob: dateString })
                  }
                placeholder='value'
                />

                ):
                (
                

                <DatePicker
                style={{ width: "100%" }}
                name="enddate"
                value={formData.dob ? moment(formValues.dob) : null}
                onChange={(date, dateString) =>
                  setFormValues({ ...formValues, dob: dateString })
                }
                placeholder='no value'
              />
                )
              }
            
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label>Room</label>
              <Input name="room" value={formValues.room} onChange={handleChange} disabled={disable}/>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label>Bedding</label>
              <Input name="bedding" value={formValues.bedding} onChange={handleChange} disabled={disable}/>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label>Email</label>
              <Input name="email" value={formValues.email} onChange={handleChange} disabled={true}   required/>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label>Phone Number</label>
              <Input name="phoneNumber" value={formValues.phoneNumber} onChange={handleChange} disabled={disable}/>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label>Mobile Number</label>
              <Input name="mobileNumber" value={formValues.mobileNumber} onChange={handleChange} disabled={disable}/>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label>Amount Due</label>
              <Input name="amountDue" value={formValues.amountDue} onChange={handleChange} disabled={disable}/>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label>Deposit Due</label>
              <Input name="depositDue" value={formValues.depositDue} onChange={handleChange} disabled={disable}/>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label>Remainder Due</label>
              <Input name="remainderDue" value={formValues.remainderDue} onChange={handleChange} disabled={disable}/>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label>Travel Insurance</label>
              <Input name="travelInsurance" value={formValues.travelInsurance} onChange={handleChange} disabled={disable}/>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label>Notes</label>
              <TextArea name="notes" value={formValues.notes} onChange={handleChange} disabled={disable}/>
            </div>
            <Button type="primary" htmlType="submit" disabled={disable}>
              Save
            </Button>
            <Button type="primary" onClick={handleEdit}>
              Edit
            </Button>
            <Button>
              <NavLink to={`/cardinfo/${id}`}>Next</NavLink>
            </Button>
          </Form>
          <div style={{ width: "96%", display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
          </div>
        </Card>
        
      </div>
    </>
  );
};

export default MyForm;

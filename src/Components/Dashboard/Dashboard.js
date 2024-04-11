import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import Header from '../Header/Header';
import { Button, Card } from 'antd';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { BaseUrl } from '../../BaseUrl/Url';
import ViewCard from '../ViewCard/ViewCard';

// Define a Card component


const Dashboard = () => {
    const navigate=useNavigate()
const[data,setData]=useState()
const[loading,setLoading]=useState(true)
const[view,setView]=useState(false)
const {id}=useParams()
const[userId,setUserId]=useState()
  useEffect(()=>{

    const getData=async()=>{

      setLoading(true)
    try{
      const result= await axios.get(BaseUrl)
      setData(result.data)
     setLoading(false)
      console.log("first",result.data)
    }

    catch{
      setLoading(false)
    }
    finally{
      setLoading(false)
    }




    
    }
    getData()
    },[])


    const Cards = ({ data }) => {
      
        return (
          <Card className="card">
            <h2>{data["first name"]} {data["last name"]}</h2>
        <p>Title: {data.title}</p>
        <p>DOB: {data.dob}</p>
        <p>Room: {data.room}</p>
        <p>Bedding: {data.bedding}</p>
        <p>Email: {data.email}</p>
        <p>Phone Number: {data["phone number"]}</p>
        {/* <p>Notes: {data.notes}</p>
        <p>Amount Due: {data["amount due"]}</p>
        <p>Deposit Due: {data["deposit due"]}</p>
        <p>Remainder Due: {data["remainder due"]}</p>
        <p>Travel Insurance: {data["travel insurance"]}</p>
        <p>Credit Card Type: {data["credit card type"]}</p>
        <p>Credit Card Number: {data["credit card number"]}</p>
        <p>Expiry Date: {data["expiry date (mm/yy)"]}</p>
        <p>CVV: {data.cvv}</p>
        <p>Billing Address: {data["billing address"]}</p> */}
          {/* onClick={()=>navigate(`/viewcard/${data.id}`)} */}
          <Button className='view-btn' type='primary' onClick={()=>
            
            {
                setUserId(data.id)
                setView(true)}
          }>
           View
          </Button>
          </Card>
        );
      };
  

    return (
        <>
          {loading === false ? (
            view === false ? (
              <>
                <div className='card-container'>
                  {data && data.map((card) => (
                    <Cards
                      key={card.id}
                      data={card}
                    />
                  ))}
                </div>
              </>
            ) : (
              <>
                <ViewCard  id={userId}/>
              </>
            )
          ) : (
            <div className='loader'>
              <div className="custom-loader"></div>
            </div>
          )}
        </>
      );
      
};

export default Dashboard;

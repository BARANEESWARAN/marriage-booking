import React, { useEffect, useState } from 'react';
import './Landing.css';
import Header from '../Header/Header';
import { Button, Card } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BaseUrl } from '../../BaseUrl/Url';

// Define a Card component
const Cards = ({ data }) => {
  const navigate=useNavigate()
  return (
    <Card className="card">
      <h2>{data["FIRST NAME"]} {data["LAST NAME"]}</h2>
      <p>Title: {data.TITLE}</p>
      <p>DOB: {data.DOB}</p>
      <p>Room: {data.ROOM}</p>
      <p>Bedding: {data.BEDDING}</p>
      <p>Email: {data.EMAIL}</p>
      <p>Phone Number: {data["PHONE NUMBER"]}</p>
      <p>Notes: {data.NOTES}</p>
      <p>Amount Due: {data["AMOUNT DUE"]}</p>
      <p>Deposit Due: {data["DEPOSIT DUE"]}</p>
      <p>Remainder Due: {data["REMAINDER DUE"]}</p>
      <p>Travel Insurance: {data["TRAVEL INSURANCE"]}</p>
      <p>Credit Card Type: {data["CREDIT CARD TYPE"]}</p>
      <p>Credit Card Number: {data["CREDIT CARD NUMBER"]}</p>
      <p>Expiry Date: {data["EXPIRY DATE (MM/YY)"]}</p>
      <p>CVV: {data.CVV}</p>
      <p>Billing Address: {data["BILLING ADDRESS"]}</p>
    
    <Button className='view-btn' type='primary' onClick={()=>navigate("/login")}>

     View
    </Button>
    </Card>
  );
};

const LandingPage = () => {

const[data,setData]=useState()
const[loading,setLoading]=useState(true)
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


  
  

  return (
    <>
   
{
  loading===false?
  (
    <div className='card-container'>
    {data&&data.map((card) => (
      <Cards
        key={card.id}
        data={card}
      />
    ))}
  </div>

    
  ):
  (
    <div className='loader'>
<div className="custom-loader"></div>
    </div>

  )
}




   
    </>
  );
};

export default LandingPage;

import React, { useEffect, useState } from 'react';
import './ViewCard.css';
import Header from '../Header/Header';
import { Button, Card } from 'antd';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { BaseUrl } from '../../BaseUrl/Url';

// Define a Card component
const Cards = ({ data }) => {
  const navigate=useNavigate()

  return (
    <Card className="card">
       <h2>{data["first name"]} {data["last name"]}</h2>
  <p>Title: {data.title}</p>
  <p>DOB: {data.dob}</p>
  <p>Room: {data.room}</p>
  <p>Bedding: {data.bedding}</p>
  <p>Email: {data.email}</p>
  <p>Phone Number: {data["phone number"]}</p>
  <p>Notes: {data.notes}</p>
  <p>Amount Due: {data["amount due"]}</p>
  <p>Deposit Due: {data["deposit due"]}</p>
  <p>Remainder Due: {data["remainder due"]}</p>
  <p>Travel Insurance: {data["travel insurance"]}</p>
  <p>Credit Card Type: {data["credit card type"]}</p>
  <p>Credit Card Number: {data["credit card number"]}</p>
  <p>Expiry Date: {data["expiry date (mm/yy)"]}</p>
  <p>CVV: {data.cvv}</p>
  <p>Billing Address: {data["billing address"]}</p>
    <div style={{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:"1rem"}}>


    <Button className='view-btn' type='primary' >

     Edit
    </Button>
    <Button className='view-btn'  >

     Delete
    </Button>
    </div>
    </Card>
  );
};

const ViewCard = (props) => {

const[data,setData]=useState()
const[loading,setLoading]=useState(true)
const id=props.id

console.log(props)
  useEffect(()=>{

    const getData=async()=>{

      setLoading(true)
    try{
        const result = await axios.get(BaseUrl);
        const specificUser = result.data.filter(user => user.id === id); // Replace specificId with the ID you want to find
        setData(specificUser);
        setLoading(false);
        console.log("first", specificUser);
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

export default ViewCard;

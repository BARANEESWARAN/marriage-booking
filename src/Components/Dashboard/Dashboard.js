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
                <h2>{data["first name"]} {data["eventname"]}</h2>
  <p><span className='bold'>Location:</span> {data.location}</p>
  <p><span className='bold'>StartDate:</span> {data.startdate}</p>
  <p><span className='bold'>EndDate:</span> {data.enddate}</p>
  <div style={{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:"1rem",marginTop:"1rem"}}>
   
          <Button  type='primary' >

     Edit
    </Button>
    <Button   >

     Delete
    </Button>
    </div>
          </Card>
        );
      };
  

    return (
        <>
          {loading === false ? (
            view === false ? (
              <>
              <div className='create-btn'>

          
              <Button type='primary' >Create Event</Button>
              </div>
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

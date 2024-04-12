import React, { useEffect, useState } from 'react';
import './Landing.css';
import Header from '../Header/Header';
import { Button, Card } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BaseUrl } from '../../BaseUrl/Url';

// Define a Card component
const Cards = ({ data }) => {
  const navigate = useNavigate()
  const accesstoken = localStorage.getItem("accesstoken")
  const handleClick = () => {
    if (accesstoken) {
      navigate(`/userregister/${data.id}`)
    }
    else {
      navigate(`/login/${data.id}`)
    }

  }
  return (
    <Card className="card">
      <h2>{data["first name"]} {data["eventname"]}</h2>
      <p><span className='bold'>Location:</span> {data.location}</p>
      <p><span className='bold'>StartDate:</span> {data.startdate}</p>
      <p><span className='bold'>EndDate:</span> {data.enddate}</p>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "1rem" }}>


        <Button className='view-btn' type='primary' onClick={handleClick}>

          View
        </Button>
      </div>
    </Card>
  );
};

const LandingPage = () => {

  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)
  useEffect(() => {

    const getData = async () => {

      setLoading(true)
      try {
        const result = await axios.get(BaseUrl)
        setData(result.data)
        setLoading(false)
        console.log("first", result.data)
      }

      catch {
        setLoading(false)
      }
      finally {
        setLoading(false)
      }





    }
    getData()
  }, [])





  return (
    <>

      {
        loading === false ?
          (
            <div className='card-container'>
              {data && data.map((card) => (
                <Cards
                  key={card.id}
                  data={card}
                />
              ))}
            </div>


          ) :
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

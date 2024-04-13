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
  ])
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
        data ?
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

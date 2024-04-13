import React, { useState, useRef, useEffect } from 'react';
import { DeleteOutlined, EditOutlined, SearchOutlined, InfoCircleFilled } from '@ant-design/icons';
import { Space, Input, Button, Table, Form, message } from 'antd';
import Highlighter from 'react-highlight-words';
import "./UserDetails.css";
import axios from 'axios';
import { BaseUrl } from '../../BaseUrl/Url';
import { FaUsersViewfinder } from "react-icons/fa6";
function UserDetails() {
    const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const[user,setUser]=useState(false)
    const[userTable,setUserTable]=useState(false)
const[id,setId]=useState()
    const searchInput = useRef(null);
const [data,setData]=useState([
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
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };

    const columns = [
        {
            title: 'Event Name',
            dataIndex: 'eventname',
            key: 'eventname',
            sorter: (a, b) => a.choosePackage.localeCompare(b.choosePackage),
            ...getColumnSearchProps('eventname'),
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
            ...getColumnSearchProps('location'),
        },
        {
            title: 'Start Date',
            dataIndex: 'startdate',
            key: 'startdate',
          
        },
        {
            title: 'End Date',
            dataIndex: 'enddate',
            key: 'enddate',
        },
     
        {
            title: 'Registered Users',
            key: 'Registered Users',
            width:150,
            align:"center",
            render: (text, record) => (
                <Space size="middle">
                    <Button icon={<FaUsersViewfinder />} onClick={() => handle_edit(text, record)} />
                    {/* <Button icon={<DeleteOutlined />} onClick={() => handle_delete(text)} /> */}
                </Space>
            ),
        },
    ];
    const UserColumns = [
        {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName',
            fixed:"left"
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',
            fixed:"left"
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            fixed:"left"
        },
        {
            title: 'Amount Due',
            dataIndex: 'amountDue',
            key: 'amountDue',
        },
        {
            title: 'Bedding',
            dataIndex: 'bedding',
            key: 'bedding',
        },
        {
            title: 'Choose Package',
            dataIndex: 'choosePackage',
            key: 'choosePackage',
        },
        {
            title: 'Deposit Due',
            dataIndex: 'depositDue',
            key: 'depositDue',
        },
        {
            title: 'DOB',
            dataIndex: 'dob',
            key: 'dob',
        },
     
        {
            title: 'Mobile Number',
            dataIndex: 'mobileNumber',
            key: 'mobileNumber',
        },
        {
            title: 'Notes',
            dataIndex: 'notes',
            key: 'notes',
        },
        {
            title: 'Phone Number',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
        },
        {
            title: 'Remainder Due',
            dataIndex: 'remainderDue',
            key: 'remainderDue',
        },
        {
            title: 'Room',
            dataIndex: 'room',
            key: 'room',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Travel Insurance',
            dataIndex: 'travelInsurance',
            key: 'travelInsurance',
        },
    ];
    
    
    

    function getColumnSearchProps(dataIndex) {
        return {
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
                <div style={{ padding: 8 }}>
                    <Input
                        ref={searchInput}
                        placeholder={`Search ${dataIndex}`}
                        value={selectedKeys[0]}
                        onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                        onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        style={{ width: 188, marginBottom: 8, display: 'block' }}
                    />
                    <Space>
                        <Button
                            type="primary"
                            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                            icon={<SearchOutlined />}
                            size="small"
                            style={{ width: 90 }}
                        >
                            Search
                        </Button>
                        <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                            Reset
                        </Button>
                    </Space>
                </div>
            ),
            filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
            onFilter: (value, record) =>
                record[dataIndex] ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()) : '',
            onFilterDropdownVisibleChange: (visible) => {
                if (visible) {
                    setTimeout(() => searchInput.current.select(), 100);
                }
            },
            render: (text) =>
                searchedColumn === dataIndex ? (
                    <Highlighter
                        highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                        searchWords={[searchText]}
                        autoEscape
                        textToHighlight={text ? text.toString() : ''}
                    />
                ) : (
                    text
                ),
        };
    }
    const fetchData=async()=>{
        try{
            const responce=await axios.get(BaseUrl)
         
    setData(responce.data)

            
        }
        catch{
    
        }
    }

    useEffect(()=>{
fetchData()

},[] )
    const handle_delete = async (value) => {
        // Handle delete functionality
    };

    const handle_edit = (value, record) => {
        // Handle edit functionality
      
            const userData=data.filter(user => user.id === record.id)
            console.log("userData",userData[0].user)
        if(userData[0].user){
            setUser(userData[0].user)
            setUserTable(true)  
        }
        else{
            message.warning("no user found")
        }
      
        // fetchData()
    };

    const handle_clear = async () => {
        // Handle clear functionality
    };
console.log(user,"user")
    return (
        <div>
           {
            userTable===false?
            (
                <div>
                <Table loading={loading} columns={columns}
                dataSource={data}
                scroll={{ x: 'max-content' }}
                />
            </div>
            )
            :
            (
                <div>
                    <Button type='primary' onClick={()=>setUserTable(false)} style={{position:"relative",bottom:"1rem"}}>Back</Button>
                <Table loading={loading} columns={UserColumns}
                dataSource={user}
                scroll={{ x: 'max-content' }}
                />
                </div>
            )
           }
        </div>
    );
}

export default UserDetails;

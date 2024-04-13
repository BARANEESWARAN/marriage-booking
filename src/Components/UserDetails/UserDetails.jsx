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
const [data,setData]=useState()
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

import React, { useState, useRef } from 'react';
import { DeleteOutlined, EditOutlined, SearchOutlined, InfoCircleFilled } from '@ant-design/icons';
import { Space, Input, Button, Table, Form, message } from 'antd';
import Highlighter from 'react-highlight-words';
import "./UserDetails.css";

function UserDetails() {
    const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

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
            title: 'Package',
            dataIndex: 'package',
            key: 'package',
            sorter: (a, b) => a.package.localeCompare(b.package),
            ...getColumnSearchProps('package'),
        },
        {
            title: 'First Name',
            dataIndex: 'first_name',
            key: 'first_name',
            ...getColumnSearchProps('first_name'),
        },
        {
            title: 'Last Name',
            dataIndex: 'last_name',
            key: 'last_name',
            ...getColumnSearchProps('last_name'),
        },
        {
            title: 'DOB',
            dataIndex: 'dob',
            key: 'dob',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            ...getColumnSearchProps('title'),
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button icon={<EditOutlined />} onClick={() => handle_edit(text, record)} />
                    <Button icon={<DeleteOutlined />} onClick={() => handle_delete(text)} />
                </Space>
            ),
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

    const handle_delete = async (value) => {
        // Handle delete functionality
    };

    const handle_edit = (value, record) => {
        // Handle edit functionality
    };

    const handle_clear = async () => {
        // Handle clear functionality
    };

    return (
        <div>
            <div>
                <Table loading={loading} columns={columns}
                
                scroll={{ x: 'max-content' }}
                />
            </div>
        </div>
    );
}

export default UserDetails;

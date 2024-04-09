import React, { useState } from 'react';
import "./AdminDashBoard.css"
import UserDetails from "../UserDetails/UserDetails"
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  ProfileOutlined,
  HomeOutlined
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';

function AdminDashBoard() {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState('4'); // Default selected key
  const navigate = useNavigate();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
      onClick: () => handleMenuItemClick(key)
    };
  }

  const handleMenuItemClick = (key) => {
    setSelectedKey(key);
    // Perform any other actions you need here
  };

  const items = [
    getItem('Home', '1',<NavLink to={"/"}><HomeOutlined /></NavLink>),
    getItem('Dashboard', '2', <PieChartOutlined />),
    getItem('Schedule', '3', <DesktopOutlined />),
    getItem('User Details', '4', <ContainerOutlined />),
    getItem('Notification', '5', <MailOutlined />),
    getItem('My Profile', '6', <AppstoreOutlined />),
    getItem('Help & Support', '7', <MenuUnfoldOutlined />),
    getItem('Logout', '8', <NavLink to={"/"}><HomeOutlined /></NavLink>),
  ];
  const renderComponent = () => {
    switch(selectedKey) {
      
      case '2':
        return <div>Dashboard Component</div>;
      case '3':
        return <div>Schedule Component</div>;
      case '4':
        return <UserDetails />;
      case '5':
        return <div>Notification Component</div>;
      case '6':
        return <div>My Profile Component</div>;
      case '7':
        return <div>Help & Support Component</div>;
      case '8':
        navigate("/"); // Redirect to home page for logout
        return null; // No need to render anything after redirect
      default:
        return null;
    }
  };
  return (

<div className="dashboard_container">
  <div   className={collapsed?"small_sidebar" :"sidebar"}>
  <div style={{ width: 220 }}>
          <Button
            type="primary"
            onClick={toggleCollapsed}
            style={collapsed?{ marginBottom: 11,marginLeft:0,marginTop:4,
              borderRadius:2,
              width:"36%",
              display:"flex",
              alignItems:"center",
              justifyContent:"center"
            }:{  width:"100%", marginBottom: 11,marginLeft:0,marginTop:4,borderRadius:2 }}
          >
            {collapsed ?(
              <div style={{display:"flex",alignItems:"center",gap:"1rem"}}>
                <MenuUnfoldOutlined />
              </div>
            )  :
            (
              <div style={{display:"flex",alignItems:"center",gap:"1rem"}}>
                <MenuFoldOutlined />
                <span style={{fontWeight:"bold"}}>Admin</span> 
              </div>
            )}
          </Button>
          <Menu
            defaultSelectedKeys={[selectedKey]}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={collapsed}
            items={items}
            style={{height:"92vh"}}
          />
        </div>
  </div>
  <div     className={collapsed?"main-content" :"small_main-content"}>
{renderComponent()}
  </div>
</div>


















  );
}

export default AdminDashBoard;

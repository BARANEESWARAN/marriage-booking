import React, { useState } from 'react';
import "./AdminDashBoard.css";
import { BiLogOut } from "react-icons/bi";
import { FacebookOutlined, TwitterOutlined, GoogleOutlined } from '@ant-design/icons';
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
import UserDetails from '../UserDetails/UserDetails';
import { NavLink } from 'react-router-dom';

function AdminDashBoard() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeOption, setActiveOption] = useState('user-details');

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  const renderComponent = () => {
    switch (activeOption) {
      case 'home':
        return 'home';
      case 'dashboard':
        return  'dashboard';
      case 'schedule':
        return 'schedule';
      case 'user-details':
        return (
          <div style={{padding:"3rem 2rem 0 2rem"}}>
          <UserDetails />
          </div>
        );
      case 'notification':
        return 'notification';
      case 'my-profile':
        return 'my-profile';
      case 'help-support':
        return 'help-support';
      default:
        return  'home';
    }
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="logo-details">
          {
            isOpen ?
              <div style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "space-between" }}>
                <div className="logo_name">SideMenu</div>
                <i onClick={toggleSidebar} style={{ cursor: "pointer" }}> <MenuFoldOutlined /></i>
              </div>
              :
              <i className={`bx`} id="btn" onClick={toggleSidebar}><MenuUnfoldOutlined /></i>
          }
        </div>
        <ul className="nav-list">
          <li className={activeOption === 'home' ? 'active' : ''}>
            <a  onClick={() => handleOptionClick('home')}>
              <NavLink to={"/"}>

             
              <i><HomeOutlined /></i>
              <span className="links_name">Home</span>
              </NavLink>
            </a>
            <span className="tooltip">Home</span>
          </li>
          <li className={activeOption === 'dashboard' ? 'active' : ''}>
            <a href="#" onClick={() => handleOptionClick('dashboard')}>
              <i><PieChartOutlined /></i>
              <span className="links_name">Dashboard</span>
            </a>
            <span className="tooltip">Dashboard</span>
          </li>
          <li className={activeOption === 'schedule' ? 'active' : ''}>
            <a href="#" onClick={() => handleOptionClick('schedule')}>
              <i><DesktopOutlined /></i>
              <span className="links_name">Schedule</span>
            </a>
            <span className="tooltip">Schedule</span>
          </li>
          <li className={activeOption === 'user-details' ? 'active' : ''}>
            <a href="#" onClick={() => handleOptionClick('user-details')}>
              <i><ContainerOutlined /></i>
              <span className="links_name">User Details</span>
            </a>
            <span className="tooltip">User Details</span>
          </li>
          <li className={activeOption === 'notification' ? 'active' : ''}>
            <a href="#" onClick={() => handleOptionClick('notification')}>
              <i><MailOutlined /></i>
              <span className="links_name">Notification </span>
            </a>
            <span className="tooltip">Notification </span>
          </li>
          <li className={activeOption === 'my-profile' ? 'active' : ''}>
            <a href="#" onClick={() => handleOptionClick('my-profile')}>
              <i><AppstoreOutlined /></i>
              <span className="links_name">My Profile</span>
            </a>
            <span className="tooltip">My Profile</span>
          </li>
          <li className={activeOption === 'help-support' ? 'active' : ''}>
            <a href="#" onClick={() => handleOptionClick('help-support')}>
              <i><MenuUnfoldOutlined /></i>
              <span className="links_name">Help & Support</span>
            </a>
            <span className="tooltip">Help & Support</span>
          </li>
          <li className="profile">
            {
              isOpen ?
                (
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                    <i style={{ fontSize: "1.3rem" }}><BiLogOut /></i>
                    <div style={{ marginBottom: "7px", fontSize: "1rem" }}>Logout</div>
                  </div>
                )
                :
                (
                  <i style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><BiLogOut /></i>
                )
            }
          </li>
        </ul>
      </div>
      <section className="home-section">

      {renderComponent()}

      </section>
    </>
  );
}

export default AdminDashBoard;

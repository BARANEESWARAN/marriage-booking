import React, { useState } from 'react';
import "./AdminDashBoard.css";
import { BiLogOut } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";

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
import { NavLink, useNavigate } from 'react-router-dom';

function AdminDashBoard() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeOption, setActiveOption] = useState('user-details');
const navigate=useNavigate()
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  const Logout = () => {
   
        navigate("/")
       
     
  };
  const renderComponent = () => {
    switch (activeOption) {
      case 'Create Event':
        return '';

        case 'Schedule':
          return '';

      case 'User Details':
        return (
          <div style={{padding:"3rem 0",width:"95%",margin:"0 auto"}}>
          <UserDetails />
          </div>
        );
    
      case 'My Profile':
        return '';
  
      case 'Help & Support':
        return '';
      default:
        return  'Create Event';
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
          {/* <li className={activeOption === 'home' ? 'active' : ''}>
            <a  onClick={() => handleOptionClick('home')}>
              <NavLink to={"/"}>

             
              <i><HomeOutlined /></i>
              <span className="links_name">Home</span>
              </NavLink>
            </a>
            <span className="tooltip">Home</span>
          </li> */}
          <li className={activeOption === 'Create Event' ? 'active' : ''}>
            <a href="#" onClick={() => handleOptionClick('Create Event')}>
              <i><PieChartOutlined /></i>
              <span className="links_name">Create Event</span>
            </a>
            <span className="tooltip">Create Event</span>
          </li>
          <li className={activeOption === 'Schedule' ? 'active' : ''}>
            <a href="#" onClick={() => handleOptionClick('Schedule')}>
              <i><DesktopOutlined /></i>
              <span className="links_name">Schedule</span>
            </a>
            <span className="tooltip">Schedule</span>
          </li>
          <li className={activeOption === 'User Details' ? 'active' : ''}>
            <a href="#" onClick={() => handleOptionClick('User Details')}>
              <i><ContainerOutlined /></i>
              <span className="links_name">User Details</span>
            </a>
            <span className="tooltip">User Details</span>
          </li>
          {/* <li className={activeOption === 'notification' ? 'active' : ''}>
            <a href="#" onClick={() => handleOptionClick('notification')}>
              <i><MailOutlined /></i>
              <span className="links_name">Notification </span>
            </a>
            <span className="tooltip">Notification </span>
          </li> */}
          <li className={activeOption === 'My Profile' ? 'active' : ''}>
            <a href="#" onClick={() => handleOptionClick('My Profile')}>
              <i><AppstoreOutlined /></i>
              <span className="links_name">My Profile</span>
            </a>
            <span className="tooltip">My Profile</span>
          </li>
          <li className={activeOption === 'Help & Support' ? 'active' : ''}>
            <a href="#" onClick={() => handleOptionClick('Help & Support')}>
              <i><MenuUnfoldOutlined /></i>
              <span className="links_name">Help & Support</span>
            </a>
            <span className="tooltip">Help & Support</span>
          </li>
          <li className="profile">
            {
              isOpen ?
                (
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }} onClick={Logout} >
                    <i style={{ fontSize: "1.3rem" }} ><BiLogOut /></i>
                    <div style={{ marginBottom: "7px", fontSize: "1rem" }}>Logout</div>
                  </div>
                )
                :
                (
                  <i style={{ display: "flex", alignItems: "center", justifyContent: "center" }}  onClick={Logout}><BiLogOut /></i>
                )
            }
          </li>
        </ul>
      </div>
      <section className="home-section">

      <section id="content">
      <nav>

			<h4>{activeOption}</h4>
			<form action="#">
				<div class="form-input">
					<input type="search" placeholder="Search..."/>
					<button type="submit" class="search-btn"><i class='bx bx-search' ></i></button>
				</div>
			</form>
			<input type="checkbox" id="switch-mode" hidden />

			<a href="#" class="notification">
      <IoNotifications />
				<span class="num">8</span>
			</a>
			<a href="#" class="profile">
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw2iMTKL4JKh2Rc0f2RtU8-2QQr-Jj-9TVTA&s"/>
			</a>
		</nav>
    </section>

      {renderComponent()}

      </section>
    </>
  );
}

export default AdminDashBoard;

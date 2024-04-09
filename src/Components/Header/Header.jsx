import React, { useEffect, useState } from 'react'
import "./Header.css"
import {MenuOutlined } from '@ant-design/icons';
import { NavLink, useNavigate } from 'react-router-dom';
export function UserHeader() {
 
const navigate=useNavigate()

  return (
    <header className='header'>
        
         
 <nav>
      <input type="checkbox" id="nav-toggle" />
      <div className="logo"><strong style={{ color: "blue" }}>v</strong><NavLink to={"/"}>ms</NavLink>    </div>
      {/* <ul className="links">
      <li className='home' onClick={()=>navigate("/")}>Home</li>
   

    
       
     




      
      
     
      </ul> */}
      <label htmlFor="nav-toggle" className="icon-burger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </label>
    </nav>
   
      
       

   
     
  
 

    
      <label htmlFor="nav-toggle" className="icon-burger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </label>
  
 
  </header>
  )
}




export function AdminHeader() {
 
  const navigate=useNavigate()
  
    return (
      <header className='header'>
          
           
   <nav>
        <input type="checkbox" id="nav-toggle" />
        <div className="logo"><strong style={{ color: "blue" }}>v</strong><NavLink to={"/"}>ms</NavLink>    </div>
        <ul className="links">
    
        {/* <button className="button-65" onClick={()=>navigate("/admindashboard")}>Dashboard</button> */}
         {/* <button className="log" onClick={()=>navigate("/login")}>Login</button> */}
      <div></div>
         
         <div class="button-div">
    
    <button className="signup-button" onClick={()=>navigate("/admindashboard")}>Dashboard</button>
    <button className="login-button" onClick={()=>navigate("/login")}>Login</button>
    
    
</div>
       
  
  
  
  
        
        
       
        </ul>
        <label htmlFor="nav-toggle" className="icon-burger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </label>
      </nav>
     
        
         

     
       
    
   
  
      
        <label htmlFor="nav-toggle" className="icon-burger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </label>
    
   
    </header>
    )
  }


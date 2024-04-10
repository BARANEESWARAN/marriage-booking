import React, { useEffect, useState } from 'react'
import "./Header.css"
import {MenuOutlined } from '@ant-design/icons';
import { NavLink, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from '@firebase/auth';
import { auth } from '../../firebase';
// export function UserHeader() {
 
// const navigate=useNavigate()

//   return (
//     <header className='header'>
        
         
//  <nav>
//       <input type="checkbox" id="nav-toggle" />
//       <div className="logo"><strong style={{ color: "blue" }}>v</strong><NavLink to={"/"}>ms</NavLink>    </div>
//       {/* <ul className="links">
//       <li className='home' onClick={()=>navigate("/")}>Home</li>
   

    
       
     




      
      
     
//       </ul> */}
//       <label htmlFor="nav-toggle" className="icon-burger">
//         <div className="line"></div>
//         <div className="line"></div>
//         <div className="line"></div>
//       </label>
//     </nav>
   
      
       

   
     
  
 

    
//       <label htmlFor="nav-toggle" className="icon-burger">
//         <div className="line"></div>
//         <div className="line"></div>
//         <div className="line"></div>
//       </label>
  
 
//   </header>
//   )
// }




export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState()
  const navigate=useNavigate()


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (result) => {
      if (result) {

        const {displayName, email} = result
        setUserData({ displayName, email })

        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }

    })

    return () => unsubscribe();
  },[])
console.log("hey",userData)
  const Logout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      setUserData({})
      setIsLoggedIn(false)
    }).catch((error) => {
      // An error happened.
      console.log({ error });
    });
  }
  
    return (
      <header className='header'>
          
           
   <nav>
        <input type="checkbox" id="nav-toggle" />
        <div className="logo"><strong style={{ color: "blue" }}>v</strong><NavLink to={"/"}>ms</NavLink>    </div>
     
    

         

    {
 !userData?
 (
  <>
      <button className="login-button" onClick={()=>navigate("/login")}>Login</button>
  
     
  
  </>
 )
 :
 (




<>
<div class="button-div">

<button className="signup-button" onClick={()=>navigate("/admindashboard")}>Dashboard</button>
<button className="login-button" onClick={Logout}>Logout</button>

</div>
</>
 )
}


  
    
    

       
  
  
  
  
        
        
       
    
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


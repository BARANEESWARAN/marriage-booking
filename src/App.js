import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import  {onAuthStateChanged}  from  'firebase/auth';

import LandingPage from './Components/LandingPage/Landing';
import Login from './Components/LoginPage/Login';
import AdminDashBoard from './Components/AdminDashBoard/AdminDashBoard';
import MyForm from './Components/UserRegister/MyForm';
import CardInfo from './Components/UserRegister/CardInfo';

import { auth } from './firebase';
import User from './Components/ProtectedRouter/User';
import ViewCard from './Components/ViewCard/ViewCard';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {/* <BrowserRouter>
        {user && <Header />}
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          {user ? (
            <>
              <Route path='/admindashboard' element={<AdminDashBoard />} />
              <Route path='/userregister' element={<MyForm />} />
              <Route path='/cardinfo' element={<CardInfo />} />
            </>
          ) : (
            <Navigate to='/login' />
          )}
        </Routes>
      </BrowserRouter> */}



<BrowserRouter>

    <Routes>
    <Route path='/' element={<User/>}>
    <Route path='/'  element={<LandingPage/>}/>
    <Route path='/login/:id'  element={<Login/>}/>
    <Route path='/userregister/:id'  element={<MyForm/>}/>
     <Route path='/cardinfo/:id'  element={<CardInfo/>}/>
     <Route path='/viewcard/:id'  element={<ViewCard/>}/>
     </Route>
    {/* {user && (
            <>
             <Route path='/admindashboard'  element={<AdminDashBoard/>}/>
  
            </>
          ) 
    } */}

<Route path='/admindashboard'  element={<AdminDashBoard/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

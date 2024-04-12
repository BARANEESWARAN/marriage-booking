import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";

import LandingPage from "./Components/LandingPage/Landing";
import Login from "./Components/LoginPage/Login";
import AdminDashBoard from "./Components/AdminDashBoard/AdminDashBoard";
import MyForm from "./Components/UserRegister/MyForm";
import CardInfo from "./Components/UserRegister/CardInfo";
import { Header } from "./Components/Header/Header";
import { auth } from "./firebase";

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
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          {user && (
            <>
              <Route path="/admindashboard" element={<AdminDashBoard />} />
              <Route path="/userregister" element={<MyForm />} />
              <Route path="/cardinfo" element={<CardInfo />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

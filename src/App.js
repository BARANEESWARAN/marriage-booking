
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LandingPage from './Components/LandingPage/Landing';

import Login from './Components/LoginPage/Login';
import AdminDashBoard from './Components/AdminDashBoard/AdminDashBoard';
import MyForm from './Components/UserRegister/MyForm';
import CardInfo from './Components/UserRegister/CardInfo';

function App() {
  return (
   <div>
    <BrowserRouter>

    <Routes>
    <Route path='/'  element={<LandingPage/>}/>
    <Route path='/login'  element={<Login/>}/>
     
     <Route path='/admindashboard'  element={<AdminDashBoard/>}/>
     <Route path='/userregister'  element={<MyForm/>}/>
     <Route path='/cardinfo'  element={<CardInfo/>}/>
    </Routes>
    </BrowserRouter>
 
   </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react'
import "./Login.css"

import { Button, Checkbox, Input, DatePicker, Drawer } from 'antd';

import ForgotPassword from './ForgotPassword';
import { FacebookOutlined, TwitterOutlined } from '@ant-design/icons';
import OAuth from '../SocialLoginbtns/OAuth';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from '../../firebase';







function Login() {
  const [counter, setCounter] = useState(1);
  const [register, setRegister] = useState(true)
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (result) => {
      if (result) {


        navigate("/")


      }

    })

    return () => unsubscribe();
  }, [])








  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      document.getElementById(radio${ counter }).checked = true;
      setCounter((prevCounter) => (prevCounter % 4) + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [counter]);



  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    if (userName === "venkat@gmail.com" && password === "venkat") {
      localStorage.setItem("username")
      navigate("/admindashboard");
    }
  };


  console.log({ userName, password })
  return (
    <>

      <div className="sliders">
        <div className="sliders__left">
          <div className="slides">
            <input type="radio" id="radio1" name="radio" onChange={() => setCounter(1)} />
            <input type="radio" id="radio2" name="radio" onChange={() => setCounter(2)} />
            <input type="radio" id="radio3" name="radio" onChange={() => setCounter(3)} />
            <input type="radio" id="radio4" name="radio" onChange={() => setCounter(4)} />

            <div className="slide first">
              <img
                src="https://cdn.pixabay.com/photo/2018/03/06/06/27/background-3202671_640.jpg"
                alt="slide_img"
              />
            </div>
            <div className="slide second">
              <img
                src="https://cdn.pixabay.com/photo/2017/01/04/04/01/wedding-1951298_640.jpg"
                alt="slide_img"
              />
            </div>
            <div className="slide third">
              <img
                src="https://cdn.pixabay.com/photo/2020/10/05/13/26/wedding-cake-5629396_640.jpg"
                alt="slide_img"
              />
            </div>
            <div className="slide forth">
              <img
                src="https://cdn.pixabay.com/photo/2024/03/02/09/35/ai-generated-8608195_640.jpg"
                alt="slide_img"
              />
            </div>

            <div className="slides__auto">
              <div className="auto1" onClick={() => setCounter(1)} ></div>
              <div className="auto2" onClick={() => setCounter(2)} ></div>
              <div className="auto3" onClick={() => setCounter(3)} ></div>
              <div className="auto4" onClick={() => setCounter(4)} ></div>
            </div>
          </div>
          <div className="manuals">
            <label htmlFor="radio1" className="manual"></label>
            <label htmlFor="radio2" className="manual"></label>
            <label htmlFor="radio3" className="manual"></label>
            <label htmlFor="radio4" className="manual"></label>
          </div>
        </div>

        {

          register ?
            (
              <>
                <Drawer title="Forgot Password" onClose={onClose} open={open}>
                  <ForgotPassword />
                </Drawer>

                <div className='login'>
                  <div className="limiter">

                    <div className='login_topimg'></div>
                    <div className="login-container">
                      <form className="login-form">
                        <h2 className="login-header">Log in</h2>

                        <Input className='input-field' type="email" placeholder="Email" onChange={(e) => setUserName(e.target.value)} />


                        <Input.Password className='input-field' type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

                        <div className='forgot-password'>
                          <div className='remember'>


                            <Checkbox > <div className='remember-me'>Remember me</div></Checkbox>
                          </div>

                          <span className='forgot' onClick={showDrawer}>
                            Forgot password
                          </span>
                        </div>
                        <div className='login-btns '>
                          <button className='submit-btn' onClick={handleSubmit} >Login</button>


                        </div>
                        <div className="middle">
                          <Button type="primary" shape="circle" className="btn" href="#">
                            <FacebookOutlined />
                          </Button>
                          <Button type="primary" shape="circle" className="btn" >
                            <OAuth />
                          </Button>





                          <Button type="primary" shape="circle" className="btn" href="#">
                            <TwitterOutlined />
                          </Button>


                        </div>







                        <div className="login-signup">
                          Don't have an account?{' '}
                          <span className="login-signup-bold" onClick={() => setRegister(!register)}>Register</span>
                        </div>


                      </form>
                    </div>

                  </div>
                </div>

              </>
            ) :

            (
              <div className='login'>
                <div className="limiter">


                  <div className="register-container">
                    <form className="register-form">
                      <h2 className="register-header">Register</h2>
                      <Input className='input-field' type="text" placeholder="username" />
                      <Input className='input-field' type="email" placeholder="Email" />


                      <Input.Password className='input-field' type="password" placeholder="Password" />
                      <DatePicker onChange={onChange} placeholder="DOB" className='input-field' />

                      <div className='login-btns '>
                        <button className='submit-btn' >Register</button>
                        <div className="login-signup">
                          Already have an account?{' '}
                          <span className="login-signup-bold" onClick={() => setRegister(!register)}>Login</span>
                        </div>

                      </div>

                    </form>
                  </div>

                </div>
              </div>
            )
        }










      </div>
    </>






  )
}

export default Login
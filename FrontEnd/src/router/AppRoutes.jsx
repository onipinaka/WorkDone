import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../Layout/Layout'
import LandingPage from '../Pages/LandingPage/LandingPage'
import AboutUs from '../Pages/AboutUs/AboutUs'
import Login from '../Pages/Login/Login'
import SignUp from '../Pages/SignUp/SignUp'
import ContactUs from '../Pages/ContactUs/ContactUs'
import CreateTask from '../Pages/CreateTask/CreateTask'
import Profile from '../Pages/Profile/Profile'
import MainLayout from '../mainLayout/MainLayout'
import Home from '../Pages/Home/Home'

function routes() {
  return (
    <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route index element={<LandingPage/>}/>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="signin" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="create-task" element={<CreateTask />} />
          <Route path="profile" element={<Profile />} />
        
        </Route>
    </Routes>
  )
}

export default routes
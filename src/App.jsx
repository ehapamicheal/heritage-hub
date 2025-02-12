import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/authentication/login/Login';
import SignUp from './pages/authentication/sign-up/SignUp';
import Home from './pages/home/Home';
import ForgottenPassword from './pages/authentication/forgotten-password/ForgottenPassword';
import ResetPassword from './pages/authentication/reset-password/ResetPassword';
import VerificationEmail from './pages/authentication/verification-email/VerificationEmail';
import Profile from './pages/profile/Profile';
import ProfileInfo from './pages/profile-info/ProfileInfo';
import SetProfilePicture from './pages/set-profile-picture/SetProfilePicture';
import Community from './pages/community/Community';




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/login"  element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgotten-password" element={<ForgottenPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verification-email" element={<VerificationEmail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile-info" element={<ProfileInfo />} />
        <Route path="/set-profile-picture" element={<SetProfilePicture />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
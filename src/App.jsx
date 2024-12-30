import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/authentication/login/Login';
import SignUp from './pages/authentication/sign-up/SignUp';
import Home from './pages/home/Home';
import ForgottenPassword from './pages/authentication/forgotten-password/ForgottenPassword';
import ResetPassword from './pages/authentication/reset-password/ResetPassword';
import VerificationEmail from './pages/authentication/verification-email/VerificationEmail';




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/"  element={<Home />} />
        <Route path="/login"  element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgotten-password" element={<ForgottenPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verification-email" element={<VerificationEmail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
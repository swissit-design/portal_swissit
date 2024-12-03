import React, { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';

import Login from "./pages/Login"
import Logout from "./pages/Logout"
import Register from "./pages/Register"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"
import PasswordReset from './pages/PasswordReset';
import PasswordResetRequest from './pages/PasswordResetRequest';

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false); // Initial state for authorization

  useEffect(() => {
        // Check localStorage for authorization status on app load
        const authStatus = localStorage.getItem('isAuthorized');
        setIsAuthorized(authStatus === 'true');
    }, []); // Run once on component mount

    const handleLogout = () =>  {
        localStorage.clear();
        setIsAuthorized(false);
      }
    
    const handleLogin = (data) =>{
        localStorage.setItem('isAuthorized', 'true');
        setIsAuthorized(true);
      }
  
  return (
    <BrowserRouter>
      {/* Design the toast container accordingly here */}
      <Toaster
          position="bottom-right"
          autoClose={5000}
        />

    <div className="flex flex-col w-full">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login onLogin={handleLogin}/>} />
        <Route path="/logout" element={<Logout onLogout={handleLogout}/>} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="/request-password-reset" element={<PasswordResetRequest />} />
        <Route path="/password-reset/:token" element={<PasswordReset />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      </div>
      
    </BrowserRouter>
  )
}

export default App

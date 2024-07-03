import React, { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login"
import Logout from "./pages/Logout"
import Register from "./pages/Register"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"
import Sidebar from './components/Sidebar';
import sidebarData from './assets/sidebarData';


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
      <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    <div className="flex h-screen overflow-hidden">
    {isAuthorized && <Sidebar sidebarData={sidebarData} />}
    <div className={`flex flex-col ${isAuthorized ? 'ml-64' : 'ml-0'} w-full`}>
      <div className="flex-1 overflow-y-auto p-6">
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
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      </div>
      </div>
      </div>
    </BrowserRouter>
  )
}

export default App

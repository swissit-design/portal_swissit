import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Logout({onLogout}) {
    const navigate = useNavigate();

    useEffect(() => {
      console.log('Logout useEffect called');
      // Trigger logout action from parent component
      onLogout()
  
      // Display success toast only once
      toast.success('Successfully logged out!');
      console.log('test')
  

    }, [onLogout]);
  
    return null; // This component doesn't render any UI
  }

export default Logout


import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Logout({onLogout}) {
    const navigate = useNavigate();

    useEffect(() => {
      console.log('Logout useEffect called');
      // Trigger logout action from parent component
      onLogout()
  
      // Display success toast only once - adding an ID to prevent duplicated toast - https://fkhadra.github.io/react-toastify/prevent-duplicate/
      toast.success('Successfully logged out!',{toastId: 'logout1'});
      console.log('test')
  
      // navigate to login page
      navigate("/login")

    }, [onLogout]);
  
    return null; // This component doesn't render any UI
  }

export default Logout


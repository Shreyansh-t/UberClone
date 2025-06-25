import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {CaptainDataContext} from '../context/CaptainContext'
import axios from 'axios'

const CaptainProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true)
  const {captain, setCaptain} = useContext(CaptainDataContext)

useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
        navigate('/captain-login');
    }

    axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
    if(response.status === 201){
        setCaptain(response.data.captain)
        setIsLoading(false)
    }
    })
    .catch(err => {
        console.log(err)
        navigate('/captain-login')
    })

}, []);



if(isLoading){
    return(
        <div>
            Loading..
        </div>
    )
}

  return <div>{children}</div>;
};

export default CaptainProtectedWrapper;
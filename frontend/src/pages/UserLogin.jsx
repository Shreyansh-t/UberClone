import React, { useState, useContext } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {UserDataContext} from '../context/userContext'
import axios from 'axios'

const UserLogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    

    const {user, setUser} = useContext(UserDataContext);
    const navigate = useNavigate();
    
    const submitHandler = async (e)=>{
        e.preventDefault();
        const userData = {
            email: email,
            password: password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

        console.log(response)

        if(response.status === 201){
            const {token, user} = response.data

            setUser(user)
            localStorage.setItem('token', token)

            navigate('/home')
        }
        
        setEmail('');
        setPassword('');
    }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
            <img className='w-16 mb-10' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />
        <form onSubmit={(e)=>{
            submitHandler(e);
        }}>
            <h3 className='text-lg font-medium mb-2'>Whats your email</h3>

            <input 
            required 
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email" 
            placeholder='email@example.com'
            />

            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

            <input 
            required 
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="password" 
            placeholder='password'
            />

            <button className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Login</button>
        </form>

        <p className='text-center'>New? <Link to='/signup' className='mb-3 text-blue-600'>Create new Account</Link></p>


        </div>

        <div>
            <Link to='/captain-login' className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Sign in as Captain</Link>
        </div>
    </div>
  )
}

export default UserLogin
import React, {useContext, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import {UserDataContext} from '../context/userContext'


const UserSignup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData, setUserData] = useState({})

    const {user, setUser} = useContext(UserDataContext)

    const navigate = useNavigate();

    const submitHandler = async (e)=>{
        e.preventDefault();
        
        const newUser = {
            fullname: {
                firstname: firstName,
                lastname: lastName
            },
            email: email,
            password: password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

        if(response.status === 201){
            const {token, user} = response.data

            setUser(user)
            localStorage.setItem('token', token)

            navigate('/home')
        }
        
        setEmail('')
        setFirstName('')
        setLastName('')
        setPassword('')
    }
    

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
            <img className='w-16 mb-10' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />
        <form onSubmit={(e)=>{
            submitHandler(e);
        }}>

            <h3 className='text-lg font-medium mb-2'>What's your name</h3>
            <div className='flex gap-4 mb-5'>
                <input 
                required 
                
                className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
                type="text" 
                placeholder='First name'
                value={firstName}
                onChange={(e)=>{
                    setFirstName(e.target.value)
                }}
                />

                <input 
                required 
                
                className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
                type="text" 
                placeholder='Last name'
                value={lastName}
                onChange={(e)=>{
                    setLastName(e.target.value)
                }}
                />
            </div>

            <h3 className='text-lg font-medium mb-2'>What's your email</h3>

            <input 
            required 
            
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email" 
            placeholder='email@example.com'
            value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
            />

            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

            <input 
            required 
           
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="password" 
            placeholder='password'
            value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
            />

            <button className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Create Account</button>
        </form>

        <p className='text-center'>Have an account? <Link to='/login' className='mb-3 text-blue-600'>Login</Link></p>


        </div>

        <div>
            <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
        </div>
    </div>
  )
}

export default UserSignup
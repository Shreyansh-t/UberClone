import React, {useContext, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {CaptainDataContext} from '../context/CaptainContext'
import axios from 'axios'


const CaptainLogin = () => {

    const navigate = useNavigate()
    const {captain, setCaptain} = useContext(CaptainDataContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    

    const submitHandler = async (e)=>{
        e.preventDefault();
        const captain = {
            email: email,
            password: password
        }
        
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/login`, captain)

        if(response.status === 201){
            const {token, captain} = response.data
            console.log(token)
            setCaptain(captain)
            localStorage.setItem('token', token)
            navigate('/captain-home')
        }

        setEmail('');
        setPassword('');
    }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
            <img className='w-16 mb-10' src="https://pngimg.com/d/uber_PNG24.png" alt="" />
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

        <p className='text-center'>Join Uber <Link to='/captain-signup' className='mb-3 text-blue-600'>Register as Captain</Link></p>


        </div>

        <div>
            <Link to='/login' className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Sign in as User</Link>
        </div>
    </div>
  )
}

export default CaptainLogin
import React, { useState, useContext } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {CaptainDataContext} from '../context/CaptainContext'
import axios from 'axios'


const CaptainSignup = () => {

        const navigate = useNavigate()
        

        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [firstName, setFirstName] = useState('')
        const [lastName, setLastName] = useState('')
        const [userData, setUserData] = useState({})

        // Vehicle-related state variables
        const [vehicleColor, setVehicleColor] = useState('');
        const [vehiclePlate, setVehiclePlate] = useState('');
        const [vehicleCapacity, setVehicleCapacity] = useState('');
        const [vehicleType, setVehicleType] = useState('');

        const {captain, setCaptain} = useContext(CaptainDataContext)
    
        const submitHandler = async (e)=>{
            e.preventDefault();
            const captainData = {
                fullname: {
                    firstname: firstName,
                    lastname: lastName
                },
                email: email,
                password: password,
                vehicle:{
                    color: vehicleColor,
                    plate: vehiclePlate,
                    capacity: vehicleCapacity,
                    vehicleType: vehicleType
                }
            }

            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`, captainData)

            if(response.status === 201){
                const {token, captain} = response.data
                setCaptain(captain)
                localStorage.setItem('token', token)
                navigate('/captain-home')
            }

            setEmail('')
            setFirstName('')
            setLastName('')
            setPassword('')
            setVehicleType('')
            setVehicleCapacity('')
            setVehicleColor('')
            setVehiclePlate('')

        }

  return (
      <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
            <img className='w-16 mb-10' src="https://pngimg.com/d/uber_PNG24.png" alt="" />
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

            <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
            <div className='flex gap-4 mb-5'>
                <input
                    required
                    className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
                    type='text'
                    placeholder='Vehicle Color'
                    value={vehicleColor}
                    onChange={e => setVehicleColor(e.target.value)}
                />
                <input
                    required
                    className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
                    type='text'
                    placeholder='Vehicle Plate'
                    value={vehiclePlate}
                    onChange={e => setVehiclePlate(e.target.value)}
                />
            </div>
            <div className='flex gap-4 mb-5'>
                <input
                    required
                    className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
                    type='number'
                    min='1'
                    placeholder='Vehicle Capacity'
                    value={vehicleCapacity}
                    onChange={e => setVehicleCapacity(e.target.value)}
                />
                <select
                    required
                    className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
                    value={vehicleType}
                    onChange={e => setVehicleType(e.target.value)}
                >
                    <option value='' disabled>Select Vehicle Type</option>
                    <option value='car'>Car</option>
                    <option value='motorcycle'>Motorcycle</option>
                    <option value='auto'>Auto</option>
                </select>
            </div>

            <button className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Create Captain Account</button>
        </form>

        <p className='text-center'>Have an account? <Link to='/captain-login' className='mb-3 text-blue-600'>Login</Link></p>


        </div>

        <div>
            <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
        </div>
    </div>
  )
}

export default CaptainSignup
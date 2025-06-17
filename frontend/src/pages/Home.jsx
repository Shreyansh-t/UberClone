import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className='bg-cover bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhZmZpYyUyMGxpZ2h0fGVufDB8fDB8fHww)] h-screen pt-5 w-full bg-red-400 flex justify-between flex-col'>
            <img className='w-16 ml-8' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />
            <div className='bg-white pb-7 py-5 px-5'>
                <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
                <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Home
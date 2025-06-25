import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <h5 className='p-0 text-center absolute top-0 w-[93%]' onClick={(e)=>{
          props.setVehiclePanel(false)
        }} ><i className=" text-3xl text-gray-400 ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
        
          <div className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between' onClick={()=>{
            props.setConfirmRidePanel(true)
          }}>
            <img className='h-12' src="https://i.pinimg.com/736x/a7/44/bb/a744bb6640c985cf72395ae7c61f3eed.jpg" alt="" />
            <div className=' w-1/2'>
              <h4 className='font-medium text-small'>UberGo <span><i className='ri-user-3-fill'></i>4</span></h4>
              <h5 className='font-medium text-small'>2 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
            </div>
            <h2 className='text-xl font-semibold'>193.20</h2>
          </div>

          <div className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between' onClick={()=>{
            props.setConfirmRidePanel(true)
          }}>
            <img className='h-11' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTJw6dzEo1MYXOAbONCG1oL82rxU_Bitb-g&s" alt="" />
            <div className=' w-1/2'>
              <h4 className='font-medium text-small'>Moto <span><i className='ri-user-3-fill'></i>1</span></h4>
              <h5 className='font-medium text-small'>3 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable, motorcycle rides</p>
            </div>
            <h2 className='text-xl font-semibold'>65</h2>
          </div>

          <div className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between' onClick={()=>{
            props.setConfirmRidePanel(true)
          }}>
            <img className='h-11' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
            <div className=' w-1/2'>
              <h4 className='font-medium text-small'>Auto <span><i className='ri-user-3-fill'></i>3</span></h4>
              <h5 className='font-medium text-small'>1 min away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable, auto rides</p>
            </div>
            <h2 className='text-xl font-semibold'>104</h2>
          </div>
    </div>
  )
}

export default VehiclePanel
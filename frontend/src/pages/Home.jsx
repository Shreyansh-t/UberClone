import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRidePanel from '../components/ConfirmRidePanel';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null)
  const [vehiclePanel, setVehiclePanel] = useState(false)
  const vehiclePanelRef = useRef(null)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const confirmRidePanelRef = useRef(null)
  const [vehicleFound, setVehicleFound] = useState(false)
  const vehicleFoundRef = useRef(null)
  const [waitingForDriver, setWaitingForDriver] = useState(false)
  const waitingForDriverRef = useRef(null)

  const submitHandler = (e) => {
    e.preventDefault();
    // Optional: you can add validation or actions here
    console.log('Pickup:', pickup);
    console.log('Destination:', destination);
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        duration: 0.5,
        ease: 'power2.out'
      });
      gsap.to(panelCloseRef.current,{
        opacity:1
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        duration: 0.5,
        ease: 'power2.inOut'
      });
      gsap.to(panelCloseRef.current,{
        opacity:0
      })
    }
  }, [panelOpen, panelCloseRef]);

  useGSAP(function() {
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current,{
      transform: 'translateY(0)'
    })
    } else{
      gsap.to(vehiclePanelRef.current,{
      transform: 'translateY(100%)'
    })
    }
  }, [vehiclePanel])

  useGSAP(function() {
    if(confirmRidePanel){
      gsap.to(confirmRidePanelRef.current,{
      transform: 'translateY(0)'
    })
    } else{
      gsap.to(confirmRidePanelRef.current,{
      transform: 'translateY(100%)'
    })
    }
  }, [confirmRidePanel])

  useGSAP(function() {
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current,{
      transform: 'translateY(0)'
    })
    } else{
      gsap.to(vehicleFoundRef.current,{
      transform: 'translateY(100%)'
    })
    }
  }, [vehicleFound])

  useGSAP(function() {
    if(waitingForDriver){
      gsap.to(waitingForDriverRef.current,{
      transform: 'translateY(0)'
    })
    } else{
      gsap.to(waitingForDriverRef.current,{
      transform: 'translateY(100%)'
    })
    }
  }, [waitingForDriver])

  return (
    <div className="h-screen w-screen absolute top-0 left-0 -z-10 overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
        alt="Uber Logo"
      />

      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://blog.uber-cdn.com/wp-content/uploads/2022/08/image11-11.png"
          alt="Background"
        />
      </div>

      <div className="bg-white flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] p-5 bg-white">
          <h5 ref={panelCloseRef} onClick={()=>{
            setPanelOpen(false)
          }} className='absolute right-6 top-6 text-2xl'>
            <i class="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form onSubmit={submitHandler}>
            <input
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-[#eee] px-4 py-2 text-base rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pickup location"
            />

            <input
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] px-4 py-2 text-base rounded-lg w-full mt-5"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>

        <div ref={panelRef} className="bg-white h-0 overflow-hidden transition-all duration-500">
          <LocationSearchPanel panelOpen={panelOpen} setPanelOpen={setPanelOpen} vehiclePanel={vehiclePanel} setVehiclePanel={setVehiclePanel}/>
        </div>
      </div>
      
      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full p-3 bg-white px-3 py-6 pt-14'>
        <VehiclePanel setVehiclePanel={setVehiclePanel} setConfirmRidePanel={setConfirmRidePanel} />
      </div>

      <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full p-3 bg-white px-3 py-6 pt-14'>
        <ConfirmRidePanel setConfirmRidePanel={setConfirmRidePanel} setVehicleFound= {setVehicleFound}/>
      </div>

      <div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 translate-y-full p-3 bg-white px-3 py-6 pt-14'>
        <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>

      <div ref={waitingForDriverRef} className='fixed w-full z-10 bottom-0 translate-y-0 p-3 bg-white px-3 py-6 pt-14'>
        <WaitingForDriver waitingForDriver={waitingForDriver}/>
      </div>

    </div>
  );
};

export default Home;

import React from 'react'

const LocationSearchPanel = (props) => {

    //sample array for locations

    const location = [
        "24B, Near Kapoor's Cafe, Sheryinas Coding School, Bhopal",
        "DB Mall",
        "Starbucks, Arera Colony Bhopal",
    ]

  return (

    <div>

        {
        location.map(function(elem, idx){
            return <div key={idx} onClick={()=>{
                props.setVehiclePanel(true),
                props.setPanelOpen(false)}
            } className='flex gap-4 border-2 p-3 border-gray-200 active:border-black rounded-xl  items-center my-2 justify-start'>
            <h2 className='bg-[#eee] h-10 w-16 rounded-full flex items-center justify-center'><i className="ri-map-pin-line px-1"></i></h2>
            <h4 className='font-medium'>{elem}</h4>
        </div>
        })
    }
        
    </div>
  )
}

export default LocationSearchPanel
import React from "react";

const ConfirmRide = (props) => {
  return (
    <div>
      <h5
        className="p-0 text-center absolute top-0 w-[93%]"
        onClick={(e) => {
          props.setVehiclePanel(false);
        }}
      >
        <i className=" text-3xl text-gray-400 ri-arrow-down-wide-line"></i>
      </h5>

      <h3 className="text-2xl font-semibold mb-5">Confirm your Ride</h3>

      <div className="flex gap-2 justify-between flex-col items-center">
        <img
          className="h-20"
          src="https://i.pinimg.com/736x/a7/44/bb/a744bb6640c985cf72395ae7c61f3eed.jpg"
          alt=""
        />

        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-5-line"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-gray-700 text-sm">Kakariya Talab, Ahemdabad</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg  ri-map-pin-line"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-gray-700 text-sm">Kakariya Talab, Ahemdabad</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">193</h3>
              <p className="text-gray-700 text-sm">Cash</p>
            </div>
          </div>
        </div>

        <button onClick={()=>{
          props.setVehicleFound(true)
          props.setConfirmRidePanel(false)
        }} className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-xl">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmRide;

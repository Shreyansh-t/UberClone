import React from "react";

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5
        className="p-0 text-center absolute top-0 w-[93%]"
        onClick={(e) => {
          props.waitingForDriver(true);
        }}
      >
        <i className=" text-3xl text-gray-400 ri-arrow-down-wide-line"></i>
      </h5>

      <div className="flex items-center justify-between">
        <img className="h-15" src="https://i.pinimg.com/736x/a7/44/bb/a744bb6640c985cf72395ae7c61f3eed.jpg" alt="" />
      </div>

      <div className="text-right">
        <h2 className="text-lg font-medium">Sarthak</h2>
        <h4 className="text-xl font-semibold -mt-1 -mb-1">MP 04 AB 1234</h4>
        <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
      </div>

      <div className="flex gap-2 justify-between flex-col items-center">

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
      </div>
    </div>
  );
};

export default WaitingForDriver;

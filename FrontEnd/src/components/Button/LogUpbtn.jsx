import React from 'react';

const LogUpbtn = ({icon, placeholder}) => {
  return (
    <div className="flex justify-center items-center w-[300px]  h-[52px]">
      <div className="relative w-[350px]">
        <input
          type="email"
          placeholder={placeholder}
          className="pl-12 pr-4 py-4 rounded-full bg-white text-gray-400 w-full outline-none shadow"
        />
        <span className="absolute left-4 top-1/2 transform -translate-y-1/2">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
          </svg> */}
          {
            icon
          }
        </span>
      </div>
    </div>
  );
};

export default LogUpbtn;

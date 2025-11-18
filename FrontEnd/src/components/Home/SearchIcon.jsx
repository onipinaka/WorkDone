import React from "react";

function SearchIcon() {
  return (
    <div className="flex flex-row items-center gap-3 w-full py-3 font-poppins">
      {/* Search Input */}
      <div className="flex-1 min-w-0 relative">
        <div className="flex items-center bg-white border-2 border-gray-300 rounded-xl px-3 py-2 shadow-sm">
          {/* Search Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-400 mr-2 flex-shrink-0"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.90427 8.85402L13.7827 12.7324C14.0724 13.0226 14.0724 13.4926 13.7827 13.7827C13.4906 14.0676 13.0246 14.0676 12.7324 13.7827L8.85403 9.90427C6.54486 11.6609 3.26951 11.328 1.36104 9.14262C-0.54742 6.95726 -0.436272 3.6669 1.61531 1.61531C3.6669 -0.436272 6.95726 -0.54742 9.14262 1.36104C11.328 3.26951 11.6609 6.54486 9.90427 8.85402ZM5.53518 1.5237C3.32068 1.5237 1.52548 3.3189 1.52548 5.5334C1.5281 7.74681 3.32177 9.54048 5.53518 9.5431C7.74968 9.5431 9.54488 7.7479 9.54488 5.5334C9.54488 3.3189 7.74968 1.5237 5.53518 1.5237Z"
              fill="#5F5C5C"
            />
          </svg>

          {/* Input Field */}
          <input
            type="text"
            placeholder="Search the work you want"
            className="flex-1 min-w-0 outline-none pl-2 border-l border-[#5F5C5C] text-gray-600 text-sm placeholder-gray-400"
          />
        </div>
      </div>

      {/* Notification Bell */}
      <button className="relative flex-shrink-0" aria-label="Notifications">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="25"
          viewBox="0 0 20 25"
          fill="none"
        >
          <path
            d="M10 24.5C11.375 24.5 12.5 23.375 12.5 22H7.5C7.5 23.375 8.6125 24.5 10 24.5ZM17.5 17V10.75C17.5 6.9125 15.45 3.7 11.875 2.85V2C11.875 0.9625 11.0375 0.125 10 0.125C8.9625 0.125 8.125 0.9625 8.125 2V2.85C4.5375 3.7 2.5 6.9 2.5 10.75V17L0 19.5V20.75H20V19.5L17.5 17Z"
            fill="#030303"
          />
        </svg>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
      </button>
    </div>
  );
}

export default SearchIcon;

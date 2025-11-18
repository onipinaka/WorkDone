import React from "react";

function TaskCard() {
  return (
    <div className="relative bg-white rounded-2xl p-4 w-full my-3 shadow-[0_2px_8px_rgba(0,0,0,0.1)] font-poppins">


      <div className="flex justify-between items-center mb-6 pr-6">
        <div className="flex items-center bg-[#FFEDE5] px-2 py-[6px] rounded-lg gap-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.5 12C9.53757 12 12 9.53757 12 6.5C12 3.46243 9.53757 1 6.5 1C3.46243 1 1 3.46243 1 6.5C1 9.53757 3.46243 12 6.5 12Z"
              stroke="#FD2903"
              strokeWidth="1.5"
            />
            <path
              d="M6.5 6.49993V4.53564"
              stroke="#FD2903"
              strokeWidth="1.5"
            />
            <path
              d="M6.5 6.5L8.9551 8.95562"
              stroke="#FD2903"
              strokeWidth="1.5"
            />
          </svg>
          <span className="text-black   text-[11px] font-medium">
            45 mins left
          </span>
        </div>
        <span className="text-black text-[11px] bg-[#F6F6F7] px-4 py-[6px] rounded-lg">
          1 hour ago
        </span>
      </div>


      <div className="flex justify-between items-end mb-5">
        <div>
          <div className="text-black text-[22px] font-semibold leading-none">
            ₹ 200/2.5 km
          </div>
          <div className="text-[#646161] text-[12px] mt-1">Max Earning</div>
        </div>
        <div className="flex items-center gap-1 bg-orange-50 px-2 py-1 rounded-full">
          <span className="text-orange-500 text-[10px]">🔥</span>
          <span className="text-orange-500 text-[10px] font-medium">
            High reward
          </span>
        </div>
      </div>


      <h3 className="text-black text-xl font-semibold mb-4 leading-tight pr-6">
        Pickup up groceries from Thapa Shop
      </h3>

      <div className="flex justify-between items-end">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
            >
              <circle
                cx="5"
                cy="5"
                r="4.25"
                stroke="#2A2A2A"
                strokeWidth="1.5"
              />
            </svg>
            <span className="text-black text-[13px]">Thapa Shop, AIT</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="11"
              viewBox="0 0 9 11"
              fill="none"
            >
              <path
                d="M4.76134 10.2839C4.68518 10.3449 4.59377 10.3778 4.5 10.3778C4.40623 10.3778 4.31482 10.3449 4.23866 10.2839C1.98506 8.49066 -0.406677 4.80212 2.01119 2.13678C2.67497 1.40785 3.5689 0.999544 4.5 1C5.43336 1 6.32892 1.40897 6.98881 2.13626C9.40668 4.8016 7.01494 8.48962 4.76134 10.2839Z"
                stroke="#DC362E"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.49977 5.68866C4.74731 5.68866 4.98471 5.57888 5.15975 5.38347C5.33479 5.18807 5.43313 4.92304 5.43313 4.6467C5.43313 4.37035 5.33479 4.10533 5.15975 3.90992C4.98471 3.71451 4.74731 3.60474 4.49977 3.60474C4.25222 3.60474 4.01482 3.71451 3.83978 3.90992C3.66474 4.10533 3.56641 4.37035 3.56641 4.6467C3.56641 4.92304 3.66474 5.18807 3.83978 5.38347C4.01482 5.57888 4.25222 5.68866 4.49977 5.68866Z"
                stroke="#DC362E"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-black text-[13px]">APJ Hostel, AIT</span>
          </div>
        </div>

        <button className="bg-[#1F7568] text-white px-4 py-2 rounded-lg font-medium text-[12px] 
          outline-2 outline-dashed outline-[#1F7568] outline-offset-3">
          Accept
        </button>
      </div>
    </div>
  );
}

export default TaskCard;

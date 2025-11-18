import React, { useState } from "react";

const CreateTask = () => {
  const [priority, setPriority] = useState(false);
  const [isPublic, setIsPublic] = useState(false);

  return (
    <div className="w-full max-w-screen-sm mx-auto bg-[#f2fbfa] min-h-screen px-4 pt-4 pb-12 text-[#026A75] font-poppins">
      <div className="flex flex-row mb-3 items-center justify-between">
        <p className="text-lg leading-none font-semibold mb-1">Complete your task</p>
        <p className="text-xs leading-none text-[#026A75]">step 1 of 4</p>
      </div>

      <div className="w-full h-[12px] bg-[#cde6e3] rounded-full mb-7">
        <div className="w-1/4 h-[12px] bg-[#0E7070] rounded-full"></div>
      </div>

      <section className="bg-white p-4 rounded-2xl mb-4 shadow">
        <div className="flex flex-row items-center gap-3 mb-4">
          <div className="aspect-square flex justify-center items-center bg-[#026A75] h-7 rounded-full">
            <p className="font-semibold leading-0 text-lg text-white">1</p> 
          </div>
          
          <h2 className="font-semibold text-lg">Task Detail</h2>
        </div>
        

        <label className="block text-base text-[#026A75] font-medium mb-3">Task Title</label>
        <input
          type="text"
          placeholder="E.g. Pick up groceries from groceries store"
          className="w-full p-2 border border-gray-300 rounded-xl mb-4 text-sm"
        />

        <label className="block text-base text-[#026A75] font-medium mb-3">
          Task Description
        </label>
        <textarea
          placeholder="Provide detailed instructions for your task"
          className="w-full p-2 border border-gray-300 rounded-xl mb-4 text-sm h-24 resize-none"
        />

        <label className="block text-base text-[#026A75] font-medium mb-3">Category</label>
        <select className="w-full p-2 border border-gray-300 rounded-xl mb-4 text-sm text-gray-500">
          <option value="">select category</option>
          <option value="">delivery</option>
          <option value="">assignment</option>
        </select>

        <label className="block text-base text-[#026A75] font-medium mb-3">
          Add Photos (Optional)
        </label>
        <div className="w-24 h-24 border border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-xs rounded-xl cursor-pointer">
          photo function 
        </div>
      </section>

      <section className="bg-white p-4 rounded-2xl mb-4 shadow">
        <div className="flex felx-row items-center gap-3 mb-4">
          <div className="aspect-square flex justify-center items-center bg-[#026A75] h-7 rounded-full">
            <p className="font-semibold leading-0 text-lg text-white ">2</p> 
          </div>
          
          <h2 className="font-semibold text-lg ">Location</h2>
        </div>

        <div className="mb-4">
          <label className="flex items-center gap-2 text-base text-[#026A75] mb-3 font-medium">
            <div className="w-8 h-8 bg-[#E7F7F7] rounded-full flex items-center justify-center">
              <img src="/create-task/location.svg" alt="" className="w-5 h-5" />
            </div>
            From
          </label>
          <input
            type="text"
            placeholder="Pickup Location"
            className="w-full p-3 border border-gray-300 rounded-xl text-sm"
          />
        </div>

        <div className="mb-4">
          <label className="flex items-center gap-2 text-base text-[#026A75] mb-3 font-medium">
            <div className="w-8 h-8 bg-[#E7F7F7] rounded-full flex items-center justify-center">
              <img src="/create-task/location.svg" alt="" className="w-5 h-5" />
            </div>
            To
          </label>
          <input
            type="text"
            placeholder="Delivery Location"
            className="w-full p-3 border border-gray-300 rounded-xl text-sm"
          />
        </div>

        <div className="mb-4">
          <label className="flex items-center gap-2 text-base text-[#026A75] mb-3 font-medium">
            <div className="w-8 h-8 bg-[#E7F7F7] rounded-full flex items-center justify-center">
              <img src="/create-task/mapicon.svg" alt="" className="w-5 h-5" />
            </div>
            Distance(km)
          </label>
          <div className="relative">
            <input
              type="number"
              placeholder="0.00"
              className="w-full p-3 pr-12 border border-gray-300 rounded-xl text-sm"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">Km</span>
          </div>
        </div>

        <div className="bg-gray-200 h-28 flex items-center justify-center text-gray-500 text-sm rounded-xl">
          Map will appear here
        </div>
      </section>

      <section className="bg-white p-4 rounded-2xl mb-4 shadow">
        <div className="flex felx-row items-center gap-3 mb-4">
          <div className="aspect-square flex justify-center items-center bg-[#026A75] h-7 rounded-full">
            <p className="font-semibold leading-0 text-lg text-white ">3</p> 
          </div>
          
          <h2 className="font-semibold text-lg ">Time & Date</h2>
        </div>

        <label className="block text-base text-[#026A75] mb-3 font-medium">Task Availability</label>
        
        <div className="mb-2">
          <label className="flex items-center space-x-3 p-3 border border-gray-300 rounded-xl cursor-pointer">
            <input
              type="radio"
              name="availability"
              checked
              className="accent-[#007965]"
            />
            <span className="text-sm">ASAP</span>
          </label>
        </div>

        <div className="mb-4">
          <label className="flex items-center space-x-3 p-3 border border-gray-300 rounded-xl cursor-pointer">
            <input
              type="radio"
              name="availability"
              className="accent-[#007965]"
            />
            <span className="text-sm">Scheduled</span>
          </label>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="flex items-center gap-2 text-base font-medium text-[#026A75] mb-3">
              <div className="w-8 h-8 bg-[#E7F7F7] rounded-full flex items-center justify-center">
                <img src="/create-task/date.svg" alt="" className="w-4 h-4" />
              </div>
              Date
            </label>
            <div className="relative">
              <input
                type="date"
                placeholder="dd-mm-yyyy"
                className="w-full p-3 border border-gray-300 rounded-xl text-sm text-gray-500"
              />
            </div>
          </div>
          
          <div>
            <label className="flex items-center gap-2 text-base font-medium text-[#026A75] mb-3">
              <div className="w-8 h-8 bg-[#E7F7F7] rounded-full flex items-center justify-center">
                <img src="/create-task/time.svg" alt="" className="w-4 h-4" />
              </div>
              Time
            </label>
            <div className="relative">
              <input
                type="time"
                placeholder="--:--"
                className="w-full p-3 border border-gray-300 rounded-xl text-sm text-gray-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white p-4 rounded-2xl mb-4 shadow">
        <div className="flex felx-row items-center gap-3 mb-4">
          <div className="aspect-square flex justify-center items-center bg-[#026A75] h-7 rounded-full">
            <p className="font-semibold leading-0 text-lg text-white ">4</p> 
          </div>
          
          <h2 className="font-semibold text-lg ">Payment Details</h2>
        </div>

        <label className="block text-base text-[#026A75] mb-3 font-medium">Payment Amount (₹)</label>
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-xl text-[#007965]">₹</span>
          <input
            type="number"
            placeholder="0.00"
            className="w-full p-2 border border-gray-300 rounded-xl text-sm"
          />
        </div>

        <label className="block text-base text-[#026A75] mb-3 font-medium">Payment Method</label>
        <div className="flex justify-between gap-3 mb-4">
          <button className="flex-1 flex flex-col items-center justify-center border border-gray-300 rounded-xl p-3 text-sm hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 bg-[#E8F7F4] rounded-full flex items-center justify-center mb-2">
              <img src="/create-task/cash.svg" alt="" className="w-4 h-4" />
            </div>
            <span>Cash</span>
          </button>
          <button className="flex-1 flex flex-col items-center justify-center border border-gray-300 rounded-xl p-3 text-sm hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 bg-[#E8F7F4] rounded-full flex items-center justify-center mb-2">
              <img src="/create-task/online.svg" alt="" className="w-4 h-4" />
            </div>
            <span>Online</span>
          </button>
          <button className="flex-1 flex flex-col items-center justify-center border border-gray-300 rounded-xl p-3 text-sm hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 bg-[#E8F7F4] rounded-full flex items-center justify-center mb-2">
              <img src="/create-task/wallet.svg" alt="" className="w-4 h-4" />
            </div>
            <span>Wallet</span>
          </button>
        </div>

        <label className="block text-base text-[#026A75] mb-3 font-medium">Task Availability</label>
        <div className="flex items-center justify-between mb-3 bg-[#E8F7F4] p-4 rounded-xl border border-[#026A75]/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#E7F7F7] rounded-full flex items-center justify-center flex-shrink-0">
              <img src="/create-task/i.svg" alt="" className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#026A75]">Priority Task</p>
              <p className="text-xs text-gray-500">Get more attention (+₹50)</p>
            </div>
          </div>
          <div 
            onClick={() => setPriority(!priority)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer transition-colors ${
              priority ? 'bg-[#026A75]' : 'bg-gray-400'
            }`}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform shadow-sm ${
                priority ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </div>
        </div>

        <div className="flex items-center justify-between bg-[#E8F7F4] p-4 rounded-xl border border-[#026A75]/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#E7F7F7] rounded-full flex items-center justify-center flex-shrink-0">
              <img src="/create-task/i.svg" alt="" className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#026A75]">Public Task</p>
              <p className="text-xs text-gray-500">Visible to all user</p>
            </div>
          </div>
          <div 
            onClick={() => setIsPublic(!isPublic)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer transition-colors ${
              isPublic ? 'bg-[#026A75]' : 'bg-gray-400'
            }`}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform shadow-sm ${
                isPublic ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </div>
        </div>
      </section>
      <div className=" w-full max-w-screen-sm bg-white border-t border-gray-200 p-4">
        <button className="w-full bg-[#026A75] text-white py-3 rounded-xl font-semibold text-center shadow-lg hover:bg-[#025862] transition-colors">
          Post Task
        </button>
      </div>
    </div>
  );
};

export default CreateTask;

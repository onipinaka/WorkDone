import React from 'react';

const InputField = ({ icon, label, type = 'text', value, onChange, placeholder, options = [] }) => {
  return (
    <div className="mb-6 w-full">
      <div className="flex items-start gap-3">
        {/* Icon on the left */}
        <div className="pt-4 text-white text-lg">
          {icon}
        </div>

        {/* Input Field or Select with label cutting the border */}
        <div className="relative w-full">
          {/* Label cutting the border */}
          <label className="absolute -top-2 left-3 bg-[#0B7A75] text-white text-sm px-1 font-medium">
            {label}
          </label>

          {type === 'select' ? (
            <select
              value={value}
              onChange={onChange}
              className="w-full rounded-md border border-white bg-transparent py-2 px-3 text-white focus:outline-none appearance-none"
            >
              <option value="" disabled hidden>Select {label}</option>
              {options.map((opt, idx) => (
                <option key={idx} value={opt} className="text-black">{opt}</option>
              ))}
            </select>
          ) : (
            <input
              type={type}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              className="w-full rounded-md border border-white bg-transparent py-2 px-3 text-white placeholder-white focus:outline-none"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default InputField;

import React from "react";

export default function Field({
  type,
  name,
  placeholder,
  label,
  value,
  setValue,
}) {
  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}:
      </label>
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        type={type}
        name={name}
        placeholder={placeholder}
        className="         
          px-4 py-2 
          rounded-lg 
          border border-gray-300 
          shadow-sm 
          text-gray-800 
          placeholder-gray-400 
          placeholder-opacity-70
          focus:outline-none 
          focus:ring-2 focus:ring-blue-500 
          focus:border-blue-500 
          transition 
          duration-200
          text-sm
          "
      />
    </div>
  );
}

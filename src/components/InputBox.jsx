import React, { useState } from "react";

const InputBox = ({ color, text, hovColor, placeholder,addTaskOnChange,addTaskSubmit }) => {
 

  return (
    <div className="flex gap-3">
      <input
        type="text"
        name="price"
        id="price"
        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 shadow-inner"
        placeholder={placeholder}
        onChange={addTaskOnChange}
      />
      <div className="flex gap-3">
        <button
          className={`${color} shadow-lg ${hovColor} text-white font-bold py-2 px-4 rounded whitespace-nowrap`}
          onClick={addTaskSubmit}
        >
          {text}
        </button>
      </div>
    </div>
  );
};

export default InputBox;

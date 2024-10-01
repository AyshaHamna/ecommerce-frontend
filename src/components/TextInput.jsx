import React from "react";

function TextInput({ name, label, placeholder, onChange, required, value}) {
  return (
    <div className="flex flex-col p-1 gap-y-2">
      <label htmlFor={name} className="block text-lg font-medium">
        {label}
      </label>
      <input
        type="text"
        required={required}
        id={name}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        className="block border-2 border-gray-500 rounded-md p-2"
      ></input>
    </div>
  );
}

export default TextInput;

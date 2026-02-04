import React from 'react';

const Form = ({ label, type, name, value, onChange, error, required }) => {
  return (
    <div className="my-10 h-14">
      <label className="block text-sm font-medium text-[var(--col1)]">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 h-10 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};

export default Form;


import React from "react";

const DropdownList = (props) => {
  const { name, value, defaultValue, placeholder, classes, onChange } = props;
  return (
    <div>
      <select
        name={name}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={onChange}
        className={`${classes} border border-gray-300 text-sm text-gray-700 focus:outline-none p-2 px-4`}
      >
        {props.children}
      </select>
    </div>
  );
};

export default DropdownList;

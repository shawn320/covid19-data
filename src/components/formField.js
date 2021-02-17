import React from "react";

const FormField = (props) => (
  <div className="p-2">
    <label className="mr-2 mb-1 block">{props.label}</label>
    <input
      className="h-7 px-4 block border border-gray-300 shadow-sm rounded focus:outline-none"
      type={props.type}
      name={props.name}
      onChange={props.changed}
      onClick={props.clicked}
      placeholder={props.placeholder}
    >
      {props.children}
    </input>
  </div>
);

export default FormField;

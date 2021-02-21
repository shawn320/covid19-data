import React from "react";

const ActionButton = (props) => (
  <button
    className="m-auto px-4 items-center bg-gray-500 text-white focus:outline-none hover:bg-gray-700 shadow-sm"
    id={props.id}
    onClick={props.clicked}
    data-testid={props.dataTestId}
  >
    {props.text}
  </button>
);

export default ActionButton;

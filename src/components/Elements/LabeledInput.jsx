import React from "react";

function LabeledInput(props) {
  const { label, id, ...rest } = props;

  return (
    <>
      <label htmlFor={id} className="block text-sm mb-2">
        {label}
      </label>
      <input
        className="py-3 pl-4 text-sm rounded-md w-full bg-special-mainBg border border-gray-03 focus:border-black focus:outline-none text-gray-01"
        id={id}
        {...rest}
      />
    </>
  );
}

export default LabeledInput;
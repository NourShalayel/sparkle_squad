import React from "react";

interface IProps {
  label: string;
  type: string;
  placeholder?:string
}
const InputField = (props: IProps) => {
  return (
    <label className="form-control w-full mt-4">
      <div className="label">
        <span className="label-text">{props.label}</span>
      </div>
      <input
        type={props.type}
        placeholder="Type here"
        className="custom_input"
      />
    </label>
  );
};

export default InputField;

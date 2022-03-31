import { useField } from "formik";
import React from "react";

const InputField = ({ label, id, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col mb-3 gap-y-1">
      <label htmlFor={id}>{label}</label>
      <input
        className="px-4 py-2 text-base text-gray-500 border border-gray-300 rounded-md focus:outline-none"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-xs text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default InputField;

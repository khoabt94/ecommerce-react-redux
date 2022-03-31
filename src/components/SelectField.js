import { useField } from "formik";
import React from "react";
import Select from "react-select";

const SelectField = ({ options, label, ...props }) => {
  const [field, meta] = useField(props);
  const selectedOption = options.find((option) => option.value === field.value);

  const handleSelectedOptionChange = (selectedOption) => {
    const selectedValue = selectedOption
      ? selectedOption.value
      : selectedOption;

    const changeEvent = {
      target: {
        name: field.name,
        value: selectedValue,
      },
    };
    field.onChange(changeEvent);
  };

  return (
    <div className="flex flex-col mb-5 gap-y-1">
      <label>{label}</label>
      <Select
        {...field}
        {...props}
        value={selectedOption}
        className="text-base text-gray-500 focus:outline-none"
        options={options}
        onChange={handleSelectedOptionChange}
      />
      {meta.touched && meta.error ? (
        <div className="text-xs text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default SelectField;

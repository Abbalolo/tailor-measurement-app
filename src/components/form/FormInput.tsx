import React, { ChangeEvent } from "react";

interface FormInputProps {
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  id: number;
  name: string;
  type: string;
  label: string;
  required: string;
}

const FormInput: React.FC<FormInputProps> = ({
  value,
  onChange,
  id,
  name,
  type,
  label,
  required,
}) => {
  return (
    <div key={id} className="mb-4">
      <label htmlFor={name} className="text-sm font-medium text-gray-600">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required === "required"}
        className="border mt-1 p-1 w-full  focus:outline-teal-500"
      />
    </div>
  );
};

export default FormInput;

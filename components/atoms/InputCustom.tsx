import React from "react";
import ErrorMessage from "../molecules/ErrorMessage";
interface Props {
  type: string;
  name: string;
  setName: (name: string) => void;
  errors: {
    name?: string;
  };
  setErrors: (errors: { name?: string }) => void;
  placeholder: string;
}

export const InputCustom = ({ type, name, setName, errors, setErrors, placeholder }: Props) => {
  return (
    <>
      <input
        type={type}
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={`w-full h-[45px] mt-1 pl-[18px] border rounded-md text-neutralGrey font-open-sans text-14px font-normal leading-19px ${
          errors.name ? "border-red-500" : "border-gray-300"
        } bg-white dark:bg-customBackground`}
        placeholder={placeholder}
      />
      {errors.name && (
        <ErrorMessage
          message={errors.name}
          onClose={() => setErrors({ ...errors, name: undefined })}
        />
      )}
    </>
  );
};

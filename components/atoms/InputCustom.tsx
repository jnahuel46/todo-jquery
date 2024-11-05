import React from "react";
import ErrorMessage from "../molecules/ErrorMessage";

interface Props {
  type: string;
  name: string;
  setName: (name: string) => void;
  errors?: string; // Cambiado para que sea string en vez de un objeto
  setErrors: (error?: string) => void; // Cambiado para que acepte un string opcional
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
          errors ? "border-red-500" : "border-gray-300"
        } bg-white dark:bg-customBackground`}
        placeholder={placeholder}
      />
      {errors && (
        <ErrorMessage
          message={errors} // Asegúrate de que este es un string
          onClose={() => setErrors(undefined)} // Solo limpia el error de este campo
        />
      )}
    </>
  );
};

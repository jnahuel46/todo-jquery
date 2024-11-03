import React from "react";

interface LabelInputProps {
  label?: string;
}

export const LabelInput = ({ label }: LabelInputProps) => {
  return (
    <label className="text-customBlack font-open-sans text-14px font-normal leading-19px text-left dark:text-neutral100">
      {label} <span className="text-customRed">*</span>
    </label>
  );
};

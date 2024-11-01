import React from "react";

interface Props {
  title: string;
  onClick?: () => void; // Make this optional if not always required
  disabled?: boolean;
  customColor?: boolean; // If true, use custom color
  customLabel?: boolean; // If true, use custom label color
}

export const Button = ({
  title,
  onClick,
  disabled,
  customColor,
  customLabel,
}: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full h-[46px] text-white rounded-[5px] font-semibold ${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : customColor
          ? "bg-neutral00" // Use custom color if customColor is true
          : "bg-[#639605] hover:bg-[#4d7304]"
      }`}
    >
      <span className={customLabel ? "text-neutral20" : "text-white"}>
        {title}
      </span>
    </button>
  );
};

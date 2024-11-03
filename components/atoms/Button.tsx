import React from "react";

interface Props {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
  customColor?: boolean;
  customLabel?: boolean;
  customHeight?: string;
  customWidth?: string;
}

export const Button = ({
  title,
  onClick,
  disabled,
  customColor,
  customLabel,
  customHeight = "h-[46px]",
  customWidth = "w-full",
}: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${customWidth} ${customHeight} text-white rounded-[5px] font-semibold flex-1 ${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : customColor
          ? "bg-neutral100"
          : "bg-[#639605] hover:bg-[#4d7304]"
      } dark:bg-customOrange dark:hover:bg-customOrangeHover`}
    >
      <span className={customLabel ? "text-neutral20" : "text-white"}>
        {title}
      </span>
    </button>
  );
};

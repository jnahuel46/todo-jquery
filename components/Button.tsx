import React from "react";

interface Props {
  title: string;
}

export const Button = ({ title }: Props) => {
  return (
    <button className="w-full h-[65px] bg-[#639605] hover:bg-[#4d7304] text-white rounded-[5px] font-semibold">
      {title}
    </button>
  );
};

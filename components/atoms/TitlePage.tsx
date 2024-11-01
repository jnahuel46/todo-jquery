import React from "react";

interface Props {
  title: string;
}

export const TitlePage = ({ title }: Props) => {
  return (
    <h1 className="font-open-sans text-[20px] font-bold text-[#555555] mb-6">
      {title}
    </h1>
  );
};

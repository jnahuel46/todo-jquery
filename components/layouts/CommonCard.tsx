import { ReactNode } from "react";

interface CommonCardProps {
  children: ReactNode;
}

export default function CommonCard({ children }: CommonCardProps) {
  return (
    <div className="py-[18px] px-[15px] pr-[18px] bg-[#FFFFFF] rounded-[4px] shadow-[0px_1px_4px_1px_#0000001F] mb-4">
      {children}
    </div>
  );
}

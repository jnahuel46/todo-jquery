import { ReactNode } from "react";

interface ModalLayoutProps {
  children: ReactNode;
  customStyle?: string;
}

export default function ModalLayout({
  children,
  customStyle,
}: ModalLayoutProps) {
  return (
    <div
      className={`absolute top-full mt-2 bg-white rounded-lg overflow-hidden md:max-w-lg border rounded-[4px] shadow-[0px_1px_4px_1px_#0000001F] z-10 w-[350px] right-[0px] ${customStyle}`}
    >
      {children}
    </div>
  );
}

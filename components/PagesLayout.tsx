import { ReactNode } from "react";

interface PagesLayoutLayoutProps {
  children: ReactNode;
}

export default function PagesLayout({ children }: PagesLayoutLayoutProps) {
  return <div className="p-[15px] pt-[38px]">{children}</div>;
}

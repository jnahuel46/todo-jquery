import { MenuItem } from "@/interfaces/types";

interface SubMenuItemProps {
  item: MenuItem;
}

export const SubMenuItem = ({ item }: SubMenuItemProps) => {
  return (
    <div
      role="button"
      className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 font-open-sans"
    >
      {item.label}
    </div>
  );
};

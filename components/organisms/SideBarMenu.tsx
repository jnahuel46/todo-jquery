import { MenuItem, SideBarMenuProps } from "@/interfaces/types";
import { CloseIcon } from "../atoms/CloseIcon";
import {
  ChevronIcon,
  DogIcon,
  CatIcon,
  InboxIcon,
  ProdcutIcon,
} from "../atoms/icons";
import { MenuItemCom } from "../molecules/MenuItem";
import { TitlePage } from "../atoms/TitlePage";
import { WarningMessage } from "../molecules/WarningMessage";

export const menuItems: MenuItem[] = [
  {
    id: "dogs",
    label: "Perros",
    icon: <DogIcon />,
    subItems: [
      { id: "products-dog", label: "Productos", icon: <ProdcutIcon /> },
    ],
  },
  {
    id: "cats",
    label: "Gatos",
    icon: <CatIcon />,
    subItems: [
      { id: "products-cat", label: "Productos", icon: <ChevronIcon /> },
    ],
  },
  {
    id: "inbox",
    label: "Inbox",
    icon: <InboxIcon />,
    badge: 14,
  },
  // ... resto de items
];

export const SideBarMenu = ({ onClose }: SideBarMenuProps) => {
  return (
    <div className="font-open-sans fixed inset-0 z-50 flex h-screen w-screen flex-col bg-white dark:bg-gray-800 p-4 text-gray-700 dark:text-neutral100 shadow-xl border-r border-gray-200 dark:border-neutral100 md:w-[20rem] md:absolute">
      <CloseIcon onClose={onClose} />
      <TitlePage title="Tiendanimal" />
      <WarningMessage />
      <nav className="flex flex-col gap-1 p-2">
        {menuItems.map((item) => (
          <MenuItemCom key={item.id} item={item} />
        ))}
      </nav>
    </div>
  );
};

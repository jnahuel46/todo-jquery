export interface SideBarMenuProps {
  onClose: () => void;
}
export interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  badge?: number;
  subItems?: MenuItem[];
}

export interface MenuSection {
  items: MenuItem[];
}

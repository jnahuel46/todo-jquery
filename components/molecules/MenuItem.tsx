import React, { useState } from 'react';
import { SubMenuItem } from './SubMenuItem';
import { ChevronIcon } from '../atoms/icons';
import { MenuItem } from '@/interfaces/types';

interface MenuItemProps {
  item: MenuItem;
}

export const MenuItemCom = ({ item }: MenuItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative block w-full">
      <div
        role="button"
        className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none bg-blue-gray-50/50"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full p-3 font-sans text-xl"
        >
          <div className="grid mr-4 place-items-center">
            {item.icon}
          </div>
          <p className="block mr-auto font-sans text-base">
            {item.label}
          </p>
          {item.badge && (
            <div className="grid ml-auto place-items-center">
              <div className="px-2 py-1 text-xs font-bold rounded-full bg-blue-gray-500/20">
                {item.badge}
              </div>
            </div>
          )}
          {item.subItems && (
            <span className="ml-4">
              <ChevronIcon className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </span>
          )}
        </button>
      </div>
      
      {item.subItems && isOpen && (
        <div className="overflow-hidden">
          <div className="block w-full py-1">
            <nav className="flex flex-col gap-1 p-0">
              {item.subItems.map((subItem) => (
                <SubMenuItem key={subItem.id} item={subItem} />
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}; 
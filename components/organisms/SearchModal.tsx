import React, { useEffect, useRef } from "react";
import ModalLayout from "../layouts/ModalLayout";
import { WarningMessage } from "../molecules/WarningMessage";
import { SearchIcon } from "../atoms/icons/SearchIcon";
import { Button } from "../atoms/Button";

interface SearchModalProps {
  onClose: () => void;
  iconRef: React.RefObject<HTMLDivElement>;
}

export const SearchModal = ({ onClose, iconRef }: SearchModalProps) => {
  const modalContentRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      modalContentRef.current &&
      !modalContentRef.current.contains(event.target as Node) &&
      iconRef.current &&
      !iconRef.current.contains(event.target as Node)
    ) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <ModalLayout customStyle="w-[300px] left-[40px]">
      <div
        ref={modalContentRef}
        className="bg-white rounded shadow-lg max-w-md mx-auto"
      >
        <div className="px-4 py-2 border-b border-gray-200">
          <h2 className="font-semibold text-customGrey">Busqueda</h2>
        </div>
        <div className="flex flex-col divide-y divide-gray-200">
          <div className="relative h-[50px] gap-4 flex items-center px-6 py-3">
            <div className="absolute inset-y-0 start-6 flex items-center ps-3 pointer-events-none">
              <SearchIcon />
            </div>
            <input
              type="search"
              id="default-search"
              className="block h-full w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Buscar..."
            />
            <Button title="Buscar" customHeight="h-[30px]" />
          </div>
          <div className="px-6 py-3">
            <WarningMessage />
          </div>
        </div>
      </div>
    </ModalLayout>
  );
};

import React, { useEffect, useRef } from "react";
import ModalLayout from "../layouts/ModalLayout";
import Image from "next/image";
import profile from "@/public/dog_profile.jpg";
import { WarningMessage } from "../molecules/WarningMessage";

interface ProfileModalProps {
  onClose: () => void;
  iconRef: React.RefObject<HTMLDivElement>; // Referencia al ícono de usuario
}

export const ProfileModal = ({ onClose, iconRef }: ProfileModalProps) => {
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
    <ModalLayout customStyle="w-[300px] rigth-[40px]">
      <div
        ref={modalContentRef}
        className="bg-white rounded shadow-lg max-w-md mx-auto dark:bg-gray-800 dark:text-neutral100"
      >
        <div className="px-4 py-2 border-b border-gray-200 dark:border-neutral100">
          <h2 className="font-semibold text-customGrey dark:text-neutral100">Mi Perfil</h2>
        </div>
        <div className="flex flex-col divide-y divide-gray-200 dark:divide-neutral100">
          <div className="flex items-center px-6 py-3 gap-4">
            <Image
              src={profile}
              alt="Profile"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <h3 className="text-customGrey dark:text-neutral100 font-semibold">Jane Doe</h3>
              <p className="text-customGrey dark:text-neutral100">jane.doe@example.com</p>
            </div>
          </div>
          <div className="px-6 py-3">
            <WarningMessage />
          </div>
        </div>
      </div>
    </ModalLayout>
  );
};

import React from "react";
import { Button } from "./Button";
import { useTodoStore } from "@/store/todoStore";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const { addTodo } = useTodoStore();

  if (!isOpen) return null;

  const handleSave = async () => {
    const newTask = {
      id: Math.random(), // Genera un ID único, puedes cambiar esto si necesitas un ID específico
      title: name,
      description: description,
      completed: false,
      userId: 1,
    };

    await addTodo(newTask); // Agrega la tarea a través del store
    onClose(); // Cierra el modal
    setName(""); // Limpia el input
    setDescription(""); // Limpia la descripción
  };

  return (
    <div className="fixed inset-0 pt-[27px] flex items-start justify-center z-50 bg-[#2C2C2CC2] backdrop-blur-md">
      <div className="bg-white rounded-lg shadow-lg p-4 w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 font-semibold text-gray-500 hover:text-gray-700"
        >
          {/* SVG para cerrar el modal */}
        </button>
        <h2 className="text-lg font-semibold pt-[8px] mb-[32px]">Añadir Tarea</h2>
        <label className="text-customGrey font-open-sans text-14px font-normal leading-19px text-left">
          Nombre
        </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-[18px] h-[45px] mt-1 pl-[18px] border border-gray-300 rounded-md text-neutralGrey font-open-sans text-14px font-normal leading-19px"
          placeholder="Nombre"
        />
        <label className="text-customGrey font-open-sans text-14px font-normal leading-19px text-left">
          Descripcion
        </label>
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full h-[156px] mt-1 pl-[18px] pt-[9px] border border-gray-300 rounded-md text-neutralGrey font-open-sans text-14px font-normal leading-19px"
        />
        <div className="flex gap-[10px] mt-[18px] justify-between">
          <Button onClick={onClose} title="Cancelar" customColor customLabel />
          <Button onClick={handleSave} title="Guardar" />
        </div>
      </div>
    </div>
  );
};
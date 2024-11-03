import React, { useEffect } from "react";
import { z } from "zod";
import { useTodoStoreV2 } from "@/store/todo-store";
import ErrorMessage from "./ErrorMessage";
import { Button } from "../atoms/Button";
import { CloseIcon } from "../atoms/CloseIcon";

const taskSchema = z.object({
  title: z.string().min(1, "El nombre es requerido"),
  description: z
    .string()
    .max(200, "La descripción no puede exceder 200 caracteres")
    .min(1, "La descripcion es requerida"),
});

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const { addTodo } = useTodoStoreV2();

  // State for error handling
  const [errors, setErrors] = React.useState<{
    title?: string;
    description?: string;
  }>({});

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setName("");
      setDescription("");
      setErrors({});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSave = async () => {
    try {
      taskSchema.parse({ title: name, description });

      const newTask = {
        id: Math.random(),
        title: name,
        description: description,
        completed: false,
        userId: 1,
      };

      await addTodo(newTask);
      onClose();
      setErrors({}); // Clear errors on success
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error.flatten().fieldErrors;
        setErrors(fieldErrors); // Set validation errors
      }
    }
  };

  return (
    <div className="fixed inset-0 pt-[27px] flex items-start justify-center z-50 bg-[#2C2C2CC2] backdrop-blur-md">
      <div className="bg-white rounded-lg shadow-lg p-4 w-[90%] max-w-[600px] relative">
        <CloseIcon onClose={onClose} />

        <h2 className="text-lg font-semibold pt-[8px] mb-[32px]">
          Añadir Tarea
        </h2>

        <label className="text-customGrey font-open-sans text-14px font-normal leading-19px text-left">
          Nombre{" "}
          {errors.title && (
            <ErrorMessage
              message={errors.title}
              onClose={() => setErrors({ ...errors, title: undefined })}
            />
          )}
        </label>

        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`w-full mb-[18px] h-[45px] mt-1 pl-[18px] border rounded-md text-neutralGrey font-open-sans text-14px font-normal leading-19px ${
            errors.title ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Nombre"
        />

        <label className="text-customGrey font-open-sans text-14px font-normal leading-19px text-left mt-4">
          Descripcion{" "}
          {errors.description && (
            <ErrorMessage
              message={errors.description}
              onClose={() => setErrors({ ...errors, description: undefined })}
            />
          )}
        </label>
        <textarea
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={`w-full h-[156px] mt-1 pl-[18px] pt-[9px] border rounded-md text-neutralGrey font-open-sans text-14px font-normal leading-19px ${
            errors.description ? "border-red-500" : "border-gray-300"
          }`}
        />

        <div className="flex gap-[10px] mt-[18px] justify-between">
          <Button onClick={onClose} title="Cancelar" customColor customLabel />
          <Button onClick={handleSave} title="Guardar" />
        </div>
      </div>
    </div>
  );
};

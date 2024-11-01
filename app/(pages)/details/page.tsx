'use client'
import { Button } from "@/components/atoms/Button";
import CommonCard from "@/components/layouts/CommonCard";
import PagesLayout from "@/components/layouts/PagesLayout";
import { TitlePage } from "@/components/atoms/TitlePage";
import { useState } from "react";
import { z } from "zod";
import ErrorMessage from "@/components/molecules/ErrorMessage";

const formSchema = z.object({
    name: z
      .string()
      .min(1, "El nombre es requerido")
      .max(50, "El nombre no puede exceder los 50 caracteres")
      .regex(/^[A-Za-z\s]+$/, "El nombre solo puede contener letras y espacios"),
    
    email: z
      .string()
      .min(1, "El correo electrónico es requerido")
      .email("El correo electrónico es inválido"),
  
    phone: z
      .string()
      .min(1, "El teléfono es requerido")
      .regex(/^\d+$/, "El teléfono solo puede contener números")
});

export default function DetailsPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
  }>({});

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({}); // Limpiar errores antes de la validación

    const newErrors: { name?: string; email?: string; phone?: string } = {}; // Usar 'const' aquí

    // Validación del nombre
    try {
      formSchema.shape.name.parse(name);
    } catch (error) {
      if (error instanceof z.ZodError) {
        newErrors.name = error.errors[0]?.message; // Guardar solo el primer error
      }
    }

    // Validación del correo
    try {
      formSchema.shape.email.parse(email);
    } catch (error) {
      if (error instanceof z.ZodError) {
        newErrors.email = error.errors[0]?.message;
      }
    }

    // Validación del teléfono
    try {
      formSchema.shape.phone.parse(phone);
    } catch (error) {
      if (error instanceof z.ZodError) {
        newErrors.phone = error.errors[0]?.message;
      }
    }

    // Actualizar el estado de errores solo si hay nuevos errores
    setErrors(newErrors);

    // Si no hay errores, proceder con la lógica de guardado
    if (Object.keys(newErrors).length === 0) {
      // Aquí puedes hacer lo que necesites con los datos válidos
      console.log("Datos válidos:", { name, email, phone });
    }
  };

  return (
    <PagesLayout>
      <TitlePage title="Mis datos" />

      <CommonCard>
        <form className="flex flex-col gap-[21px]" onSubmit={handleSave}>
          <div>
            <label className="text-customBlack font-open-sans text-14px font-normal leading-19px text-left">
              Nombre <span className="text-customRed">*</span>
            </label>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full h-[45px] mt-1 pl-[18px] border rounded-md text-neutralGrey font-open-sans text-14px font-normal leading-19px ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Nombre"
            />
            {errors.name && (
              <ErrorMessage
                message={errors.name}
                onClose={() => setErrors({ ...errors, name: undefined })}
              />
            )}
          </div>

          <div>
            <label className="text-customBlack font-open-sans text-14px font-normal leading-19px text-left">
              Email <span className="text-customRed">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full h-[45px] mt-1 pl-[18px] border rounded-md text-neutralGrey font-open-sans text-14px font-normal leading-19px ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Email"
            />
            {errors.email && (
              <ErrorMessage
                message={errors.email}
                onClose={() => setErrors({ ...errors, email: undefined })}
              />
            )}
          </div>

          <div >
            <label className="text-customBlack font-open-sans text-14px font-normal leading-19px text-left">
              Teléfono <span className="text-customRed">*</span>
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`w-full h-[45px] mt-1 pl-[18px] border rounded-md text-neutralGrey font-open-sans text-14px font-normal leading-19px ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Teléfono"
            />
            {errors.phone && (
              <ErrorMessage
                message={errors.phone}
                onClose={() => setErrors({ ...errors, phone: undefined })}
              />
            )}
          </div>

          <div className="mt-[14px] mb-[16px]">
            <Button title="Guardar" />
          </div>
        </form>
      </CommonCard>
    </PagesLayout>
  );
}

'use client'
import { Button } from "@/components/atoms/Button";
import CommonCard from "@/components/layouts/CommonCard";
import PagesLayout from "@/components/layouts/PagesLayout";
import { TitlePage } from "@/components/atoms/TitlePage";
import { useState } from "react";
import { z } from "zod";
import { InputCustom } from "@/components/atoms/InputCustom";
import { LabelInput } from "@/components/atoms/LabelInput";

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
    .regex(/^\d+$/, "El teléfono solo puede contener números"),
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
    setErrors({}); // Resetea los errores

    const newErrors: { name?: string; email?: string; phone?: string } = {};

    // Validar nombre
    try {
      formSchema.shape.name.parse(name);
    } catch (error) {
      if (error instanceof z.ZodError) {
        newErrors.name = error.errors[0]?.message;
      }
    }

    // Validar email
    try {
      formSchema.shape.email.parse(email);
    } catch (error) {
      if (error instanceof z.ZodError) {
        newErrors.email = error.errors[0]?.message;
      }
    }

    // Validar teléfono
    try {
      formSchema.shape.phone.parse(phone);
    } catch (error) {
      if (error instanceof z.ZodError) {
        newErrors.phone = error.errors[0]?.message;
      }
    }

    setErrors(newErrors); // Actualiza el estado de errores

    if (Object.keys(newErrors).length === 0) {
      console.log("Datos válidos:", { name, email, phone });
    }
  };

  return (
    <PagesLayout>
      <TitlePage title="Mis datos" />

      <CommonCard>
        <form className="flex flex-col gap-[21px]" onSubmit={handleSave}>
          <div>
            <LabelInput label="Nombre" />
            <InputCustom
              type="text"
              name={name}
              setName={setName}
              errors={errors.name} // Se pasa el error específico como string
              setErrors={(error) => setErrors((prev) => ({ ...prev, name: error }))} // Solo actualiza el error de este campo
              placeholder="Nombre"
            />
          </div>

          <div>
            <LabelInput label="Email" />
            <InputCustom
              type="email"
              name={email}
              setName={setEmail}
              errors={errors.email} // Se pasa el error específico como string
              setErrors={(error) => setErrors((prev) => ({ ...prev, email: error }))} // Solo actualiza el error de este campo
              placeholder="Email"
            />
          </div>

          <div>
            <LabelInput label="Teléfono" />
            <InputCustom
              type="tel"
              name={phone}
              setName={setPhone}
              errors={errors.phone} // Se pasa el error específico como string
              setErrors={(error) => setErrors((prev) => ({ ...prev, phone: error }))} // Solo actualiza el error de este campo
              placeholder="Teléfono"
            />
          </div>

          <div className="mt-[14px] mb-[16px]">
            <Button title="Guardar" />
          </div>
        </form>
      </CommonCard>
    </PagesLayout>
  );
}

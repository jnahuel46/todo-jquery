import { Button } from "@/components/Button";
import PagesLayout from "@/components/PagesLayout";
import { TitlePage } from "@/components/TitlePage";

export default function DetailsPage() {
  return (
    <PagesLayout>
      <TitlePage title="Mis datos" />

      <div className="h-[393px] py-[28px] px-[17px] bg-white rounded-lg shadow">
        <form className="space-y-4">
          <div className="h-[65px]">
            <label className="text-[#555555] font-semibold">Nombre</label>
            <input
              required
              className="w-full h-[45px] mt-1 px-3 border border-gray-300 rounded-md"
              placeholder="Ingrese su nombre"
            />
          </div>
          <div className="h-[65px]">
            <label className="text-[#555555] font-semibold">Email</label>
            <input
              type="email"
              required
              className="w-full h-[45px] mt-1 px-3 border border-gray-300 rounded-md"
              placeholder="Ingrese su email"
            />
          </div>
          <div className="h-[65px]">
            <label className="text-[#555555] font-semibold">Teléfono</label>
            <input
              type="tel"
              required
              className="w-full h-[45px] mt-1 px-3 border border-gray-300 rounded-md"
              placeholder="Ingrese su teléfono"
            />
          </div>
          <Button title="Guardar" />
        </form>
      </div>
    </PagesLayout>
  );
}

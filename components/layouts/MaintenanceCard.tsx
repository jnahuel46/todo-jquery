export const MaintenanceCard = () => {
  return (
    <div className="flex items-center justify-center h-full w-full antialiased text-center bg-gray-100">
      <article className="mx-auto max-w-screen-md flex flex-col items-center bg-white">
        <h1 className="text-5xl mb-6 text-customGrey font-semibold">¡Volveremos pronto!</h1>
        <div>
          <p className="text-lg mb-4 text-customBlack">
            ¡Hola! Estamos trabajando en mejorar tu experiencia. Esta pantalla está en desarrollo y estará disponible muy pronto.
          </p>
          <p className="text-lg font-bold text-customGrey">&mdash; El equipo de Tiendanimal</p>
        </div>
      </article>
    </div>
  );
};

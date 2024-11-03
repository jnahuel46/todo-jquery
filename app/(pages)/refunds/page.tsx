import PagesLayout from "@/components/layouts/PagesLayout";
import { TitlePage } from "@/components/atoms/TitlePage";
import CommonCard from "@/components/layouts/CommonCard";
import { MaintenanceCard } from "@/components/layouts/MaintenanceCard";

export default function Comunications() {
  return (
    <PagesLayout>
      <TitlePage title="Mis Devoluciones" />
      <CommonCard>
        <MaintenanceCard />
      </CommonCard>
    </PagesLayout>
  );
}

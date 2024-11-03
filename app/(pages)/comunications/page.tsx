import PagesLayout from "@/components/layouts/PagesLayout";
import { TitlePage } from "@/components/atoms/TitlePage";
import { MaintenanceCard } from "@/components/layouts/MaintenanceCard";
import CommonCard from "@/components/layouts/CommonCard";

export default function Comunications() {
  return (
    <PagesLayout>
      <TitlePage title="Mis comunicaciones" />
      <CommonCard>
        <MaintenanceCard />
      </CommonCard>
    </PagesLayout>
  );
}

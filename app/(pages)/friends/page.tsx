import PagesLayout from "@/components/layouts/PagesLayout";
import { TitlePage } from "@/components/atoms/TitlePage";
import CommonCard from "@/components/layouts/CommonCard";
import { MaintenanceCard } from "@/components/layouts/MaintenanceCard";

export default function FriendsPage() {
  return (
    <PagesLayout>
      <TitlePage title="Mis mejores amigos" />
      <CommonCard>
        <MaintenanceCard />
      </CommonCard>
    </PagesLayout>
  );
}

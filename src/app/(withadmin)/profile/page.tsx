import CommonProfilePage from "@/components/ui/DashboardUi/Profile/CommonProfile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SoftSync INC | Profile",
  description: "Founded by SoftSync INC. It's a profile page of SoftSync INC.",
};

const ProfilePage = () => {
  return (
    <div style={{ margin: "10px" }}>
      <CommonProfilePage />
    </div>
  );
};

export default ProfilePage;

import CommonProfilePage from "@/components/ui/DashboardUi/CommonProfile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZARaN IT | Profile",
  description: "Founded by ZARan-IT. It's a profile page of zaran-it.",
};

const ProfilePage = () => {
  return (
    <div style={{ margin: "10px" }}>
      <CommonProfilePage />
    </div>
  );
};

export default ProfilePage;

import CommonChangePasswordPage from "@/components/ui/DashboardUi/Profile/CommonChangePassword";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZARaN IT | Change Password",
  description: "Founded by ZARan-IT",
};

const ChangePasswordPage = () => {

  return (
    <div>
      <CommonChangePasswordPage />
    </div>
  );
};

export default ChangePasswordPage;

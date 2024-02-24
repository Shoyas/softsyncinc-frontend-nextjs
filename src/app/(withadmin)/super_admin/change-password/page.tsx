import CommonChangePasswordPage from "@/components/ui/DashboardUi/Profile/CommonChangePassword";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SoftSync INC | Change Password",
  description: "Founded by SoftSync INC",
};

const ChangePasswordPage = () => {

  return (
    <div>
      <CommonChangePasswordPage />
    </div>
  );
};

export default ChangePasswordPage;

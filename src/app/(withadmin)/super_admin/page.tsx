import { Metadata } from "next";
import SuperAdminInner from "./profile/page";

export const metadata: Metadata = {
  title: "ZARaN IT | Super Admin",
  description: "Founded by ZARan-IT",
};

const SuperAdminPage = () => {
  return (
    <div>
      <SuperAdminInner />
    </div>
  );
};

export default SuperAdminPage;

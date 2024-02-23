import { Metadata } from "next";
import ProfileInnerPage from "./profile/page";

export const metadata: Metadata = {
  title: "SoftSync INC | Super Admin",
  description: "Founded by SoftSync INC",
};

const SuperAdminPage = () => {
  return (
    <div style={{ margin: "10px" }}>
      <ProfileInnerPage />
    </div>
  );
};

export default SuperAdminPage;

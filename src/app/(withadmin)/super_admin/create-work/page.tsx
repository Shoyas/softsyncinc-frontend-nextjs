
import CommonCreateWorkPage from "@/components/ui/DashboardUi/Work/CommonCreateWork";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZARaN IT | Add Work",
  description: "Founded by ZARan-IT",
};

const CreateWorkPage = () => {
  return (
    <div>
        <CommonCreateWorkPage />
    </div>
  );
};

export default CreateWorkPage;

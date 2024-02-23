
import CommonCreateWorkPage from "@/components/ui/DashboardUi/Work/CommonCreateWork";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SoftSync INC | Add Work",
  description: "Founded by SoftSync INC",
};

const CreateWorkPage = () => {
  return (
    <div style={{ margin: "10px" }}>
        <CommonCreateWorkPage />
    </div>
  );
};

export default CreateWorkPage;

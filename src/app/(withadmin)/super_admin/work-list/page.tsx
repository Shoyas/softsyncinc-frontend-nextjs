import CommonWorkListPage from "@/components/ui/DashboardUi/Work/CommonWorkList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SoftSync INC | Work List",
  description: "Founded by SoftSync INC",
};

const WorkListPage = () => {
  return (
    <div>
        <CommonWorkListPage />
    </div> 
  );
};

export default WorkListPage;

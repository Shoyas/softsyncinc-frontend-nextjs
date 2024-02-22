import CommonWorkListPage from "@/components/ui/DashboardUi/Work/CommonWorkList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZARaN IT | Work List",
  description: "Founded by ZARan-IT",
};

const WorkListPage = () => {
  return (
    <div>
        <CommonWorkListPage />
    </div> 
  );
};

export default WorkListPage;

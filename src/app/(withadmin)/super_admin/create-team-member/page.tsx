import CommonCreateTeamMemberPage from "@/components/ui/DashboardUi/TeamMember/CommonCreateTeamMember";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SoftSync INC | Create Team Member",
  description: "Founded by SoftSync INC",
};



const CreateTeamMemberPage = () => {
    return (
        <div style={{margin: "10px"}}>
            <CommonCreateTeamMemberPage/>
        </div>
    );
};

export default CreateTeamMemberPage;
import OurTeamUi from "@/components/ui/OurTeamUi/OurTeamUi";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ZARaN IT | Our-Team",
    description: "Founder by ZARan-IT",
};

const OurTeamPage = () => {
    return (
        <div>
            <OurTeamUi />
        </div>
    );
};

export default OurTeamPage;
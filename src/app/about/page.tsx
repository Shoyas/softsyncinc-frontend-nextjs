import AboutPageUi from "@/components/ui/AboutUi/AboutPageUi";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "SoftSync INC | About",
    description: "Founder by ZARan-IT",
};

const AboutPage = () => {
    return (
        <div>
            <AboutPageUi />
        </div>
    );
};

export default AboutPage;
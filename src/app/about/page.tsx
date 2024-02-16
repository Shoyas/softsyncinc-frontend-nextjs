import AboutPageUi from "@/components/ui/AboutUi/AboutPageUi";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ZARaN IT | About",
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
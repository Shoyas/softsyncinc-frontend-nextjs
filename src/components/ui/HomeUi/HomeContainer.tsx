import dynamic from "next/dynamic";
import DemoArea from "./DemoArea/DemoArea";
import HeroArea from "./HeroArea/HeroArea";
import WhyChooseArea from "./WhyChooseUs/WhyChooseUs";
import ResponsiveLayoutArea from "./ResponsiveLayout/ResponsiveLayout";
import ProjectsDone from "./ProjectsDone/ProjectsDone";
import Footer from "@/components/sharedUi/Footer";
import HelpingCustomer from "./HelpingCustomer/HelpingCustomer";

const Navbar = dynamic(() => import("../../sharedUi/Navbar"), {
  ssr: false,
});

const HomeContainerPage = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <HeroArea />
        <DemoArea />
        <WhyChooseArea />
        <ResponsiveLayoutArea />
        <ProjectsDone />
        <HelpingCustomer />
      </div>
      <Footer />
    </div>
  );
};

export default HomeContainerPage;

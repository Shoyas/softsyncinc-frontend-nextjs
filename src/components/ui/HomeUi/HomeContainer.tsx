import dynamic from "next/dynamic";
import { Col, Row } from "antd";
import DemoArea from "./DemoArea/DemoArea";
import HeroArea from "./HeroArea/HeroArea";
import WhyChooseArea from "./WhyChooseUs/WhyChooseUs";
import ResponsiveLayoutArea from "./ResponsiveLayout/ResponsiveLayout";
import ProjectsDone from "./ProjectsDone/ProjectsDone";
import Footer from "@/components/sharedUi/Footer";

const Navbar = dynamic(() => import("../../sharedUi/Navbar"), {
  ssr: false,
});

const HomeContainerPage = () => {
  return (
    <div>
      <Row justify="center">
        <Col span={22}>
          <Navbar isActive={false} />
          <HeroArea/>
          <DemoArea/>
          <WhyChooseArea/>
          <ResponsiveLayoutArea/>
          <ProjectsDone/>
          <Footer/>
        </Col>
      </Row>
    </div>
  );
};

export default HomeContainerPage;

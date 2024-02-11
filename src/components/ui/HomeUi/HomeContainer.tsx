import dynamic from "next/dynamic";
import { Col, Row } from "antd";

const Navbar = dynamic(() => import("../../sharedUi/Navbar"), {
  ssr: false,
});

const HomeContainerPage = () => {
  return (
    <div>
      <Row justify="center">
        <Col span={22}>
          <Navbar isActive={false} />
          <h1>Home Page</h1>
        </Col>
      </Row>
    </div>
  );
};

export default HomeContainerPage;

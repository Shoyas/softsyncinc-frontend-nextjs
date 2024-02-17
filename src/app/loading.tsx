import { Space, Spin } from "antd";

const LoadingPage = () => {
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
        textAlign: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Space>
        <Spin tip="Loading" size="large">
          
        </Spin>
      </Space>
    </Space>
  );
};

export default LoadingPage;

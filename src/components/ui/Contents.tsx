"use client";

import { Layout } from "antd";
import ZaranBreadCrumb from "./ZaranBreadCrumb";
const { Content } = Layout;

const Contents = ({ children }: { children: React.ReactNode }) => {
  const base = "admin";
  return (
    <Content style={{ minHeight: "100vh" }}>
      <ZaranBreadCrumb
        items={[
          {
            label: `${base}`,
            link: `${base}`,
          },
          {
            label: `Blog`,
            link: `${base}/add-blog`,
          },
        ]}
      />
      {children}
    </Content>
  );
};

export default Contents;

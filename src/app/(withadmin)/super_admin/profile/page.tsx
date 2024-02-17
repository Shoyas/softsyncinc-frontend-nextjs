"use client";

import ErrorPage from "@/app/error";
import LoadingPage from "@/app/loading";
import ActionBar from "@/components/ui/ActionBar";
import ZaranBreadCrumb from "@/components/ui/DashboardUi/ZaranBreadCrumb";
import { useGetSingleAdminQuery } from "@/redux/api/adminApi";
import { getUserInfo } from "@/services/auth.service";
import { IAdmin } from "@/types";
import { Card, Col, Row } from "antd";
import Image from "next/legacy/image";
import profileBlank from "../../../../asset/next-page/blank-profile.webp";
import dayjs from "dayjs";

const SuperAdminInner = () => {
  const { role, adminId } = getUserInfo() as any;
  const { data, isLoading, isError } = useGetSingleAdminQuery(adminId);
  if (isLoading) {
    return <LoadingPage />;
  }
  if (isError) {
    return <ErrorPage />;
  }
  const admin: IAdmin | undefined = data;
  return (
    <div style={{ margin: "10px" }}>
      <ZaranBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
        ]}
      />
      <ActionBar title="Profile Information" />
      <div style={{ margin: "10px" }}>
        <Row
          justify="center"
          align="middle"
          style={{
            minHeight: "70vh",
          }}
        >
          <Col sm={12} md={8} lg={8}>
            <Image
              src={admin?.adminImg ?? profileBlank}
              width={500}
              height={500}
              alt="Profile Image"
            />
          </Col>
          <Col sm={12} md={14} lg={14}>
            <Card
              title="My Profile"
              bordered={false}
              style={{
                width: "100%",
              }}
            >
              <h3>Name: {admin?.userName}</h3>
              <h3>Role: {admin?.role}</h3>
              <h3>Security Code: {admin?.securityCode}</h3>
              <h3>
                Created At:{" "}
                {admin?.createdAt &&
                  dayjs(admin?.createdAt).format("MMM D, YYYY hh:mm A")}
              </h3>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SuperAdminInner;

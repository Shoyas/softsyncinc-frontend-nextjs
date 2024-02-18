"use client";

import ErrorPage from "@/app/error";
import LoadingPage from "@/app/loading";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { authKey } from "@/constants/storageKey";
import { useChangePasswordByTokenQuery } from "@/redux/api/authApi";
import { changePasswordSchema } from "@/schemas/allSchema";
import { removeUserInfo } from "@/services/auth.service";

import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";

const ChangePasswordPage = () => {
  const router = useRouter();
  const signOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };

  const changePasswordByToken: any = useChangePasswordByTokenQuery(authKey);

  const changePasswordOnSubmit = async (values: any) => {
    console.log("Password change to be: ", values);
    try {
      const res = await changePasswordByToken({
        authKey: authKey,
        data: { newPassword: values.newPassword },
      });
      console.log("Password change: ", res);
      if (res) {
        signOut();
        message.success("Password change successfully");
      }
    } catch (error: any) {
      message.error("Password change is facing problem");
    }
  };

  return (
    <div style={{ margin: "10px" }}>
      <div>
        <Form
          submitHandler={changePasswordOnSubmit}
          resolver={yupResolver(changePasswordSchema)}
        >
          <div
            style={{
              border: "1px double lightgray",
              borderRadius: "5px",
              padding: "15px",
              margin: "10px 0px",
            }}
          >
            <p style={{ fontSize: "18px", marginBottom: "10px" }}>
              Change Password
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="password"
                  name="oldPassword"
                  size="large"
                  label="Old Password"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="password"
                  name="newPassword"
                  size="large"
                  label="New Password"
                />
              </Col>
            </Row>
          </div>
          <Button type="primary" htmlType="submit">
            Change
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ChangePasswordPage;

"use client";

import Form from "@/components/SharedInputFields/Forms/Form";
import FormInput from "@/components/SharedInputFields/Forms/FormInput";
import { authKey } from "@/constants/storageKey";
import { useChangePasswordByTokenMutation } from "@/redux/api/authApi";
import { changePasswordSchema } from "@/schemas/allSchema";
import {
  getUserAccessToken,
  getUserInfo,
  removeUserInfo,
} from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";
import ZaranBreadCrumb from "../../../SharedInputFields/ZaranBreadCrumb";
import ActionBar from "../../ActionBar";

const CommonChangePasswordPage = () => {
  const { role } = getUserInfo() as any;
  const router = useRouter();
  const signOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };
  const accessToken: any = getUserAccessToken();

  const [changePasswordByToken] = useChangePasswordByTokenMutation();

  const changePasswordOnSubmit = async (values: any) => {
    try {
      const res = await changePasswordByToken({
        authKey: accessToken,
        data: {
          oldPassword: values.oldPassword,
          newPassword: values.newPassword,
        },
      });
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
      <ZaranBreadCrumb
        items={[
          {
            label: "Change Password",
            link: `/${role}/change-password`,
          },
        ]}
      />
      <ActionBar title="Password Change" />
      <div>
        <Form
          submitHandler={changePasswordOnSubmit}
          resolver={yupResolver(changePasswordSchema)}
        >
          <div
            style={{
              border: "1px double #002140",
              borderRadius: "5px",
              padding: "15px",
              margin: "10px 0px",
            }}
          >
            <p style={{ fontSize: "18px", marginBottom: "10px" }}>
              Make hard your password
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

export default CommonChangePasswordPage;

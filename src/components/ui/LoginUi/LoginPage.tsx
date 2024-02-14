"use client";

import Image from "next/image";
import { Button, Col, Row, message } from "antd";
import { SubmitHandler } from "react-hook-form";
import LoginImage from "../../../asset/next-page/Computer-login-amico.svg";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";

type FormValues = {
  userName: string;
  password: string;
};

const LoginPage = () => {
  const onSubmitLogin: SubmitHandler<FormValues> = async (data: any) => {
    try {
      console.log(data);
    } catch (error: any) {
      console.error(error.message);
    }
  };
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={16} lg={10}>
        <Image src={LoginImage} width={500} alt="Login Image" />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1 style={{ margin: "15px 0px" }}>Login your account</h1>
        <div>
          <Form submitHandler={onSubmitLogin}>
            <div>
              <FormInput
                name="userName"
                type="name"
                size="large"
                label="User Name"
              />
            </div>
            <div style={{ margin: "15px 0px" }}>
              <FormInput
                name="password"
                type="password"
                size="large"
                label="Password"
              />
            </div>
            <Button
              htmlType="submit"
              className="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all bg-[#323232] rounded-full hover:bg-white group"
            >
              <span className="w-60 h-48 rounded rotate-[-40deg] bg-[#0C5ADB] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
              <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">
                Login
              </span>
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;

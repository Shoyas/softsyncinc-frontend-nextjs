import CommonLoginPage from "@/components/ui/LoginUi/CommonLoginPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZARaN IT | Login",
  description: "Founded by ZARan-IT",
};

const LoginPage = () => {
  return (
    <div>
      <CommonLoginPage />
    </div>
  );
};

export default LoginPage;

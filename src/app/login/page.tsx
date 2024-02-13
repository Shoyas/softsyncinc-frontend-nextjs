import LoginPage from "@/components/ui/LoginUi/LoginPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZARaN IT | Login",
  description: "Founder by ZARan-IT",
};

const LoginPageWithMeta = () => {
  return (
    <div>
      <LoginPage />
    </div>
  );
};

export default LoginPageWithMeta;

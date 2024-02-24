import CommonLoginPage from "@/components/ui/LoginUi/CommonLoginPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SoftSync INC | Login",
  description: "Founded by SoftSync INC",
};

const LoginPage = () => {
  return (
    <div>
      <CommonLoginPage />
    </div>
  );
};

export default LoginPage;

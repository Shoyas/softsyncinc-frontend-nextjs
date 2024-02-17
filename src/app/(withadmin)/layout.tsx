"use client";

import Sidebar from "@/components/ui/DashboardUi/Sidebar";
import { Layout } from "antd";
import Contents from "../../components/ui/DashboardUi/Contents";
import { isLoggedIn } from "@/services/auth.service";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LoadingPage from "../loading";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const adminLoggedIn = isLoggedIn();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!adminLoggedIn) {
      router.push("/login");
    } else {
      setIsLoading(true);
    }
  }, [router]);

  if (!isLoading) {
    return <LoadingPage />;
  }
  return (
    <Layout hasSider>
      <Sidebar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;

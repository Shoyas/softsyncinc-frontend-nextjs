"use client";

import LoadingPage from "@/app/loading";
import { useGetSingleAdminQuery } from "@/redux/api/adminApi";
import { getUserInfo } from "@/services/auth.service";
import { IAdmin } from "@/types";

const CommonProfilePage = () => {
  const { adminId } = getUserInfo() as any;
  const { data, isLoading, isError } = useGetSingleAdminQuery(adminId);
  if (isLoading) {
    return <LoadingPage />;
  }
  const admin: IAdmin | undefined = data;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1>Hey {admin?.userName},</h1>
        <h1>Welcome back to your profile</h1>
      </div>
    </div>
  );
};

export default CommonProfilePage;

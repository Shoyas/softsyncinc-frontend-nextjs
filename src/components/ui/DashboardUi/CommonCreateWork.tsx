'use client';

import { getUserInfo } from "@/services/auth.service";
import ZaranBreadCrumb from "./ZaranBreadCrumb";
import ActionBar from "../ActionBar";

const CommonCreateWorkPage = () => {
    const { role } = getUserInfo() as any;
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
      <ActionBar title="Add work" />
      <div style={{ margin: "10px" }}>
        <h1>Common work page</h1>
      </div>
    </div>
  );
};

export default CommonCreateWorkPage;

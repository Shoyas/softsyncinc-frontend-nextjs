'use client';

import { getUserInfo } from "@/services/auth.service";
import ZaranBreadCrumb from "./ZaranBreadCrumb";
import ActionBar from "../ActionBar";


const CommonWorkListPage = () => {
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
      <ActionBar title="Work List" />
      <div style={{ margin: "10px" }}>
        <h1>Work list page</h1>
      </div>
    </div>
  );
};

export default CommonWorkListPage;

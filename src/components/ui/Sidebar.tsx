"use client";

import { useState } from "react";
import { Layout, Menu } from "antd";
import Link from "next/link";
import zaranItLogo from "../../asset/zaran-it-logo.png";
import Image from "next/image";
import SidebarItems from "./SidebarItems";
import { USER_ROLE } from "@/constants/role";

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const role = USER_ROLE.SUPER_ADMIN;
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={280}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div
        style={{
          fontSize: "2rem",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        <Link href={"/"} className="text-white">
          {collapsed ? (
            <div className="mx-auto">
              <Image src={zaranItLogo} width={50} height={50} alt="logo" />
            </div>
          ) : (
            "ZARaN IT"
          )}
        </Link>
      </div>
      <Menu
        className="font-semibold"
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={SidebarItems(role)}
      />
    </Sider>
  );
};

export default Sidebar;
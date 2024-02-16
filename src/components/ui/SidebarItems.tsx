import type { MenuProps } from "antd";
import {
  TeamOutlined,
  UserOutlined,
  ContainerOutlined,
  DropboxOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "@/constants/role";

const SidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <UserOutlined />,
      children: [
        {
          label: <Link href={`/${role}/profile`}>Account</Link>,
          key: `/${role}/profile`,
        },
        {
          label: <Link href={`/${role}/change-password`}>Change Password</Link>,
          key: `/${role}/change-password`,
        },
      ],
    },
  ];

  const commonAdminSidebarItems: MenuProps["items"] = [
    {
      label: "Manage Blog",
      icon: <ContainerOutlined />,
      key: `/${role}/blog`,
      children: [
        {
          label: <Link href={`/${role}/create-blog`}>Add Blog</Link>,
          key: `/${role}/create-blog`,
        },
        {
          label: <Link href={`/${role}/blog-list`}>Blog List</Link>,
          key: `/${role}/blog-list`,
        },
      ],
    },
    {
      label: <Link href={`/${role}/email-records`}>Email Records</Link>,
      icon: <DropboxOutlined />,
      key: `/${role}/email-records`,
    },
    {
      label: <Link href={`/${role}/visitor-records`}>Visitors</Link>,
      icon: <UserSwitchOutlined />,
      key: `/${role}/visitor-records`,
    },
  ];

  //! Admin Sidebar Menu
  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
  ];
  //! Super Admin Sidebar Menu
  const superAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
    {
      label: "Manage Admin",
      icon: <TeamOutlined />,
      key: `/${role}/manage-admin`,
      children: [
        {
          label: <Link href={`/${role}/create-admin`}>Add Admin</Link>,
          key: `/${role}/create-admin`,
        },
        {
          label: <Link href={`/${role}/admin-list`}>Admin List</Link>,
          key: `/${role}/admin-list`,
        },
      ],
    },
  ];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else {
    return defaultSidebarItems;
  }
};

export default SidebarItems;

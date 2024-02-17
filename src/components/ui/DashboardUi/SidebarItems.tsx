import type { MenuProps } from "antd";
import {
  UsergroupAddOutlined,
  CodeOutlined,
  TeamOutlined,
  UserOutlined,
  ContainerOutlined,
  DropboxOutlined,
  UserSwitchOutlined,
  ThunderboltOutlined,
  MergeOutlined,
  DeploymentUnitOutlined,
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
          label: <Link href={`/${role}`}>Account</Link>,
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
      label: "Work",
      icon: <CodeOutlined />,
      key: `/${role}/manage-work`,
      children: [
        {
          label: <Link href={`/${role}/create-work`}>Add Work</Link>,
          key: `/${role}/create-work`,
        },
        {
          label: <Link href={`/${role}/work-list`}>Work List</Link>,
          key: `/${role}/work-list`,
        },
      ],
    },
    {
      label: "Team Member",
      icon: <UsergroupAddOutlined />,
      key: `/${role}/manage-team-member`,
      children: [
        {
          label: (
            <Link href={`/${role}/create-team-member`}>Add Team Member</Link>
          ),
          key: `/${role}/create-team-member`,
        },
        {
          label: (
            <Link href={`/${role}/team-member-list`}>Team Member List</Link>
          ),
          key: `/${role}/team-member-list`,
        },
      ],
    },
    {
      label: "Founder",
      icon: <DeploymentUnitOutlined />,
      key: `/${role}/manage-founder`,
      children: [
        {
          label: <Link href={`/${role}/create-founder`}>Add Founder</Link>,
          key: `/${role}/create-founder`,
        },
        {
          label: <Link href={`/${role}/founder-list`}>Founder List</Link>,
          key: `/${role}/founder-list`,
        },
      ],
    },
    {
      label: "Blog",
      icon: <ContainerOutlined />,
      key: `/${role}/manage-blog`,
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
      label: "Category",
      icon: <ThunderboltOutlined />,
      key: `/${role}/manage-category`,
      children: [
        {
          label: <Link href={`/${role}/create-category`}>Add Category</Link>,
          key: `/${role}/create-category`,
        },
        {
          label: <Link href={`/${role}/category-list`}>Category List</Link>,
          key: `/${role}/category-list`,
        },
      ],
    },
    {
      label: "Service",
      icon: <MergeOutlined />,
      key: `/${role}/manage-service`,
      children: [
        {
          label: <Link href={`/${role}/create-service`}>Add Service</Link>,
          key: `/${role}/create-service`,
        },
        {
          label: <Link href={`/${role}/service-list`}>Service List</Link>,
          key: `/${role}/service-list`,
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
      label: "Admin",
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

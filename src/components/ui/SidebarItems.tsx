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
      label: "Manage Work",
      icon: <ContainerOutlined />,
      key: `/${role}/work`,
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
      label: "Manage Team Member",
      icon: <ContainerOutlined />,
      key: `/${role}/team-member`,
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
      label: "Manage Founder",
      icon: <ContainerOutlined />,
      key: `/${role}/founder`,
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
      label: "Manage Category",
      icon: <ContainerOutlined />,
      key: `/${role}/category`,
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
      label: "Manage Service",
      icon: <ContainerOutlined />,
      key: `/${role}/service`,
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

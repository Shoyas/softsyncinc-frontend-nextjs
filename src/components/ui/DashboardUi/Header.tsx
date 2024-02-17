import { Avatar, Button, Layout, Row, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { authKey } from "@/constants/storageKey";
import { useRouter } from "next/navigation";
import { useGetSingleAdminQuery } from "@/redux/api/adminApi";
import { IAdmin } from "@/types";

const { Header: AntHeader } = Layout;

const Header = () => {
  const { adminId } = getUserInfo() as any;
  const { data, isLoading, isError } = useGetSingleAdminQuery(adminId);
  const admin: IAdmin | undefined = data;

  const router = useRouter();
  const logout = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };
  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Button onClick={logout} type="text" danger>
          Logout
        </Button>
      ),
    },
  ];
  return (
    <AntHeader>
      <Row justify="end" align="middle" style={{ height: "100%" }}>
        <Dropdown menu={{ items }}>
          <a>
            <Space wrap size={16}>
              <Avatar size="large" icon={<UserOutlined />} />
            </Space>
          </a>
        </Dropdown>
        <p className="text-white ml-2">{admin?.userName}</p>
      </Row>
    </AntHeader>
  );
};

export default Header;

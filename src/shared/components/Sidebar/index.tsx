import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { LayoutContext } from "@contexts/LayoutContext";
import { MenuProps, Layout as UILayout, Menu as UIMenu } from "antd";
import React, { HtmlHTMLAttributes, useContext, useState } from "react";
import Logo from "../Logo";
import "./styles.scss";

const { Sider: UISider } = UILayout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const rootSubmenuKeys = ["sub1", "sub2"];

const Sidebar: React.FC<HtmlHTMLAttributes<HTMLElement>> = () => {
  const { state } = useContext(LayoutContext);

  const [openKeys, setOpenKeys] = useState(["sub1"]);

  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <UISider collapsible collapsed={state.collapsed} trigger={null}>
      <div className="sidebar__logo">
        <Logo />
      </div>
      <UIMenu
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        theme={state.themeMode}
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={items}
      />
    </UISider>
  );
};

export default Sidebar;

import { AuthContext } from "@contexts/AuthContext";
import { Layout as UILayout } from "antd";
import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../Sidebar";
import "./styles.scss";

const { Content: UIContent } = UILayout;

const Layout: React.FC = () => {
  const { state: authState } = useContext(AuthContext);

  return (
    <UILayout className="layout">
      {authState.isLogged && <Sidebar />}
      <UILayout className="layout__outlet">
        {authState.isLogged && <Header />}
        <UIContent className="layout__content">
          <Outlet />
        </UIContent>
      </UILayout>
    </UILayout>
  );
};

export default Layout;

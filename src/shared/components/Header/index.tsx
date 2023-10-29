import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { LayoutContext } from "@contexts/LayoutContext";
import { Button, Layout as UILayout } from "antd";
import React, { HTMLAttributes, useCallback, useContext } from "react";
import "./styles.scss";

const { Header: UIHeader } = UILayout;

const Header: React.FC<HTMLAttributes<HTMLElement>> = () => {
  const { state, dispatch } = useContext(LayoutContext);

  const changeTheme = useCallback(() => {
    if (state.themeMode === "light") {
      dispatch({ type: "setThemeMode", payload: "dark" });
      return;
    }

    dispatch({ type: "setThemeMode", payload: "light" });
  }, [state.themeMode]);

  return (
    <UIHeader className="header">
      <Button
        type="text"
        icon={state.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() =>
          dispatch({ type: "setCollapedSidebar", payload: !state.collapsed })
        }
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
      <Button type="primary" onClick={changeTheme}>
        Mudar tema
      </Button>
    </UIHeader>
  );
};

export default Header;

import LayoutCustomization from "@configurations/LayoutCustomization";
import AuthContainer from "@containers/Auth";
import { LayoutContext } from "@contexts/LayoutContext";
import NoMatch from "@shared/NoMatch";
import Layout from "@shared/components/Layout";
import { ConfigProvider } from "antd";
import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

const Home = React.lazy(() => import("@containers/Home"));

const Routing: React.FC = () => {
  const { state: layoutState } = useContext(LayoutContext);

  return (
    <ConfigProvider theme={LayoutCustomization(layoutState.themeMode)}>
      <Routes>
        <Route path="*" element={<NoMatch />} />
        <Route path="/" element={<AuthContainer.SignIn />}></Route>
        <Route path="/register" element={<AuthContainer.SignUp />}></Route>
        <Route
          path="/confirmation"
          element={<AuthContainer.Confirmation />}
        ></Route>

        <Route path="/" element={<Layout />}>
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </ConfigProvider>
  );
};

export default Routing;

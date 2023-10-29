import { AuthContext } from "@contexts/AuthContext";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

interface PrivateRouteProps {
  children: React.ReactNode;
  accessAllowed?: boolean;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  accessAllowed = true,
}) => {
  const { state } = useContext(AuthContext);
  const navigate = useNavigate();

  if (state.isLogged && accessAllowed) {
    return <React.Suspense>{children}</React.Suspense>;
  }

  navigate("/");

  return null;
};

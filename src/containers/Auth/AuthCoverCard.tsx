import Logo from "@shared/components/Logo";
import React from "react";
import "./styles.scss";

const AuthCoverCard: React.FC = () => {
  return (
    <div className="auth-page__cover-logo">
      <Logo />
    </div>
  );
};

export default AuthCoverCard;

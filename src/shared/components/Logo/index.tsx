import LogoSVG from "@assets/svg/logo.svg";
import React from "react";
import "./styles.scss";

const Logo: React.FC = () => {
  return <img src={LogoSVG} alt="ImobiGS" className="logo" />;
};

export default Logo;

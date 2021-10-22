import React from "react";
import { LogoStyle } from "../Style/LogoStyle";
import logoSite from "../../../assets/logoSite.png"

const Logo = () => {
  return (
    <LogoStyle>
      {/* <Icon icon={moviesAndTv16Regular} className="icon" />
      Entertainement Hub */}
      <img src={logoSite} alt="logo du site"/>
    </LogoStyle>
  );
};

export default Logo;

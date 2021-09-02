import React from "react";
import { LogoStyle } from "../Style/LogoStyle";

import { Icon, InlineIcon } from "@iconify/react";
import moviesAndTv16Regular from "@iconify-icons/fluent/movies-and-tv-16-regular";
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

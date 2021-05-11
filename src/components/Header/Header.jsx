import React from "react";
import Logo from "./Layout/Logo";
import Menu from "./Layout/Menu";

import { HeaderStyle } from "./Style/HeaderStyle";

const Header = () => {
  return (
    <HeaderStyle className="navbar fixed-top">
      <Logo />
      <Menu />
    </HeaderStyle>
  );
};

export default Header;

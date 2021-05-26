import React from "react";

import SideBar from "../SideBar";

import {
  Container,
  Tesla,
  MainMenu,
  MenuItem,
  Account,
  AccountItem,
  IconMenu,
} from "./styles";

const Header: React.FC = () => {
  const sidebarControll = () => {
    const side = document.querySelector(".sidebar") as HTMLDivElement;

    side.style.maxWidth = "320px";
  };

  return (
    <Container>
      <Tesla src="/tesla.png" alt="tesla logo" />
      <MainMenu>
        <MenuItem>MODEL S</MenuItem>
        <MenuItem>MODEL 3</MenuItem>
        <MenuItem>MODEL X</MenuItem>
        <MenuItem>MODEL Y</MenuItem>
        <MenuItem>SOLAR ROOF</MenuItem>
        <MenuItem>SOLAR PANELS</MenuItem>
      </MainMenu>
      <Account>
        <AccountItem>SHOP</AccountItem>
        <AccountItem>TESLA ACCOUNT</AccountItem>
        <IconMenu onClick={sidebarControll} />
      </Account>
      <SideBar />
    </Container>
  );
};

export default Header;

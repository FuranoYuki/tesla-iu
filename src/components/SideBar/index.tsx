import React from "react";
import { Link } from "react-router-dom";

import { Container, Wrapper, Item, Header } from "./styles";

const SideBar: React.FC = () => {
  const sidebarClose = () => {
    const side = document.querySelector(".sidebar") as HTMLDivElement;
    side.style.maxWidth = "0";
  };

  return (
    <Container className="sidebar">
      <Header onClick={sidebarClose} />
      <Wrapper>
        <Item>
          <Link to="/">MODEL S</Link>
        </Item>
        <Item>
          <Link to="/">MODEL 3</Link>
        </Item>
        <Item>
          <Link to="/">MODEL X</Link>
        </Item>
        <Item>
          <Link to="/">MODEL Y</Link>
        </Item>
        <Item>
          <Link to="/">SOLAR ROOF</Link>
        </Item>
        <Item>
          <Link to="/">SOLAR PANELS</Link>
        </Item>
        <Item>
          <Link to="/">MORE</Link>
        </Item>
        <Item>
          <Link to="/">UNITED STATES</Link>
        </Item>
      </Wrapper>
    </Container>
  );
};

export default SideBar;

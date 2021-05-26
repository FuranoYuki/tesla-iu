import React, { useEffect } from "react";

import HomeProducts from "../../components/HomeProducts";
import Header from "../../components/Header";

import Container from "./styles";

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Electric Cars, Solar & Clean Energy | Tesla";
  }, []);

  return (
    <Container>
      <Header />
      <HomeProducts />
    </Container>
  );
};

export default Home;

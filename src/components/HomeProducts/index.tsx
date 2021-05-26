import React, { useEffect, useRef } from "react";
import scrollReveal from "scrollreveal";

import Footer from "../Footer";

import {
  Container,
  Product,
  ProductContainer,
  ProductInfo,
  InfoTop,
  InfoBottom,
  Header,
  SubHeader,
  Button,
} from "./styles";

const HomeProducts: React.FC = () => {
  const view = useRef(0);

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      const key = e.code;
      const objs = document.querySelectorAll(
        ".product"
      ) as NodeListOf<HTMLDivElement>;

      if (key === "ArrowDown" && view.current < 6) {
        view.current += 1;
      } else if (key === "ArrowUp" && view.current > 0) {
        view.current -= 1;
      }

      if (key === "ArrowDown" || key === "ArrowUp") {
        e.preventDefault();
        objs[view.current].scrollIntoView();
      }
    });
  }, []);

  useEffect(() => {
    scrollReveal().reveal(".product-info", {
      delay: 200,
      origin: "bottom",
      duration: 500,
      reset: true,
      distance: "40px",
    });
  }, []);

  return (
    <Container>
      <ProductContainer className="product">
        <ProductInfo className="product-info">
          <InfoTop>
            <Header>Model S</Header>
            <SubHeader>
              Order Online for
              <span>Touchless Delivery</span>
            </SubHeader>
          </InfoTop>
          <InfoBottom>
            <Button to="/" dark>
              CUSTOM ORDER
            </Button>
            <Button to="/">EXISTING INVENTORY</Button>
          </InfoBottom>
        </ProductInfo>
        <Product src="/img/Home/home-1.jpeg" alt="Model S" />
      </ProductContainer>

      <ProductContainer className="product">
        <ProductInfo className="product-info">
          <InfoTop>
            <Header>Model Y</Header>
            <SubHeader>
              Order Online for
              <span>Touchless Delivery</span>
            </SubHeader>
          </InfoTop>
          <InfoBottom>
            <Button to="/" dark>
              CUSTOM ORDER
            </Button>
            <Button to="/">EXISTING INVENTORY</Button>
          </InfoBottom>
        </ProductInfo>
        <Product src="/img/Home/home-2.jpeg" alt="Model Y" />
      </ProductContainer>

      <ProductContainer className="product">
        <ProductInfo className="product-info">
          <InfoTop>
            <Header>Model 3</Header>
            <SubHeader>
              Order Online for
              <span>Touchless Delivery</span>
            </SubHeader>
          </InfoTop>
          <InfoBottom>
            <Button to="/" dark>
              CUSTOM ORDER
            </Button>
            <Button to="/">EXISTING INVENTORY</Button>
          </InfoBottom>
        </ProductInfo>
        <Product src="/img/Home/home-3.jpeg" alt="Model 3" />
      </ProductContainer>

      <ProductContainer className="product">
        <ProductInfo className="product-info">
          <InfoTop>
            <Header>Model X</Header>
            <SubHeader>
              Order Online for
              <span>Touchless Delivery</span>
            </SubHeader>
          </InfoTop>
          <InfoBottom>
            <Button to="/" dark>
              CUSTOM ORDER
            </Button>
            <Button to="/">EXISTING INVENTORY</Button>
          </InfoBottom>
        </ProductInfo>
        <Product src="/img/Home/home-4.jpeg" alt="Model X" />
      </ProductContainer>

      <ProductContainer className="product">
        <ProductInfo className="product-info">
          <InfoTop>
            <Header>Lowest Cost Solar Panels in America</Header>
            <SubHeader>Money-back guarantee</SubHeader>
          </InfoTop>
          <InfoBottom>
            <Button to="/" dark>
              ORDER NOW
            </Button>
            <Button to="/">LEARN MORE</Button>
          </InfoBottom>
        </ProductInfo>
        <Product
          src="/img/Home/home-5.jpeg"
          alt="Lowest Cost Solar Panels in America"
        />
      </ProductContainer>

      <ProductContainer className="product">
        <ProductInfo className="product-info">
          <InfoTop>
            <Header>Solar for New Roofs</Header>
            <SubHeader>
              Solar Roof Costs Less Than a New Roof Plus Solar Panels
            </SubHeader>
          </InfoTop>
          <InfoBottom>
            <Button to="/" dark>
              ORDER NOW
            </Button>
            <Button to="/">LEARN MORE</Button>
          </InfoBottom>
        </ProductInfo>
        <Product
          src="/img/Home/home-6.jpeg"
          alt=" Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        />
      </ProductContainer>

      <ProductContainer className="product">
        <ProductInfo className="product-info">
          <InfoTop>
            <Header>Accessories</Header>
          </InfoTop>
          <InfoBottom>
            <Button to="/" dark>
              SHOP NOW
            </Button>
          </InfoBottom>
          <Footer />
        </ProductInfo>
        <Product src="/img/Home/home-7.jpeg" alt="Accessories" />
      </ProductContainer>
    </Container>
  );
};

export default HomeProducts;

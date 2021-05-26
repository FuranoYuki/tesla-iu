import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Product = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;
`;

export const ProductContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  scroll-snap-align: start;
`;

export const ProductInfo = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 2;

  width: 100%;
  height: 100%;
`;

export const InfoTop = styled.div`
  margin-bottom: 100px;
`;

export const InfoBottom = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 100%;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

export const Header = styled.div`
  text-align: center;
  font-size: 36px;
  font-weight: 500;

  padding: 4px 0;

  color: var(--text-black);
`;

export const SubHeader = styled.div`
  font-size: 14px;
  color: var(--text-gray);
  text-align: center;
  word-break: break-all;

  > span {
    color: var(--text-black);
    text-decoration: underline;
    margin-left: 5px;

    &:hover {
      cursor: pointer;
      color: black;
    }
  }
`;

interface Props {
  dark?: boolean;
}

export const Button = styled(Link)<Props>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 12px;
  line-height: 14px;
  font-weight: 500;

  margin: 8px;
  border-radius: 20px;
  text-decoration: none;
  border: 3px solid var(--button-black-border);
  height: 40px;

  background-color: ${(props) =>
    props.dark
      ? "var(--button-black-background)"
      : "var(--button-white-background)"};
  color: ${(props) =>
    props.dark ? "var(--button-white-text)" : "var(--button-black-text)"};

  @media (min-width: 600px) {
    padding: 0 40px;
    width: 240px;
  }
`;

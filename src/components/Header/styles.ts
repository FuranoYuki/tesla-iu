import styled from "styled-components";
import { Menu } from "../../icons";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  max-width: 1440px;
  width: 100%;
  padding: 20px;
`;

export const Tesla = styled.img`
  width: 100px;
  height: 10px;

  z-index: 2;

  &:hover {
    cursor: pointer;
  }
`;

export const MainMenu = styled.div`
  display: none;
  justify-content: space-between;

  @media (min-width: 1200px) {
    display: flex;
  }
`;

export const MenuItem = styled.div`
  font-size: 14px;
  margin: 0 5px;
  color: black;
`;

export const Account = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AccountItem = styled.div`
  display: none;
  font-size: 14px;
  color: black;
  margin: 0 5px;

  @media (min-width: 1200px) {
    display: flex;
  }
`;

export const IconMenu = styled(Menu)`
  height: 30px;
  width: 30px;

  &:hover {
    cursor: pointer;
  }
`;

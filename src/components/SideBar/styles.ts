import styled from "styled-components";
import { Close } from "../../icons";

export const Container = styled.div`
  height: 100vh;
  max-width: 0;
  width: 100%;

  position: fixed;
  right: 0;
  top: 0;
  overflow-y: auto;

  display: flex;
  flex-direction: column;

  background-color: white;
  transition: max-width 0.5s;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;

  padding: 0px 10px;
`;

export const Item = styled.div`
  padding: 20px 5px;
  margin: 0 10px;

  font-size: 12px;
  border-bottom: 1px solid var(--sidebar-border);

  > a {
    color: var(--text-black);
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Header = styled(Close)`
  height: 30px;
  width: 30px;
  margin: 20px;
  align-self: flex-end;

  &:hover {
    cursor: pointer;
  }
`;

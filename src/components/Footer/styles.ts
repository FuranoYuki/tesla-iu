import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  position: absolute;
  bottom: 0;

  margin: 50px 0;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;

    > *:nth-child(4),
    > *:nth-child(5),
    > *:nth-child(6),
    > *:nth-child(7),
    > *:nth-child(8),
    > *:nth-child(9) {
      display: none;
    }
  }
`;

export const FooterTopic = styled.div`
  font-size: 12px;
  margin: 2px 10px;
  color: var(--text-black);

  &:hover {
    cursor: pointer;
  }
`;

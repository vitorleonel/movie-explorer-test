import { styled } from "styled-components";

export const Container = styled.header`
  padding: 32px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  #logo svg,
  #github svg {
    height: 24px;
  }

  #github {
    color: white;

    &:hover {
      opacity: 0.75;
    }
  }
`;

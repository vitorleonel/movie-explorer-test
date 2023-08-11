import { styled } from "styled-components";

export const Wrapper = styled.div`
  padding-top: 5.5rem;
  padding-bottom: 5.5rem;

  .movies {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    gap: 24px;
  }
`;

import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 48rem;
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
  margin: auto auto -2.5rem;
  display: flex;
  align-items: center;
  gap: 16px;

  input,
  select {
    font-size: 1.125rem;
  }

  select {
    width: fit-content;
    border-left: 1px solid #64748b;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

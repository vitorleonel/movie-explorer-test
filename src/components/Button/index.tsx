import { styled } from "styled-components";

const Button = styled.button`
  width: 100%;
  background-color: #cbd5e1;
  color: #0f172a;
  padding: 12px 24px;
  border-radius: 8px;
  border: 1px solid transparent;
  font-size: 16px;
  line-height: 24px;
  transition: all 0.25s;

  &:hover,
  &:focus {
    cursor: pointer;
    opacity: 0.85;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    opacity: 0.5;
    cursor: no-drop;
  }
`;

export default Button;

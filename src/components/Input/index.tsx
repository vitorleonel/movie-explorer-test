import { styled } from "styled-components";

const Button = styled.input`
  width: 100%;
  background-color: transparent;
  padding: 12px 16px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  line-height: 24px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #64748b;
  }
`;

export default Button;

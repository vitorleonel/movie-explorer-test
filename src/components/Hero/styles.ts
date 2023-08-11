import { styled } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  max-height: 640px;
  border-bottom: 4px solid #0ea5e9;
  background-color: #0ea5e9;
  position: relative;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    user-select: none;
    position: absolute;
    top: 0;
    left: 0;
  }

  > .container {
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1;
  }
`;

export const Heading = styled.div`
  max-width: 48rem;
  margin: 6rem auto auto;
  display: flex;
  flex-direction: column;
  gap: 32px;

  h2,
  p {
    text-align: center;
    text-shadow: 0px 4px 8px rgba(15, 23, 42, 0.1);
    color: white;
  }

  h2 {
    font-size: 4rem;
    line-height: 4rem;
    font-weight: 700;
  }

  p {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

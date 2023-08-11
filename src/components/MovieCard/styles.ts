import { styled } from "styled-components";

export const Resume = styled.div`
  width: 100%;
  padding: 1rem;
  color: white;
  position: absolute;
  bottom: 0;
  z-index: 1;
  display: grid;
  grid-template-areas:
    "name name"
    "director year";
  gap: 8px;
  transition: all 0.2s ease-in-out;
`;

export const Description = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  overflow-y: auto;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: all 0.2s ease-in-out;
  z-index: 1;
`;

export const Container = styled.div`
  width: 100%;
  background-color: white;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  aspect-ratio: 1;
  position: relative;
  overflow: hidden;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);

    ${Resume} {
      opacity: 0;
    }

    ${Description} {
      opacity: 1;
    }
  }

  &:after {
    content: "";
    width: 100%;
    height: 60%;
    padding: 1rem;
    box-sizing: border-box;
    background: linear-gradient(
      180deg,
      rgba(15, 22, 42, 0) 0%,
      rgba(15, 22, 42, 1) 100%
    );
    position: absolute;
    bottom: 0;
    left: 0;
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const Name = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.5rem;
  grid-area: name;
`;

export const DirectorName = styled.span`
  font-size: 0.875rem;
  line-height: 1.5rem;
  grid-area: director;
`;

export const Year = styled(DirectorName)`
  grid-area: year;
  margin-left: auto;
`;

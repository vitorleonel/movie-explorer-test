import Header from "../Header";
import SearchForm from "../SearchForm";

import { Container, Heading } from "./styles";

import backgroundImage from "../../assets/hero-background.jpg";

const Hero = (): React.ReactNode => {
  return (
    <Container>
      <div className="container">
        <Header />

        <Heading>
          <h2>See all movies released in a given year</h2>
          <p>The right tool to help you find the movies you forgot the name</p>
        </Heading>

        <SearchForm />
      </div>

      <img src={backgroundImage} alt="" />
    </Container>
  );
};

export default Hero;

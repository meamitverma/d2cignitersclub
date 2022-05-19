import React from "react";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  color: white;
  margin-left: 20px;
`;
const Title = styled.h1`
  font-weight: bold;
`;
const Info = styled.p`
  font-size: medium;

  @media screen and (max-width: 700px) {
    font-size: 0.88em;
  }
`;

function About() {
  return (
    <Container id="about">
      <Title>About</Title>
      <Info>
        "Potential is a priceless treasure, like gold. Everyone has gold hidden
        within, but we have to dig to get it out."
        <br></br>
        <br></br>Igniters Club which is powered by Unstop (Formerly
        Dare2Compete) was started in 2021 with the vision of bringing together
        diverse minds, giving them a way to learn new things and boost their
        confidence.
        <br></br>
        <br></br>This not only focuses on a particular skill of a student but it
        also helps in his overall development. One of the main goals of this
        club is to make students ready for this ever-growing competitive land.
        It’s a place to learn, compete and grow.
      </Info>
    </Container>
  );
}

export default About;

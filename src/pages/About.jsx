import React from "react";

import styled from "styled-components";

const Container = styled.div`
  color: white;
  margin-left: 20px;
`;
const Title = styled.h1`
  font-weight: bold;
  
`;
const Info = styled.p`
  font-size: medium;
`;

function About() {
  return (
    <Container id="about">
      <Title>About</Title>
      <Info>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil unde
        deserunt ratione magni porro, nostrum possimus praesentium mollitia
        sint. Quasi ducimus delectus impedit aliquam hic at reprehenderit
        officia natus ullam culpa maxime blanditiis nemo odio, iure ex expedita
        asperiores possimus voluptatibus fuga error eveniet sit accusamus.
        Tenetur sequi sit ducimus!
      </Info>
    </Container>
  );
}

export default About;

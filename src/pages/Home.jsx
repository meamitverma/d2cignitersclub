import React from 'react'
import About from './About';
import d2clogo from '../assets/images/logo/ignitersclub_logo.jpg'
import styled from 'styled-components'
import homebg from '../assets/video/bg/homebg.mp4'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  /* background-color: #131313; */
`;
const BGVideo = styled.video`
  width: 100%;
  height: 100%;
  /* filter: brightness(60%) blur(2px); */
  /* filter:blur(2px); */
  object-fit: cover;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 10px 5%;
  //z-index: 2;

  @media screen and (max-width:700px){
    flex-direction: column;
  } 
`;
const Left = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.img`
  border-radius: 50%;
  transition: all 1s ease;
  /* border: 5px solid black; */
  /*   
  transform: translate(-45vw,0);
  width: 45px; */
    @media screen and (max-width:700px){
      height: 65%;
    }
  `;
const Title = styled.h1`
  margin-top: 10px;
  font-size: 27px;
  color: #fff;
  font-weight:bold;
`;

const Right = styled.div`
  flex: 1;
`;

function Home() {
  return (
    <Container >



      <BGVideo loop autoPlay muted>
        <source
          src={homebg}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </BGVideo>

      <Wrapper>
        <Left>
          <Logo src={d2clogo}></Logo>
          <Title>VIT BHOPAL</Title>
        </Left>
        <Right>
          <About/>
        </Right>
      </Wrapper>

    </Container>
  )
}

export default Home;
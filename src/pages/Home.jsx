import React from 'react'
import About from './About';
import d2clogo from '../assets/images/logo/ignitersclub_logo.jpg'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  background-color: #131313;
  `;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 10px 5%;
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

function Navbar() {
  return (
    <Container >
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

export default Navbar
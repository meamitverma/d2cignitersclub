import React from "react";
import styled from "styled-components";
import { navItems } from "../data";

import logo from "../assets/images/logo/ignitersclub_logo.jpg";
const vitblogo = 'https://vitbhopal.ac.in/file/2020/01/logochhota.png';

const title = "Igniters club";

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: ${(props) => props.bgcolor};
  height: 60px;
  color: white;
  user-select: none;
  z-index: 10;
  
  @media screen and (max-width:700px) {
    width: 100%;
    height: auto;
  }

`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  justify-content: space-between;

  @media screen and (max-width:700px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  border-radius: 50%;
  max-width: 45px;
`;
const Title = styled.h1`
  margin-left: 10px;
  font-weight: bold;
  font-size: x-large;
`;

const Middle = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-between;
  
  @media screen and (max-width:700px) {
    display: none;
    flex-direction: column;
    align-self: center;
  }
`;
const Navitem = styled.a`
  text-decoration: none;
  color: white;
  margin-right: 15px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus{
    outline: none;
  }

  &:hover {
    /* filter: brightness(80%); */
    font-weight: bold;
    color: #1975ca;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: right;
  /* background-color: red; */
`;
const VITLogo = styled.img`
  height: 34px;
`;  

function Navbar() {
  console.log(navItems[0].title);

  return (
    <Container bgcolor="#040303">
      <Wrapper>
        <Left>
          <Logo src={logo}></Logo>
          <Title>{title}</Title>
        </Left>
        <Middle>
          {navItems.map((item) => {
            return (
              <Navitem key={item.id} href={item.href}>
                {item.title}
              </Navitem>
            );
          })}
        </Middle>
        <Right>
          <VITLogo src={vitblogo}></VITLogo>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;

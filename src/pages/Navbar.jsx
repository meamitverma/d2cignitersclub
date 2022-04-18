import React from "react";
import styled from "styled-components";

import logo from "../assets/images/logo/ignitersclub_logo.jpg";

const title = "D2C Igniters club";

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: ${(props) => props.bgcolor};
  height: 60px;
  color: white;
  user-select: none;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  justify-content: space-between;
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
  flex: 3;
  display: flex;
`;
const Navitem = styled.div`
  margin-right: 15px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    /* filter: brightness(80%); */
    font-weight: bold;
    color: #1975ca;
  }
`;

function Navbar() {
  const navItems = [
    {
      id: 1,
      title: "Home",
      href: "#",
    },
    {
      id: 2,
      title: "About",
      href: "#",
    },
    {
      id: 3,
      title: "Events",
      href: "#",
    },
    {
      id: 4,
      title: "Blog",
      href: "#",
    },
    {
      id: 5,
      title: "Team",
      href: "#",
    },
  ];

  console.log(navItems[0].title);

  return (
    <Container bgcolor="#040303">
      <Wrapper>
        <Left>
          <Logo src={logo} ></Logo>
          <Title>{title}</Title>
        </Left>
        <Middle>
          {navItems.map((item) => {
            return <Navitem key={item.id} href={item.href}>
              {item.title}
            </Navitem>;
          })}
        </Middle>
      </Wrapper>
    </Container>
  );
}

export default Navbar;

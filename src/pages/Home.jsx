import React, { useState, useEffect } from "react";
import About from "./About";
import d2clogo from "../assets/images/logo/ignitersclub_logo.jpg";
import styled, { keyframes } from "styled-components";
import homebg from "../assets/video/bg/homebg.mp4";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  /* background-color: #131313; */
  @media screen and (max-width: 700px) {
    height: unset;
  }
`;
const BGVideo = styled.video`
  width: 100%;
  height: 100vh;
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
  margin: 0px 5%;
  //z-index: 2;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    margin: 100px 5%;
  }
`;
const Left = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.img`
  border-radius: 50%;
  transition: all 1s ease;
  height: 22rem;
  /* border: 5px solid black; */
  /*   
  transform: translate(-45vw,0);
  width: 45px; */
  @media screen and (max-width: 700px) {
    margin-top: 7em;
    height: 7em;
  }
`;
const Title = styled.h1`
  margin-top: 10px;
  font-size: 27px;
  color: #fff;
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
`;

// const moveInLeft = keyframes`
//   0%{
//     transform: translateX(100px);
//   }

//   80% {
//     transform: translateX(-10px);
//   }

//   100% {
//     transform: translateX(0);
//   }
// `;

const CurrentDateTimeContainer = styled.div`
  position: absolute;
  /* background-image: li{near-gradient(#0000009e,#2020217b), url('https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg?w=2000'); */
  background-color: #1975ca;
  height: auto;
  width: 15em;
  opacity: 0.9;
  top: 100px;
  right: 0;
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 17px;
  color: #f0f0f0;
  user-select: none;
  transition: 01s transform ease;

  @media screen and (max-width: 700px) {
    top: 0;
    padding: 0% 2%;
    width: max-content;
    background-color: #1974ca00;
  }
`;

const Time = styled.div`
  font-size: xx-large;
`;
const Dates = styled.div`
  font-size: small;
  /* color: #383838; */
`;

function Home() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [time, setTime] = useState("00:00:00");

  let today = new Date();
  let day = dayNames[today.getDay() - 1];
  let date = today.getDate();
  let month = monthNames[today.getMonth()];
  let year = today.getFullYear();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(today.toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <Container>
      <BGVideo loop autoPlay muted>
        <source src={homebg} type="video/mp4" />
        Your browser does not support the video tag.
      </BGVideo>

      <CurrentDateTimeContainer>
        <Time>{time}</Time>
        <Dates>{day + ", " + date + " " + month + " " + year}</Dates>
      </CurrentDateTimeContainer>

      <Wrapper>
        <Left>
          <Logo src={d2clogo}></Logo>
          <Title>VIT BHOPAL</Title>
        </Left>
        <Right>
          <About />
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Home;

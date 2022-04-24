import React, { useState } from "react";
import { upcomingEvents } from "../data";

import styled from "styled-components";

const Container = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 80vh;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 40px;
  height: 40px;
  /* background-color: #000000; */
  background-color: #77777718;
  /* background-image: url(https://img.icons8.com/external-becris-lineal-becris/344/ffffff/external-left-arrow-mintab-for-ios-becris-lineal-becris.png); */
  background-image: url(https://img.icons8.com/external-becris-lineal-becris/344/0/external-left-arrow-mintab-for-ios-becris-lineal-becris.png);
  background-repeat: no-repeat;
  background-position: 30% center;
  transform: scaleX(${props=> props.dir === "right" && -1});
  background-size: 55%;
  border-radius: 50%;
  /* border: 3px solid #939393; */
  box-shadow: 0px 0px 2px #000000;
  top: 0;
  bottom: 0;
  margin: auto;
  position: absolute;
  right: ${(props) => props.dir === "right" && "5px"};
  left: ${(props) => props.dir === "left" && "5px"};
  cursor: pointer;
  opacity: 0.8;
  z-index: 2;
  transition: all 0.2s ease;

  &:hover{
    background-color: #000000;
    /* background-color: #77777718; */
    /* background-image: url(https://img.icons8.com/external-becris-lineal-becris/344/0/external-left-arrow-mintab-for-ios-becris-lineal-becris.png); */
    background-image: url(https://img.icons8.com/external-becris-lineal-becris/344/ffffff/external-left-arrow-mintab-for-ios-becris-lineal-becris.png);
  }
`;

const Wrapper = styled.div`
  display: flex;
  transition: all 1s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  flex-shrink: 0;
  height: 80vh;
  width: 100vw;
  display: flex;
  background-color: ${(props) => props.bgcolor};
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 55px;
`;
const Poster = styled.img`
  height: 80vh;
  object-fit: contain;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: auto; 
  height: 80vh;
  /* margin-left: 10px; */
  margin-right: 110px;
`;
const Video = styled.iframe`
  width: 30vw;
  height: 36vh;
  border: none;
`;
const Heading = styled.h1`
  margin: 45px 0px;
`;
const RegisterButton = styled.button`
  border: none;
  border-radius: 60px;
  height: 35px;
  color: white;
  font-size:large;
  border: 1px solid #616161;
  background-color: #191919;
  box-shadow: 2px 2px 3px darkgray;
  width: 100%;
  margin: 22px 0px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover{
    /* border: 2px solid black; */
    background-color: #2194ff;
  }
`;

function Events() {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleArrowClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(
        slideIndex > 0 ? slideIndex - 1 : upcomingEvents.length - 1
      );
    } else {
      setSlideIndex(
        slideIndex < upcomingEvents.length - 1 ? slideIndex + 1 : 0
      );
    }
    // console.log(slideIndex);
  };

  return (
    <Container id="events">
      <Arrow dir="left" onClick={() => handleArrowClick("left")}>
       
      </Arrow>

      <Wrapper slideIndex={slideIndex}>
        {upcomingEvents.map((event) => {
          return (
            <Slide bgcolor={event.bgcolor} key={event.id}>
              <Left>
                  <div>
                  <Poster src={event.img}></Poster>
                </div>
              </Left>
              {/* <Center>
                <div>
                  <Poster src={event.img}></Poster>
                </div>
              </Center> */}
              <Right>
                <Video
                    width="560"
                    height="315"
                    src={event.ytlink}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></Video>
              <Heading>{event.title}</Heading>
                {event.desc}
                {event.dateofevent}
                {event.timeofevent}
                {event.venue}
                {event.reglink}

              <a href={event.reglink} target="_">
                <RegisterButton onClick="parent.href">
                  Register
                </RegisterButton>
              </a>
              </Right>
            </Slide>
          );
        })}
      </Wrapper>
      <Arrow dir="right" onClick={() => handleArrowClick("right")}></Arrow>
    </Container>
  );
}

export default Events;

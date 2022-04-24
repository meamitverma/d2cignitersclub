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
  align-items: center;
  margin-left: 55px;
`;
const Poster = styled.img`
  height: 80vh;
  object-fit: contain;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  row-gap: 10px;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  width: auto; 
  height: 80vh;
  /* margin-left: 10px; */
  margin-right: 110px;
`;
const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Video = styled.iframe`
  width: 30vw;
  height: 36vh;
  border: none;
`;
const Heading = styled.h1``;
const EventDesc = styled.p``;
const EventDate = styled.div``;
const EventSchedule = styled.div`
  display: flex;
  flex-direction:column;
  row-gap: 3px;
  /* align-items: center; */
  /* justify-content: space-between; */
  /* align-items: center; */

`;
const EventTime = styled.div``;
const EventVenue = styled.div``;
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
                <VideoContainer>
                  <Video
                      width="560"
                      height="315"
                      src={event.ytlink}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></Video>
                </VideoContainer>
                
                <Heading>{event.title}</Heading>
                <EventDesc>{event.desc}</EventDesc>
                
                <EventSchedule>
                 
                  <EventDate>
                    <img src="https://img.icons8.com/pastel-glyph/344/calendar.png" height={12} />
                    {event.dateofevent}
                  </EventDate>
                  <EventTime>
                    <img src="https://img.icons8.com/pastel-glyph/344/clock--v1.png" height={15} />
                    {event.timeofevent}
                  </EventTime>
                  <EventVenue>
                    <img src="https://img.icons8.com/ios/344/marker--v1.png" height={15} />  
                    {event.venue}
                  </EventVenue>   
                </EventSchedule>

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

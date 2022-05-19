import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Member from "../components/Member";
import { TeamList } from "../data";
import { members } from "../data";
import Footer from "./Footer";

const Container = styled.div`
  /* display: block; */
  margin-top: 37px;
  margin-bottom: 10px;
  height: 45em;
  row-gap: 10px;

  @media screen and (max-width: 700px) {
    height: auto;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* flex-direction: column; */
  
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;
const Lead = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #222222;
  color: white;
  border-right: 1px solid #737373;
  row-gap: 27px;
  /* border-radius: 5px; */

  @media screen and (max-width:700px) {
    padding: 27px 0px;
  }
`;
const President = styled.div`
  display: flex;
`;
const VicePresident = styled.div`
  display: flex;
  column-gap: 47px;
`;

const Core = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background-color: #131313;
  color: white;
  row-gap: 27px;
  position: relative;
  transition: 0.3s all ease;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    /* height: 250px; */
    /* overflow: auto; */
  }
`;

const Arrow = styled.div`
  width: 40px;
  height: 40px;
  /* background-color: #000000; */
  background-color: #77777718;
  background-image: url(https://img.icons8.com/external-becris-lineal-becris/344/ffffff/external-left-arrow-mintab-for-ios-becris-lineal-becris.png);
  /* background-image: url(https://img.icons8.com/external-becris-lineal-becris/344/0/external-left-arrow-mintab-for-ios-becris-lineal-becris.png); */
  background-repeat: no-repeat;
  background-position: 30% center;
  transform: scaleX(${(props) => props.dir === "right" && -1});
  background-size: 55%;
  border-radius: 50%;
  border: 1px solid #ffffff;
  /* box-shadow: 0px 0px 2px #000000; */
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

  &:hover {
    /* background-color: #000000; */
    border: none;
    background-color: #2194ff;
    background-image: url(https://img.icons8.com/external-becris-lineal-becris/344/0/external-left-arrow-mintab-for-ios-becris-lineal-becris.png);
    /* background-image: url(https://img.icons8.com/external-becris-lineal-becris/344/ffffff/external-left-arrow-mintab-for-ios-becris-lineal-becris.png); */
  }
`;

function Team() {
  const [teamIndex, setIndex] = useState(0);
  const handleArrowClick = (direction) => {
    // setIndex(
    //   teamIndex < TeamList.length - 1 ? teamIndex + 1 : 0
    // );

    if (direction === "left") {
      setIndex(
        // slideIndex > 0 ? slideIndex - 1 : upcomingEvents.length - 1
        teamIndex > 0 ? teamIndex - 1 : TeamList.length - 1
      );
    } else {
      setIndex(teamIndex < TeamList.length - 1 ? teamIndex + 1 : 0);
    }

    // console.log(teamIndex);
  };

  //hits handleArrowCLick() function every few sec
  // const MINUTE_MS = 1000;
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex(teamIndex+1)
  //   }, MINUTE_MS);

  //   return () => clearInterval(interval);
  // }, [])

  // console.log(slideIndex)

  return (
    <Container id="team">
      {/* <p style={{fontSize:"xx-large"}}>Meet the Team</p> */}
      <Wrapper>
        {/* <h1>Meet the Team</h1> */}
        <Lead>
          {/* //ASSUMED!!!
                0 -> President 
                1 -> Vice President - male
                2 -> Vice Presdent - female
              */}

          <President>
            <Member
              profile={members[0].profile}
              position={members[0].position}
              name={members[0].name}
              link_insta={members[0].instagram}
              link_linkedin={members[0].linkedin}
              link_github={members[0].github}
            />
          </President>

          <VicePresident>
            <Member
              profile={members[1].profile}
              position={members[1].position}
              name={members[1].name}
              link_insta={members[1].instagram}
              link_linkedin={members[1].linkedin}
              link_github={members[1].github}
            />
            <Member
              profile={members[2].profile}
              position={members[2].position}
              name={members[2].name}
              link_insta={members[2].instagram}
              link_linkedin={members[2].linkedin}
              link_github={members[2].github}
            />
          </VicePresident>
        </Lead>

        <Core>
          <Arrow dir="left" onClick={() => handleArrowClick("left")}></Arrow>
          {TeamList[teamIndex]}
          <Arrow dir="right" onClick={() => handleArrowClick("right")}></Arrow>
        </Core>
        {/* <span><Footer/></span> */}
      </Wrapper>
    </Container>
  );
}

export default Team;

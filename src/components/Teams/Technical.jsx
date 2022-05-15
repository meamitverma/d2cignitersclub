import React from "react";
import Member from "../Member";
import { members } from "../../data";
import styled from "styled-components";

const TECHNICAL_LEAD_ID = "TL";
const TECHNICAL_WEBMEMBER_ID = "TWM";
const TECHNICAL_DATAMEMBER_ID = "TDSM";
const TECHNICAL_CLOUDMEMBER_ID = "TCM";

const Teams = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 17px;
  align-items: center;
  justify-content: center;
`;
const Heading = styled.div`
  @media screen and (max-width:700px){
    margin-top: 11px;
  }
`;
const Body = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width:700px){
    flex-direction: column;
  }

`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-left: 87px;

  @media screen and (max-width:700px){
    /* margin: 7px 17px; */
    margin: 7px 17px;
    text-align: center;
    color: #dedede;
  }

`;
const Desc = styled.p``;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 17px;
  flex: 2;
  margin-right: 67px;

  @media screen and (max-width:700px) {
    margin: 7px 35px;
  }

`;
const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 27px;
  justify-content: center;
`;
const LeadMember = styled.div`
  display: flex;
  column-gap: 37px;
`;
const TeamMember = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  row-gap: 7px;
  justify-content: center;
  column-gap: 47px;
`;

function Technical() {
  return (
    <Teams>
      <Heading>
        <h1 style={{ userSelect: "none" }}>Technical Team</h1>
      </Heading>

      <Body>
        <Left>
          <Desc>
            <p>
              Technology like art, is a soaring exercise of human innovation,
            </p>
            <br></br>
            <p>
              Along with our self – motivated, meticulous members, who are
              assiduous in creation.
            </p>
            <br></br>
            <p>
              Introducing the very talented technical team with a motivated and
              passionate </p>
              <br></br>
              <b>Sankalp Swarup, having an outstanding problem-solving
              skill as the tech lead for the Tenure 2022-23.</b>
          </Desc>
        </Left>

        <Right>
          {/* <Head>
            <LeadMember>
              {members.map((member) => {
                if (member.id === TECHNICAL_LEAD_ID)
                  return (
                    <Member
                      profile={member.profile}
                      position={member.position}
                      name={member.name}
                      link_insta={member.instagram}
                      link_linkedin={member.linkedin}
                      link_github={member.github}
                    />
                  );
              })}
            </LeadMember>
          </Head> */}
          <TeamMember>
            {members.map((member) => {
              if (
                member.id === TECHNICAL_WEBMEMBER_ID ||
                member.id === TECHNICAL_DATAMEMBER_ID ||
                member.id === TECHNICAL_CLOUDMEMBER_ID ||
                member.id === TECHNICAL_LEAD_ID
              )
                return (
                  <Member
                    profile={member.profile}
                    position={member.position}
                    name={member.name}
                    link_insta={member.instagram}
                    link_linkedin={member.linkedin}
                    link_github={member.github}
                  />
                );
            })}
          </TeamMember>
        </Right>
      </Body>
    </Teams>
  );
}
export default Technical;

import React from "react";
import Member from "../Member";
import { members } from "../../data";
import styled from "styled-components";

const SOCIAL_LEAD_ID = "SML";
const SOCIAL_MEMBER_ID = "SMM";

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

function SocialMedia() {
  return (
    <Teams>
      <Heading>
        <h1 style={{ userSelect: "none" }}>Social Media Team</h1>
      </Heading>

      <Body>
        <Left>
          <Desc>
            <p>
              The key to engaging and building a community to sustain
              relationships,
            </p>
            <br></br>
            <p>Carrying a humble and polite attitude towards workmanship.</p>
            <br></br>
            <p>
              Presenting before you our social media team for the Tenure 2022-23
              with</p>
              <br></br>
              <b>Diksha Bhambri, an extremely influential and personable lead
              and
              <br></br>
              M SHRADDHA, a self-aware and authentic co-lead.</b>
          </Desc>
        </Left>

        <Right>
          <Head>
            <LeadMember>
              {members.map((member) => {
                if (member.id === SOCIAL_LEAD_ID)
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
          </Head>
          <TeamMember>
            {members.map((member) => {
              if (member.id === SOCIAL_MEMBER_ID)
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

export default SocialMedia;

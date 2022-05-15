import React from "react";
import Member from "../Member";
import { members } from "../../data";
import styled from "styled-components";

const CONTENT_LEAD_ID = "CL";
const CONTENT_MEMBER_ID = "CM";

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

function Content() {
  return (
    <Teams>
      <Heading>
        <h1 style={{ userSelect: "none" }}>Content Team</h1>
      </Heading>

      <Body>
        <Left>
          <Desc>
            <p>The portal to an innovative vision through word,</p>
            <br></br>
            <p>As pen is mightier than a sword.</p>
            <br></br>
            <p>
              Captivating creative content by our resourceful, witty and
              talented members, we hereby present the content team for the
              Tenure 2022-23 with an ethical-minded lead,</p> 
              <br></br>
              <b>Deepika Shesh
              Srivastava, possessing vivid thoughtfulness and
               <br></br>
               Jayshree Karmakar,
              as the driven and aspiring co-lead.
              </b>
          </Desc>
        </Left>

        <Right>
          <Head>
            <LeadMember>
              {members.map((member) => {
                if (member.id === CONTENT_LEAD_ID)
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
              if (member.id === CONTENT_MEMBER_ID)
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
export default Content;

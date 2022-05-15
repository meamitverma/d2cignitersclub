import React from "react";
import Member from "../Member";
import { members } from "../../data";
import styled from "styled-components";

const EVENT_LEAD_ID = "EL";
const EVENT_MEMBER_ID = "EM";

const Teams = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 17px;
  align-items: center;
  justify-content: center;
`;
const Heading = styled.div``;
const Body = styled.div`
  display: flex;
  flex-direction: row;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-left: 87px;
`;
const Desc = styled.p``;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 17px;
  flex: 2;
  margin-right: 67px;
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

function EventMangement() {
  return (
    <Teams>
      <Heading>
        <h1 style={{ userSelect: "none" }}>Event Management Team</h1>
      </Heading>

      <Body>
        <Left>
          <Desc>
            <p>The ones we can rely on for planning and organising events to
            perfection, By creating a zealous atmosphere with trust - building
            inception.</p>
            <br></br>
            <p>Introducing our enthusiastic event managers for the
            Tenure 2022-23 with a confident and excellent cross-culture
            communicator,</p>
            <br></br>
            <b>Tulip Aggarwal as the lead, followed by a very
            versatile Vedanshu Sharma as the co-lead.
            </b>
          </Desc>
        </Left>

        <Right>
          <Head>
            <LeadMember>
              {members.map((member) => {
                if (member.id === EVENT_LEAD_ID)
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
              if (member.id === EVENT_MEMBER_ID)
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

export default EventMangement;

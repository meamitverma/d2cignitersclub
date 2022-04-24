import React from 'react'
import Member from '../Member';
import { members } from '../../data';
import styled from 'styled-components'

const SOCIAL_LEAD_ID = "SML";
const SOCIAL_MEMBER_ID = "SMM";

const Teams = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 27px;
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
      <Head>
        <h1 style={{userSelect:"none"}}>Social Media Team</h1>
        <LeadMember>
        {
            members.map((member) => {
              if(member.id === (SOCIAL_LEAD_ID))
                  return <Member
                      profile={member.profile}
                      position={member.position}
                      name={member.name}
                      link_insta={member.instagram}
                      link_linkedin={member.linkedin}
                      link_github={member.github}
              />
            })
          }
        </LeadMember>
      </Head>
        <TeamMember>
        {
            members.map((member) => {
              if(member.id === (SOCIAL_MEMBER_ID))
                  return <Member
                      profile={member.profile}
                      position={member.position}
                      name={member.name}
                      link_insta={member.instagram}
                      link_linkedin={member.linkedin}
                      link_github={member.github}
              />
            })
          }   
      </TeamMember>
    </Teams>
  )
}

export default SocialMedia
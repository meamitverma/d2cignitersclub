import React from "react";
import styled from "styled-components";
import SocialLink from "./SocialLink";


const default_profile = "https://cdn-icons-png.flaticon.com/512/149/149071.png";

//Icons
const icon_insta = 'https://img.icons8.com/ios-filled/344/ffffff/instagram-new--v1.png';
const icon_linkedin = 'https://img.icons8.com/ios-filled/344/ffffff/linkedin-circled.png';
const icon_github = 'https://img.icons8.com/glyph-neue/344/ffffff/github.png';

//Links
const link_insta = "https://www.instagram.com/d2cignitersclub_vitb/";
const link_linkedin = "https://www.linkedin.com/company/d2cignitersclub-vitbhopal/mycompany/";
const link_github = "https://www.linkedin.com/company/d2cignitersclub-vitbhopal/mycompany/";



const Container = styled.div`
  text-align: center;
  `;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
`;
const ProfileContainer = styled.div`
  width: 125px;
  height: 125px;
  border-radius: 50%;
  /* background-color: antiquewhite; */
  position: relative;
`;
const Overlay = styled.div`

  position: absolute;
  display: flex;
  align-items: center;

  /* flex-wrap: wrap; */
  justify-content: center;
  border-radius: 50%;
  top: 0;
  left: 0;
  height: inherit;
  width: inherit;
  background: linear-gradient(#ffffff00, #131313);
  cursor: pointer;
  opacity: 0;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const UserImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
const Position = styled.div`
  font-size: small;
  color: darkgray;
`;
const Name = styled.div`
  font-size: medium;
`;

function Member(props) {
  return (
    <Container>
      <Wrapper>
        <ProfileContainer>
          <UserImage src={props.profile || default_profile}></UserImage>
          <Overlay>
            {/* Instagram */}

            {props.link_insta && <SocialLink
              size='34px'
              icon={icon_insta}
              link={props.link_insta}
            />}

            {/* LinkdeIn */}
            {props.link_linkedin &&<SocialLink
              size='34px'
              icon={icon_linkedin}
              link={props.link_linkedin}
            />}

            {/* Github */}
            {props.link_github &&<SocialLink
              size='34px'
              icon={icon_github}
              link={props.link_gituhb}
            />}
          </Overlay>
        </ProfileContainer>
        <Name>{props.name}</Name>
        <Position>{props.position}</Position>
      </Wrapper>
    </Container>
  );
}

export default Member;

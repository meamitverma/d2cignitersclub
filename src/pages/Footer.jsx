import React, { useState } from 'react'
import styled from 'styled-components'

import d2clogo from '../assets/images/logo/ignitersclub_logo.jpg'
import SocialLink from '../components/SocialLink';

// Icons
const icon_insta = 'https://img.icons8.com/ios-filled/344/ffffff/instagram-new--v1.png';
const icon_linkedin = 'https://img.icons8.com/ios-filled/344/ffffff/linkedin-circled.png';
const icon_github = 'https://img.icons8.com/glyph-neue/344/ffffff/github.png';

//Links
const link_insta = "https://www.instagram.com/d2cignitersclub_vitb/";
const link_linkedin = "https://www.linkedin.com/company/d2cignitersclub-vitbhopal/mycompany/";
const link_github = "https://www.linkedin.com/company/d2cignitersclub-vitbhopal/mycompany/";

const Container = styled.div`
  /* width: 100% ; */
  /* display: block; */
  padding: 40px;
  padding-bottom: 10px;
  background-color: #191919;
  color: white;
  
  @media screen and (max-width: 700px) {
    /* margin-top: 100vh; */
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  @media screen and (max-width: 700px){
    flex-direction: column;
    align-items: center;
    text-align: center;
    row-gap: 47px;
  }
`;

const Col1 = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 150px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #ececec;
  /* background-color: #e0e0e0; */
  /* border-radius: 25px; */
  /* position: relative; */

  @media screen and (max-width:700px){
    margin: 0px;
  }
`;
const LogoTitle = styled.h2`
  /* position: absolute; */
  /* margin-top: 15px; */
  user-select: none;
  letter-spacing: 2px;
  white-space: nowrap;
`;

const LogoContainer = styled.div`
  height: 100%;
  /* background-color: red; */
`;
const Logo = styled.img`
  margin-bottom: 15px;
  border-radius: 50%;
  width: 35%;
`;

const Col2 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const Col3 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const Col4 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  /* align-items: c; */
`;
const SocialLinkContainer = styled.div`
  display: flex;
  column-gap: 10px;
  flex-wrap: wrap;

  @media screen and (max-width:700px) {
    justify-content: center;
  }

`;
const ContactContainer = styled.div`
  display: flex;
  column-gap: 7px;
`;
const ContactInputFields = styled.div`
  
`;
const TextField = styled.input`
  height: 34px;
  padding-left: 10px;
  border-radius: 50px;
`;
const ContactButton = styled.a`
  display: flex;
  font-size:13px;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-color: #191919;
  color: #ffffff;
  border-radius: 50px;
  border: 1px solid #616161;
  padding: 11px;

  &:hover{
    background-color: #1975ca;
  }
`;

const List = styled.div`
  font-size: 15px;
  margin-top:10px ;
  list-style-type  :none ;
`;
const ListItems = styled.li`
  margin-top: 5px;
`;
const Link = styled.a`
  text-decoration: none;
  color: white;
`;


const CopyrightContainer = styled.div`
  margin-top: 7vw;
  user-select: none;
  /* background-color: red; */
  /* position: relative; */
`;
const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 7px;
  font-size: small;
  color: #b6b6b6;
`;

function Footer() {

  const [message,setMessage] = useState('Hello!');

  const handleOnKeyPress = ()=>{
    setMessage(document.getElementById('messageTextField').value);
  }

  return (
    <Container>
      <Wrapper>
        
        <Col1>
          <Logo src={d2clogo}></Logo>
          <LogoTitle>D2C Igniters Club</LogoTitle>
          
        </Col1>
        
        <Col2>
          <h4>Explore</h4>
          <List>
            <ListItems>
              <Link href='#'>Home</Link>
            </ListItems>
            <ListItems>
              <Link href='#events'>Events</Link>
            </ListItems>
            <ListItems>
              <Link href='#blog'>Blogs</Link>
            </ListItems>
            <ListItems>
              <Link href='#team'>Team</Link>
            </ListItems>
          </List>
        </Col2>

        <Col3>
          <h4>Visit</h4>
          <p style={{marginTop:"10px",fontSize:"15px",color:"lightgray"}}>
            VIT Bhopal University
                <br></br>
            Bhopal-Indore Highway
                <br></br>
            Kothri Kalan, Sehore
                <br></br> 
            Madhya Pradesh - 466114
          </p>
        </Col3>
        
        <Col4>
          <h4>Follow us</h4>
          <SocialLinkContainer>
            <SocialLink icon={icon_insta} link={link_insta}/>
            <SocialLink icon={icon_linkedin} link={link_linkedin} target='_'/>
            <SocialLink icon={icon_github} link={link_github} target='_'/>
          </SocialLinkContainer>

          <br></br>
          <h4>Contact</h4>
          <ContactContainer>
            <ContactInputFields>
                {/* <TextField type="text" palceholder="Name"></TextField> */}
                <TextField type="text" onKeyUp={handleOnKeyPress} id='messageTextField' name="Your Message" placeholder="Write your message"></TextField>
            </ContactInputFields>

            <ContactButton href={`mailto:vitb.d2cigniters@gmail.com?subject=Feedback from website&body=${message}`} target="_">
                      <p>Submit</p>
            </ContactButton>

          </ContactContainer>

        </Col4>
      
      </Wrapper>
      <CopyrightContainer>
          <Copyright>
            <p>&#169; 2022 D2C Igniter's VIT Bhopal. All Rights reserved.</p>
            {/* <br></br> */}
            <p style={{fontSize:"smaller"}}>Developed by <a href="https://www.linkedin.com/in/meamitverma/" target="_" style={{textDecoration:"none",color:"inherit",fontWeight:"450"}}>Amit Verma</a></p>
            {/* <p style={{position:"absolute",bottom:0,right:0,textAlign:"center",fontSize:"11px"}}>Developed by <br></br> Amit Kumar Verma</p> */}
          </Copyright>
      </CopyrightContainer>
    </Container>
  )
}

export default Footer;
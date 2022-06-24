import React from 'react'
import styled from 'styled-components'
import { social_links } from '../data';

const Container =  styled.div`
    display: flex;
    flex-direction: column;
    height: 300px;
    margin: 17px 0px;
    font-family: 'Poppins', sans-serif;
    font-size: small;
    padding: 5% 7%;
    text-align: center;
    

    @media screen and (max-width:700px){
        height: 120px;
        font-size: xx-small;
    }

`;

const Title = styled.h1`
    margin-bottom: 5rem;

    @media screen and (max-width: 700px) {
        margin-bottom: 1.5rem;
    }
`;

const SubTitle = styled.h3`
    color: #313131;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`;
const LogoContainer = styled.div`
    
`;
const Logo = styled.img`
    height: 125px;
    object-fit: contain;
    transition: 0.3s all ease;
    cursor: pointer;
    /* margin-bottom: rem; */

    &:hover{
        transform: scale(0.95);
    }

    @media screen and (max-width: 700px) {
        height: 42px;
    }
`;
const Link = styled.a`
    text-decoration: none;
    color: inherit;
    transition: 0.1s all ease;

    &:hover{

        transform: scale(1.1);
    }
`;

function Toconnect() {
  return (
    <Container id="toconnect">
        <Title>Our Social Platforms</Title>
        <Wrapper>
            <LogoContainer>
                <a href={social_links.discord.link} target='_'>
                    <Logo src="https://cdn-icons-png.flaticon.com/512/5968/5968756.png"></Logo>
                </a>
                <SubTitle>Discord</SubTitle>
            </LogoContainer>
            <LogoContainer>
                <a href={social_links.instagram.link} target='_'>
                    <Logo src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"></Logo>
                </a>
                <SubTitle>Instagram</SubTitle>
            </LogoContainer>
            <LogoContainer>
                <a href={social_links.linkedin.link} target='_'>
                    <Logo src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1655798509~hmac=6f29856cf7a9bef5a039dcae9cda2b84"></Logo>
                </a>
                <SubTitle>LinkedIn</SubTitle>
            </LogoContainer>
            <LogoContainer>
                <a href={social_links.facebook.link} target='_'>
                    <Logo src="https://cdn-icons-png.flaticon.com/512/733/733547.png"></Logo>
                </a>
                <SubTitle>Facebook</SubTitle>
            </LogoContainer>
            <LogoContainer>
                <a href={social_links.youtube.link} target='_'>
                    <Logo src="https://cdn-icons-png.flaticon.com/512/174/174883.png"></Logo>
                </a>
                <SubTitle>YouTube</SubTitle>
            </LogoContainer>
        </Wrapper>
    </Container>
  )
}

export default Toconnect
import React from 'react'
import styled from 'styled-components'

const Container =  styled.div`
    display: flex;
    height: 300px;
    margin: 17px 0px;
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: small;
    

    @media screen and (max-width:700px){
        height: 120px;
        font-size: xx-small;
    }

`;
const Left =  styled.div`
    flex:1;
    background-color: whitesmoke;
    color: #5865f2;
`;
const Middle =  styled.div`
    flex: 1;
    color: whitesmoke;
    background-color: #FFA1A1;
`;
const Right =  styled.div`
    flex: 1;
    color: white;
    background-color: #7FB5FF;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: center;

`;
const LogoContainer = styled.div`
    
`;
const Logo = styled.img`
    height: 125px;
    object-fit: contain;
    transition: 0.3s all ease;

    &:hover{
        transform: scale(0.85);
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
        <Left>
            <Wrapper>
                <LogoContainer>
                    <Logo src="https://cdn-icons-png.flaticon.com/512/5968/5968756.png"></Logo>
                </LogoContainer>
                <Link href='https://discord.com/' target="_">Connect {'>'} </Link>
            </Wrapper>  
        </Left>
        <Middle>
            <Wrapper>
                <LogoContainer>
                    <Logo src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"></Logo>
                </LogoContainer>
                <Link href='https://www.instagram.com/d2cignitersclub_vitb/' target="_">Connect {'>'} </Link>
            </Wrapper>  
        </Middle>
        <Right>
            <Wrapper>
                <LogoContainer>
                    <Logo src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1652962791~hmac=ea591261fa2d9ca3f4505ea6928ce3af"></Logo>
                </LogoContainer>
                <Link href='https://www.linkedin.com/company/d2cignitersclub-vitbhopal/mycompany/' target="_">Connect {'>'} </Link>
            </Wrapper>  
        </Right>
    </Container>
  )
}

export default Toconnect
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
   
    width: ${props=> props.size || '45px'};
    height: ${props=> props.size || '45px'};
    border-radius: 50%;
    border: 1px solid #616161;
    background-color: #191919;
    /* background-color: #ff0000; */
    /* margin: 10px 10px 0px 0px; */
    transition: all 0.2s ease;
    cursor: pointer;
    
    &:hover{
        background-color: #1975ca;
    }
`;
const Wrapper = styled.a`
    display: flex ;
    align-items: center;
    justify-content: center;
    height:100%;
;`
const Icon = styled.img`
    height: 55%;
`;

function SocialLink(props) {

  return (
    <Container size={props.size}>
        <Wrapper href={props.link} target='_'>
            <Icon src={props.icon}></Icon>
        </Wrapper>
    </Container>
  )
}

export default SocialLink
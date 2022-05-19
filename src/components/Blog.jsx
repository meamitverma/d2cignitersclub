import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    /* height:137px; */
    border-bottom: 2px solid lightgrey;
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 7px;
    transition: 0.3s all ease;
    padding: 7px 0px ;

    &:hover{
        background-color: #1974ca44;
    }
    /* color: #292929 */
`;

const Top = styled.div`
    color: #292929;
    padding-left: 13px;
`;
const Author = styled.h5`
    font-weight: normal;
`;

const Body = styled.p`
    color:#292929;    
    padding-left: 13px;
`;
const Title = styled.h2`
    font-size: 22px;
    color:"#292929";
`;
const Description = styled.p`
    font-size: 16px;
    color: #757575;
`;

const Bottom = styled.div`
    display:flex;
    padding-left: 13px;
    column-gap: 5px;
`;
const Date = styled.p`
    font-size: 13px;
    color:#757575;
`;
const ReadTime = styled.p`
    font-size: 13px;
    color:#757575;
`;
const Category = styled.p`
    font-size: 13px;
    padding: 2px 8px;
    background-color: #f2f2f2;
    border-radius: 25px;
    color:#757575;
`;

function Blog(props) {
  return (
    <Container>
        <Top>
            <Author>{props.author}</Author>
        </Top>

        <Body>
            <Title>{props.title}</Title>
            <Description>{props.desc}</Description>
        </Body>

        <Bottom>
            <Date>{props.date}</Date>
            <ReadTime>{props.read_time}</ReadTime>
            <Category>{props.category}</Category>
        </Bottom>
        
    </Container>
  )
}

export default Blog
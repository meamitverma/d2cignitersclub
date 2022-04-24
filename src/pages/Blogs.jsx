import React from 'react'
import styled from 'styled-components'
import { mediumBlogs } from '../data';

//Styling
const borderRadius = "21px"

const Container = styled.div`
  margin:35px 55px;
`;
const Wrapper = styled.div`
  height: 70vh;
  /* box-shadow: 1px 1px 10px #fff; */
  border-radius: ${borderRadius};   ///border radius for whole wrapper
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px;
  align-items: center;
  justify-content: center;
  background-color: #131313;
  border-radius: ${borderRadius} 0px 0px  ${borderRadius};
  position: relative;
`;
const Heading = styled.h1`
  color:gold;
  align-self:start;
  position: absolute;
  top: 15px;
  left: 50px;
  font-size: 3rem;
  letter-spacing: 6px;
`;
const Video = styled.iframe`
  /* width: 30vw;
  height: 36vh; */
  border: none;
`;
const Right = styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FEC260;
  border-radius: 0px  ${borderRadius} ${borderRadius} 0px;
`;
const BlogContainer = styled.div`
  height: 75%;
  width: 75%;
  overflow: auto;
  background-color: whitesmoke;
`;


function Blogs() {
  return (
    <Container id='blog'>
      
      <Wrapper>
        <Left>
          <Heading>Blogs</Heading>
          <Video
            width="560"
            height="315"
            src={"https://youtube.com/embed/K4TOrB7at0Y"}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></Video>
        </Left>
        <Right>
          {/* {mediumBlogs.map(())} */}
          <BlogContainer>
            <ul>
              <li>Sample</li>
              <li>Sample</li>
              <li>Sample</li>
              <li>Sample</li>
              <li>Sample</li>
              <li>Sample</li>
              <li>Sample</li>
              <li>Sample</li>
              <li>Sample</li>
              <li>Sample</li>
              <li>Sample</li>
              <li>Sample</li>
              <li>Sample</li>
            </ul>
          </BlogContainer>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Blogs;
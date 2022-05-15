import React from "react";
import styled from "styled-components";
import Blog from "../components/Blog";
import { mediumBlogs } from "../data";

//Styling
const borderRadius = "21px";

const Container = styled.div`
  margin: 35px 55px;

  @media screen and (max-width:700px){
    margin: 35px 7px;
  }
`;
const Wrapper = styled.div`
  height: 70vh;
  /* box-shadow: 1px 1px 10px #fff; */
  border-radius: ${borderRadius}; ///border radius for whole wrapper
  display: flex;

  @media screen and (max-width:700px) {
    flex-direction: column;
    row-gap: 3px;
  }

`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px;
  align-items: center;
  justify-content: center;
  background-color: #131313;
  border-radius: ${borderRadius} 0px 0px ${borderRadius};
  position: relative;

  @media screen and (max-width: 700px) {
    border-radius: ${borderRadius};
  }

`;
const Heading = styled.h1`
  color: gold;
  align-self: start;
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

  @media screen and (max-width: 700px) {
    aspect-ratio: 16/9;
    height: 100%;
    width: 100%;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: whitesmoke;
  border-radius: 0px ${borderRadius} ${borderRadius} 0px;
  border: 2px solid lightgrey;
  border-left: none;

  @media screen and (max-width:700px) {
    border-radius: ${borderRadius};
    height: 375px;
  }
`;
const MediumLogoContainer = styled.div`
  display: flex;
  width: 100%;

  

`;
const MediumLogo = styled.img`
  height: 124px;
  justify-self: flex-start;

  border-radius : ${borderRadius}; //testing

`;
const BlogContainer = styled.ul`
  /* scrollbar-color: dark; */
  list-style-type: none;
  padding-left: 0;
  border-radius: 0px 0px ${borderRadius} 0px;
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: #ffffff;

  @media screen and (max-width: 700px) {
    /* border-radius:${borderRadius}; */
  }
`;
const BlogItemContainer = styled.li``;
const BlogItem = styled.a`
  text-decoration: none;
  /* color: inherit; */
`;

function Blogs() {
  return (
    <Container id="blog">
      <Wrapper>
        <Left>
          {/* <Heading>Blogs</Heading> */}
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
          <MediumLogoContainer>
            <MediumLogo src="https://miro.medium.com/max/1200/1*jfdwtvU6V6g99q3G7gq7dQ.png"></MediumLogo>
          </MediumLogoContainer>

          <hr width="100%" color="lightgrey"></hr>

          <BlogContainer>
            {
              mediumBlogs.map((blogitem) =>{
                return <BlogItemContainer>
                <BlogItem href={blogitem.link} target="_">
                  <Blog
                    author={blogitem.author}
                    title={blogitem.title}
                    desc={blogitem.short_desc}
                    date={blogitem.date_posted}
                    read_time={blogitem.reading_time}
                    category={blogitem.category}
                  />
                </BlogItem>
              </BlogItemContainer>
              })
            }

          </BlogContainer>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Blogs;

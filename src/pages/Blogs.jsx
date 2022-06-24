import React from "react";
import { useState , useEffect} from "react";
import styled from "styled-components";
import Blog from "../components/Blog";
// import { mediumBlogs } from "../data";
// import Toconnect from "./Toconnect";
import axios from '../axios'

//Styling
const borderRadius = "21px";

const Container = styled.div`
  margin: 35px 55px;
  
  @media screen and (max-width: 700px) {
    /* height: 88em; */
    margin: 35px 0px;
  }
`;
const Wrapper = styled.div`
  height: 80vh;
  /* box-shadow: 1px 1px 10px #fff; */
  border-radius: ${borderRadius}; ///border radius for whole wrapper
  display: flex;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    /* row-gap: 3px; */
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: row;
  /* padding: 15px; */
  column-gap: 7px;
  align-items: center;
  justify-content: center;
  /* background-color: #131313; */
  background-color: whitesmoke;
  border-radius: ${borderRadius} 0px 0px ${borderRadius};
  position: relative;

  @media screen and (max-width: 700px) {
    border-radius: 0px;
    flex: none;
    row-gap: 7px;
    flex-direction: column;
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
  /* display: none; */
  aspect-ratio: 9/16;
  height: 100%;

  @media screen and (max-width: 700px) {
    aspect-ratio: 9/16;
    height: 450px;
    width: auto;
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
  /* border: 2px solid lightgrey; */
  border-left: none;

  @media screen and (max-width: 700px) {
    border-radius: 0px;
    height: 475px;
    flex: none;
  }
`;
const MediumLogoContainer = styled.div`
  display: flex;
  width: 100%;
`;
const MediumLogo = styled.img`
  height: 124px;
  justify-self: flex-start;

  /* border-radius: ${borderRadius}; //testing */
`;
const BlogContainer = styled.ul`
  /* scrollbar-color: dark; */
  list-style-type: none;
  padding-left: 0;
  border-radius: ${borderRadius};
  height: 100%;
  overflow: auto;
  /* padding: 7px 0px; */
  background-color: #ffffff;
  margin: 10px;
  box-shadow: 0px 0px 12px rgba(0,0,0,0.1);
`;
const BlogItemContainer = styled.li`
  /* padding: 7px 0px; */
`;
const BlogItem = styled.a`
  text-decoration: none;
  /* color: inherit; */
`;

function Blogs() {

  const[mediumBlogs, setMediumBlogs] = useState([])

  useEffect(() => {
    async function fetchBlogs() {
      const req = await axios.get('/d2cignitersclub/blogs');
      setMediumBlogs(req.data.reverse());
    }
    fetchBlogs();
  },[])

  return (
    <Container id="blog">
      <Wrapper>
        <Left>

          <MediumLogoContainer>
            <MediumLogo src="https://miro.medium.com/max/1200/1*jfdwtvU6V6g99q3G7gq7dQ.png"></MediumLogo>
          </MediumLogoContainer>

          {/* <Heading>Blogs</Heading> */}
          {/* <Video
            // width="560"
            // height="315"
            src={"https://youtube.com/embed/ADXqHMgsLao"}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></Video> */}
          {/* <Video
            width="320"
            height="440"
            src="http://instagram.com/p/Cdmxc7pqMMQ/embed"
            frameborder="0"
          ></Video> */}
        </Left>
        <Right>
          {/* {mediumBlogs.map(())} */}
          {/* <MediumLogoContainer>
            <MediumLogo src="https://miro.medium.com/max/1200/1*jfdwtvU6V6g99q3G7gq7dQ.png"></MediumLogo>
          </MediumLogoContainer> */}

          {/* <hr width="100%" color="lightgrey"></hr> */}

          <BlogContainer>
            {mediumBlogs.map((blogitem) => {
              return (
                <BlogItemContainer>
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
              );
            })}
          </BlogContainer>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Blogs;

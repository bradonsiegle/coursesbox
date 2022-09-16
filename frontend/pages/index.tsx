import type { NextPage } from "next";
import Head from "next/head";
import styled from "@emotion/styled";

import { Course } from "@/components/Course";

const CoursesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2vw;
  margin: 2vh 1vw;
`;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CoursesBox</title>
        <meta name="description" content="IT courses for everyone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CoursesWrapper>
        {Array(4)
          .fill("")
          .map((_, i) => (
            <Course
              key={i}
              header="React"
              link="/hands-on-reactjs"
              imageProps={{
                width: 1368,
                height: 770,
                alt: "React",
                src: "/covers/hands-on_reactjs_cover.png",
              }}
            >
              <>
                <p>
                  React is the most popular library for building frontend web
                  applications. Step-by-step by diving into all the basics,
                </p>
                <ul>
                  <li>setup of the development environment</li>
                  <li>configuration of the React JS app</li>
                  <li>basic algorithms of Minesweeper</li>
                </ul>
              </>
            </Course>
          ))}
      </CoursesWrapper>
    </>
  );
};

export default Home;
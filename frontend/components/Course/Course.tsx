import { FC } from "react";
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";

import { Course as CourseType } from "@/types";

import { boxShadow, borderRadius } from "../styles";
import { StyledLink } from "@/components/StyledLink";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2vmin;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.font.regular};
  ${borderRadius};
  ${({ theme }) =>
    boxShadow(theme.components.shadow1, theme.components.shadow2)};
`;

const CourseLink = styled(StyledLink)`
  display: flex;
  justify-content: center;
  width: 90vw;
  @media (min-width: 900px) {
    width: 46vw;
  }
`;

const StyledHeader = styled.h3`
  text-align: center;
  font-family: "Playfair Display", serif;
`;

const StyledDate = styled.p`
  text-align: center;
  font-size: 0.8rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
`;

interface Props {
  children: React.ReactNode;
  /**Header string */
  header: string;
  /**Image props */
  imageProps: ImageProps;
  /**Link address */
  link: string;
}

export const Course: FC<Props> = ({ children, header, link, imageProps }) => (
  <Link href={link} passHref>
    <CourseLink>
      <Section>
        <StyledHeader>{header}</StyledHeader>
        <Image {...imageProps} alt={header} />
        {children}
      </Section>
    </CourseLink>
  </Link>
);

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 900px) {
    flex-wrap: nowrap;
  }
  justify-content: center;
  gap: 6vmin;
  margin: 2vh 2vw;
`;

const StyledContent = styled.div`
  padding: 0 4vmin;
  margin: 1rem 0;
`;

export const Courses: FC<{ courses: CourseType[]; strapi_url: string }> = ({
  courses,
  strapi_url,
}) => (
  <Wrapper>
    {courses?.map(
      ({
        id,
        attributes: {
          header,
          subtitle,
          publishedAt,
          cover: {
            data: {
              attributes: {
                formats: {
                  medium: { url, width, height },
                },
              },
            },
          },
        },
      }) => (
        <Course
          key={id}
          header={header}
          link={`/course/${id}`}
          imageProps={{
            width,
            height,
            alt: `Cover for ${header}`,
            src: `${strapi_url}${url}`,
            style: { borderRadius: "1rem" },
          }}
        >
          <StyledContent>{subtitle}</StyledContent>
          <time dateTime={publishedAt}>
            <StyledDate>{new Date(publishedAt).toDateString()}</StyledDate>
          </time>
        </Course>
      )
    )}
  </Wrapper>
);

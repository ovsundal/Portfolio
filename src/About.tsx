import React from "react";
import styled from "styled-components";

export const AboutSection: React.FC = () => {
    return (
        <AboutWrapper>
            <Image src={"https://via.placeholder.com/150"}  />
            <Gutter />
            <Introduction>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat.
            </Introduction>
            <GutterEnd />
        </AboutWrapper>
    );
};

const AboutWrapper = styled.section`
    background-color: beige;
    grid-column: 1 / 5;
    display: grid;
    align-items: center;
    grid-template-columns: 
    [Picture] 1fr
    [Gutter] 20%
    [Greet-text] 1fr
    [Gutter-end] 5%
    ;
`;

const Image = styled.img`
  grid-column: Picture;
  height: 50%;
  justify-self: right;
`;

const Gutter = styled.span`
  
`;

const GutterEnd = styled.span`
  grid-column: Gutter-end;
`;

const Introduction = styled.p`
  grid-column: Greet-text;
    justify-self: left;
    font-size: 2rem;
`;

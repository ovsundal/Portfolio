import React from "react";
import styled from "styled-components";

export const AboutSection: React.FC = () => {
    return (
        <AboutWrapper>
            <p>About</p>
        </AboutWrapper>
    );
};

const AboutWrapper = styled.section`
    background-color: #ff83d5;
    grid-column: 1 / 5;
`;

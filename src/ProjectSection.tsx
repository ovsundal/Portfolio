import React from "react";
import styled from "styled-components";

export const ProjectSection: React.FC = () => {
    return (
        <ProjectSectionWrapper>
            <p>Projects</p>
        </ProjectSectionWrapper>
    );
};

const ProjectSectionWrapper = styled.section`
    background-color: #ff7851;
    grid-column: 1 / 5;
`;

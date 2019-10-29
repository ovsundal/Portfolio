import React from "react";
import styled from "styled-components";

interface IProject {
    title: string,
    description: string
}

const projectList: IProject[] = [
    {
        title: 'project1',
        description: 'description1'
    },
    {
        title: 'project2',
        description: 'description2'
    },
    {
        title: 'project3',
        description: 'description3'
    },
    {
        title: 'project4',
        description: 'description4'
    }
];

export const ProjectSection: React.FC = () => {
    return (
        <ProjectSectionWrapper>
            <ProjectList>
                {projectList.map((project) =>
                    <li>
                        {Project(project)}
                    </li>
                )
                }
            </ProjectList>
        </ProjectSectionWrapper>
    );
};

function Project(project: IProject) {
    const {title, description} = project;

    return (
        <ProjectWrapper>
            <h1>{title}</h1>
            <p>{description}</p>
        </ProjectWrapper>
    )
}

const ProjectSectionWrapper = styled.section`
    background-color: #ff7851;
    grid-column: 1 / 5;
`;

const ProjectList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const ProjectWrapper = styled.div`

`;

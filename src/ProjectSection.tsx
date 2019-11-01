import React from "react";
import styled from "styled-components";
import {ProjectCard} from "./components/ProjectCard";

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
                {projectList.map(({description, title}) =>
                    <li>
                        <ProjectCard
                            title={title}
                            description={description}
                        />
                    </li>
                )
                }
            </ProjectList>
        </ProjectSectionWrapper>
    );
};

const ProjectSectionWrapper = styled.section`
    background-color: whitesmoke;
    grid-column: 1 / 5;
`;

const ProjectList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

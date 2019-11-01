import * as React from 'react'
import styled from "styled-components";
import { FaGithub } from 'react-icons/fa';

interface IProjectCardProps {
    title: string,
    description: string
}

export const ProjectCard: React.FC<IProjectCardProps> = ({title, description}) => {

    return(
        <ProjectCardWrapper>
            <ProjectTitle>{title}</ProjectTitle>
            <FaGithub />
            <p>{description}</p>
            <p><i>Visualization, D3</i></p>
        </ProjectCardWrapper>
    )
};

const ProjectTitle = styled.h2`
  padding: 1rem;
  border-bottom: 1px solid black;
`;

const ProjectCardWrapper = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  background-color: azure;
  
  width: 20rem;
  height: 25rem;
  margin: 2rem;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    cursor: pointer;
  }
`;

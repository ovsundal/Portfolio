import * as React from 'react'
import styled from "styled-components";

interface IProjectCardProps {
    title: string,
    description: string
}

export const ProjectCard: React.FC<IProjectCardProps> = ({title, description}) => {



    return(
        <ProjectCardWrapper>
            <h3>{title}</h3>
            <p>{description}</p>
        </ProjectCardWrapper>
    )
};

const ProjectCardWrapper = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  background-color: azure;
  
  width: 15rem;
  height: 25rem;
  margin: 2rem;
  
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    cursor: pointer;
  }
`;

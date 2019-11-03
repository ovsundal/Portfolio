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
            <HorizontalLine />
            <Image src={"https://via.placeholder.com/150"}  />
            <p>{description}</p>
            <p><i>Visualization, D3</i><FaGithub /></p>
        </ProjectCardWrapper>
    )
};


const ProjectTitle = styled.h2`
  grid-row: title;
  
  justify-self: stretch;
  margin: 0 auto;
`;

const HorizontalLine = styled.div`
  grid-row: line-divider;
  
  border-bottom: 1px solid black;
  width: 80%;
  margin: 0 auto;

`;

const Image = styled.img`
grid-row: image;
  width: 100%;
`;

const ProjectCardWrapper = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  background-color: azure;
  
  width: 20rem;
  height: 25rem;
  margin: 2rem;
  
  display: grid;
  grid-template-rows: [title] 2rem [line-divider] 1rem [image] 1fr [description] 1fr [keywords] 1fr;
  
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    cursor: pointer;
  }
`;

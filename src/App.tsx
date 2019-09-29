import React from 'react';
import './App.css';
import styled from "styled-components";
import {NavBar} from "./NavBar";
import {AboutSection} from "./About";
import {ProjectSection} from "./ProjectSection";
import {ContactSection} from "./ContactSection";

const App: React.FC = () => {
  return (
    <AppWrapper>
        <NavBar />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 25vh);
  
`;

export default App;

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
  grid-template-rows: 5rem 25rem repeat(2, 25vh);
  grid-template-columns: 1fr;
  
  *,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
`;

export default App;

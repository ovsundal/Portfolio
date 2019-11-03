import React from 'react';
import styled, {createGlobalStyle} from "styled-components";
import {NavBar} from "./NavBar";
import {AboutSection} from "./About";
import {ProjectSection} from "./ProjectSection";
import {ContactSection} from "./ContactSection";

const App: React.FC = () => {
    return (
        <AppWrapper>
            <GlobalStyle />
            <NavBar />
            <AboutSection />
            <ProjectSection />
            <ContactSection />
        </AppWrapper>
    );
};

const AppWrapper = styled.div`
  display: grid;
  grid-template-rows: 7vh 40vh 80vh 25vh;
  grid-template-columns: 1fr;
`;

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
} 
`;

export default App;

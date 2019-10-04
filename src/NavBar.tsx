import React from "react";
import styled from "styled-components";

export const NavBar: React.FC = () => {
    return (
        <NavBarWrapper>
            <Logo>OS</Logo>

            <Gutter />

            <NavItemList>
            {navbarItems.map((item) => <NavItemElement>{item}</NavItemElement>)}
            </NavItemList>

        </NavBarWrapper>
    );
};

const navbarItems =
    [
        "About",
        "Projects",
        "Contact"
    ] as string[];

const NavBarWrapper = styled.nav`
    display: grid;
    grid-template-columns: 
    [Logo-start] 5%
    [Logo-end Logo-gutter-start] 15%
    [Logo-gutter-end Panes-start] 40%
    [Panes-end] 1fr
    ;
    
    background-color: #176862;
`;

const Logo = styled.span`
  grid-column: Logo-start / Logo-end;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
  font-size: 2rem;
`;

const Gutter = styled.span`
grid-column: Logo-gutter-start / Logo-gutter-end;
`;

const NavItemList = styled.ul`
      list-style-type: none;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
`;

const NavItemElement = styled.li`
      font-family: Roboto,serif;
      font-size: 25px;
`;

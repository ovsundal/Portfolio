import React from "react";
import styled from "styled-components";

export const NavBar: React.FC = () => {
    return (
        <NavBarWrapper>
            <Logo>Logo</Logo>

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
    [Logo-start] min-content
    [Logo-end Logo-gutter-start] 15%
    [Logo-gutter-end Panes-start] 40%
    [Panes-end] 1fr
    ;
    
    background-color: #8bfffd;
`;

const Logo = styled.span`
  grid-column: Logo-start / Logo-end;
  
`;

const Gutter = styled.span`
grid-column: Logo-gutter-start / Logo-gutter-end;
`;

const NavItemList = styled.ul`
      list-style-type: none;
      display: flex;
`;

const NavItemElement = styled.li`
      font-family: Roboto,serif;
      font-size: 25px;
`;

import React from "react";
import styled from "styled-components";

export const NavBar: React.FC = () => {
    return (
        <NavBarWrapper>
            <p>Navbar</p>
        </NavBarWrapper>
    );
};

const NavBarWrapper = styled.nav`
    background-color: #8bfffd;
    grid-column: 1 / 5;
`;

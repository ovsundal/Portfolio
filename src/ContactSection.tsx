import React from "react";
import styled from "styled-components";

export const ContactSection: React.FC = () => {
    return (
        <ContactSectionWrapper>
            Contact
        </ContactSectionWrapper>
    );
};

const ContactSectionWrapper = styled.section`
    background-color: #6dff48;
    grid-column: 1 / 5;
`;

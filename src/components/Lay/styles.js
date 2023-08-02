import styled from "styled-components";
import { customVariables } from "../../styles/variables";

// Create a styled component called MainLayout which represents a div with flex display
export const MainLayout = styled.div`
    display: flex;
`;

// Create a styled component called MainContent which represents the main content with specific padding and heading style
export const MainContent = styled.main`
    padding: calc(${customVariables.smallSpacing} * 2);

    /* Apply custom styling to the h1 element inside MainContent */
    h1 {
        font-size: 14px;
    }
`;

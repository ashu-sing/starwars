import { css } from "styled-components";

// Define various styling variables
const customVariables = {
  sidebarWidth: `300px`,
  smallSpacing: `8px`,
  mediumSpacing: `16px`,
  largeSpacing: `24px`,
  extraLargeSpacing: `32px`,
  extraExtraLargeSpacing: `48px`,
  borderRadius: `6px`,
};

// Define a CSS reset for buttons
const buttonResetCSS = css`
  font-family: inherit;
  outline: none;
  border: none;
  background: none;
  letter-spacing: inherit;
  color: inherit;
  font-size: inherit;
  text-align: inherit;
  padding: 0;
`;

export { customVariables, buttonResetCSS };

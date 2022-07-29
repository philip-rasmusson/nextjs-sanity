import { css } from "styled-components"

export default css`
  // Only show focus outline when required by WCAG
  .js-focus-visible :focus:not(.focus-visible) {
    outline: none;
  }

  html {
    box-sizing: border-box;
  }
  body {
    background-color: ${({ theme }) => theme.colors.bodyColor};
    color: ${({ theme }) => theme.colors.bodyTextColor};
    font-family: Comfortaa, Helvetica Neue, sans-serif;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  img  {
    max-width: 100%;
  }
  a {
    display: inline-block;
    text-decoration: none;
    color: inherit;
  }

  .visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`

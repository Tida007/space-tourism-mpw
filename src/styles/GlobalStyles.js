import { createGlobalStyle } from "styled-components";

export const breakpoints = {
    xxs: "250px", // 400px
    xs: "320px", // 512px
    sm: "786px", // 1280px
    md: "992px", // 1600px
    lg: "1200px", // 1920px
    xl: "1440px", // 2304px
}

const GlobalStyles = createGlobalStyle`
html {
    scrollbar-gutter: stable;
    font-size: 60%;

    @media screen and (min-width: ${breakpoints.xxs}) {
    font-size: 70%;
    }

    @media screen and (min-width: ${breakpoints.xs}) {
    font-size: 100%;
    }
}

body {
   background-color: hsla(223, 42%, 8%, 1);
   min-height: 100vh;
   color: white;
   font-family: 'Barlow', sans-serif;
   position: relative;
}
@keyframes circleing {
    to {
        height: 150%;
        width: 150%;
        opacity: 0;
    }
}


*,
*::before,
*::after {
   -webkit-box-sizing: border-box;
   box-sizing: border-box;
   transition: background-color 0.3s, border 0.3s;   
}

body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
   margin: 0;
   overflow-wrap: break-word;
   hyphens: auto;
}

ul,
ol {
    list-style: none;
    padding: 0;
    margin: 0;
}

html {
    scrollbar-width: none;
}

body {
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    transition: color 0.3s, background-color 0.3s;
}

a:not([class]) {
   -webkit-text-decoration-skip: ink;
   text-decoration-skip-ink: auto;
}

a {
   text-decoration: none;
   color: inherit;
}

img,
picture {
   max-width: 100%;
   display: block;
}

input,
button,
textarea,
select {
   font: inherit;
   color: inherit;
}

input:disabled {
   background-color: gray;
   color: gray;
}

button {
    cursor: pointer;
}

button:has(svg) {
    line-height: 0;
}

*:disabled {
    cursor: not-allowed;
}

@media (prefers-reduced-motion: reduce) {
    html {
        scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
       -webkit-animation-duration: 0.01ms !important;
       animation-duration: 0.01ms !important;
       -webkit-animation-iteration-count: 1 !important;
       animation-iteration-count: 1 !important;
       -webkit-transition-duration: 0.01ms !important;
       -o-transition-duration: 0.01ms !important;
       transition-duration: 0.01ms !important;
       scroll-behavior: auto !important;
    }
}
`;

export default GlobalStyles;

import { createGlobalStyle } from "styled-components";
import GothamBook from "../fonts/Gotham Book Regular.otf";
import GothamMedium from "../fonts/Gotham Medium.otf";

export default createGlobalStyle`
  @font-face {
    font-family: 'Gotham Book';
    font-style: normal;
    font-weight: 400;
    src: url(${GothamBook});
  }

  @font-face {
    font-family: 'Gotham Medium';
    font-style: medium;
    font-weight: 500;
    src: url(${GothamMedium});
  }

 * {
   padding: 0;
   margin: 0;
   box-sizing: border-box;
 }

 html, body{
  font-family: 'Gotham Book', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
 }

 :root{
   --text-white: #eaeaec;
   --text-black: rgb(57, 60, 65);
   --text-gray: rgb(92, 94, 98);
   --button-white-text: rgb(255, 255, 255);
   --button-black-text: rgb(23, 26, 32);
   --button-black-background: rgba(23, 26, 32, 0.8);
   --button-white-background: rgba(255, 255, 255, 0.65);
   --button-black-border: rgba(0, 0, 0, 0);
   --sidebar-border: rgb(208, 209, 210);
 }
`;

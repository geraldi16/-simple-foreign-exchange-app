import styled from "styled-components";

import background from "../img/background.jpg";
import { media } from "../utils/dimension";

const Style = {
  Wrapper: styled.div`
    position: relative;
    z-index: 10;
    ${media.tablet`
        margin-left: 10vw;
        margin-top: 5vh;
        width: 600px;
        padding: 0 20px;
    `}
    ${media.desktop`
        margin-left: 20vw;
        margin-top: 5vh;
        width: 600px;
        padding: 0 20px;
    `}
    ${media.laptopXL`
        margin-left: 30vw;
        margin-top: 5vh;
        width: 600px;
        padding: 0 20px;
    `}
  `,
  Background: styled.div`
    background: url(${background});
    background-size: cover;
    width: 100%;
    position: fixed;
    height: 100%;
    top: 0;
    opacity: 0.6;
  `
};

export default Style;

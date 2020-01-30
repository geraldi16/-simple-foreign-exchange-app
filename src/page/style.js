import styled from "styled-components";

import background from "../img/background.jpg";

const Style = {
  Wrapper: styled.div`
    position: absolute;
    width: 600px;
    padding: 0 20px;
    margin-left: 25vw;
    margin-top: 5vh;
    z-index: 10;
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

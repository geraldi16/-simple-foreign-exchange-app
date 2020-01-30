import styled from "styled-components";
import { media } from "../../utils/dimension";

const Style = {
  Wrapper: styled.div`
    ${media.tablet`
      max-height: 70vh;
      overflow-y: auto;
      margin-bottom: 20px;
    `}
  `
};

export default Style;

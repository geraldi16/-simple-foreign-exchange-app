import styled from "styled-components";
import { Row } from "react-flexbox-grid";

import { media } from "../../utils/dimension";

const Style = {
  Wrapper: styled(Row)`
    border: 1px solid #949494;
    border-radius: 3px;
    box-shadow: 1px 1px 3px #333333;
    background: #fff;
    width: 300px;
    height: 50px;
    margin: auto;
  `,
  Input: styled.input`
    text-align: left;
    height: 95%;
    font-size: 12px;
    ${media.tablet`
      font-size: 14px;
    `}
    width: 100%;
    border: none;
    &:focus {
      outline: none;
    }
  `,
  Submit: styled.button`
    width: 100%;
    height: 100%;
    background: #f1f1f1;
    border: none;
    font-size: 14px;
    font-weight: bold;

    &:hover {
      cursor: pointer;
      background: #cccccc;
    }

    &:focus {
      outline: none;
    }
  `
};

export default Style;

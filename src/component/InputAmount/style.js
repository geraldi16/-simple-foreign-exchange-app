import styled from "styled-components";
import { Col, Row } from "react-flexbox-grid";

import { media } from "../../utils/dimension";

const Style = {
  Wrapper: styled(Row)`
    background: #f1f1f1;
    height: 100px;
    width: 103%;
    position: fixed;
    top: 0;
    padding: 10px 10px 0 10px;
    ${media.tablet`
      position: relative;
      margin-bottom: 20px;
      border-radius: 5px;
    `}
  `,
  CurrencyName: styled(Col)`
    text-align: left;
    font-size: 18px;
    font-weight: bold;
    font-style: italic;
  `,
  Currency: styled(Col)`
    text-align: left;
    font-size: 26px;
    font-weight: bold;
    padding: 10px;
  `,
  InputWrapper: styled(Col)`
    padding: 10px;
    text-align: right;
    width: 100%;
  `,
  Input: styled.input`
    border: none;
    height: 40px;
    font-size: 18px;
    font-weight: bold;
    padding: 0 5px;
    text-align: right;
    width: 100%;
    &:focus {
      outline: none;
    }
  `
};

export default Style;

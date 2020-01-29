import styled from "styled-components";
import { Col, Row } from "react-flexbox-grid";

const Style = {
  Wrapper: styled(Row)`
    margin-bottom: 30px;
    padding: 10px 10px 0 10px;
    background: #f1f1f1;
  `,
  CurrencyName: styled(Col)`
    text-align: left;
    font-size: 14px;
    font-weight: bold;
    font-style: italic;
  `,
  Currency: styled(Col)`
    text-align: left;
    font-size: 18px;
    font-weight: bold;
    padding: 10px;
  `,
  InputWrapper: styled(Col)`
    padding: 10px;
    text-align: right;
  `,
  Input: styled.input`
    border: none;
    font-size: 18px;
    padding: 0 5px;
    text-align: right;
    &:focus {
      outline: none;
    }
  `
};

export default Style;

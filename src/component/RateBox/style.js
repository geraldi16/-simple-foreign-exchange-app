import styled from "styled-components";
import { Col, Row } from "react-flexbox-grid";

const Style = {
  Wrapper: styled(Row)`
    text-align: left;
    border: 1px solid #949494;
    border-radius: 3px;
    margin: 20px;
    box-shadow: 1px 1px 3px #333333;
  `,
  Information: styled(Row)`
    padding: 10px;
  `,
  Currency: styled(Col)`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
  `,
  ConvertedAmount: styled(Col)`
    font-size: 16px;
    font-weight: bold;
    text-align: right;
  `,
  CurrencyDescription: styled(Col)`
    font-size: 14px;
    font-weight: bold;
    font-style: italic;
  `,
  ConversionRate: styled(Col)`
    font-size: 14px;
    font-style: italic;
  `,
  RemoveButton: styled.button`
    width: 100%;
    height: 100%;
    background: #f1f1f1;
    border: none;
    font-size: 26px;

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

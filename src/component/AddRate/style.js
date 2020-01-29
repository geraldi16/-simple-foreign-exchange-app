import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { Row } from "react-flexbox-grid";

const Style = {
  Wrapper: styled(Row)`
    border: 1px solid #949494;
    border-radius: 3px;
    box-shadow: 1px 1px 3px #333333;
  `,
  Autocomplete: styled(Autocomplete)`
    width: 100%;
    padding: 0 5px;
  `,
  Input: styled(TextField)`
    text-align: left;
    font-size: 16px;
    width: 100%;
    border: none;
    padding: 10px;
    &:focus {
      outline: none;
    }
  `,
  Submit: styled.button`
    width: 100%;
    height: 100%;
    background: #f1f1f1;
    border: none;
    font-size: 16px;

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

import styled from "styled-components";
import {DigitText} from "@cthit/react-digit-components"


export const BigDiv = styled.div`
  margin-left: auto;
  margin-right: auto;
  background-color: #09cdda;
  width: 90vw;
  height: 80vw;
  margin-top: 20px;
`;

export const Dialog = styled.div`
  left: calc(20vw);
  right: calc(20vw);
  background-color: white;
  min-width: 60vw;
  height: 420px;
  margin-top: 40px;
  position: absolute;
  z-index: 10;
  border-radius: 5px;
  box-shadow: 2px 2px 5px;
  padding: 20px;
  padding-right: 50px;
  padding-left: 50px;
  overflow-y: scroll;
  scrollbar-width: none;
`;

export const LightBox = styled.div`
  margin-left: auto;
  margin-right: auto;
  background-color: #0009;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 9;
  overflow:hidden;
`;

export const HeaderDiv = styled.div`
  height: 20px;
  background-color: #09cdda;
`;

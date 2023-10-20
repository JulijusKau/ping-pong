import styled from "styled-components";
import { StyledReusableButton } from "../StyledReusableButton";

export const StyledGameDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledGameCanvas = styled.canvas`
  border: 1px solid black;
  position: fixed;
  top: 15%;
  background-color: var(--primaryColor);
`;

export const StyledStartButton = styled(StyledReusableButton)`
  padding: 20px;
  position: absolute;
`;

export const StyledScoreSpan = styled.span`
  color: var(--whiteColor);
  font-family: var(--mainFontRoboto);
  font-size: 30px;
  position: absolute;
  margin-top: 200px;
`;

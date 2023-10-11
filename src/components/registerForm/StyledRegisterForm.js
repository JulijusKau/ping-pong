import styled from "styled-components";
import { StyledReusableButton } from "../StyledReusableButton";

export const StyledMainForm = styled.form`
  margin: 10% auto;
  width: 15%;
  min-width: 250px;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: var(--primaryColor);
`;

export const StyledInput = styled.input`
  padding: 10px;
  font-family: var(--mainFontRoboto);
  font-size: 15px;
`;

export const StyledRegisterButton = styled(StyledReusableButton)`
  height: 50px;
  width: 50%;
`;

import styled from "styled-components";
import { StyledReusableButton } from "../StyledReusableButton";
import { Link } from "react-router-dom";

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
  @media (max-width: 370px) {
    width: 80%;
  }
`;

export const StyledInput = styled.input`
  padding: 10px;
  font-family: var(--mainFontRoboto);
  font-size: 15px;
`;

export const StyledLoginRegisterButton = styled(StyledReusableButton)`
  height: 50px;
  width: 50%;
`;

export const StyledRegisterLink = styled(Link)`
  text-decoration: none;
  font-family: var(--mainFontRoboto);
  color: var(--darkColor);
  text-align: center;
  &:hover {
    color: var(--whiteColor);
  }
`;

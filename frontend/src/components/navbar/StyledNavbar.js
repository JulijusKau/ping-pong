import styled from "styled-components";
import { StyledReusableButton } from "../StyledReusableButton";

export const StyledNavbar = styled.nav`
  height: 5%;
  background-color: var(--primaryColor);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
`;

export const StyledNavbarImage = styled.img`
  width: 15%;
  min-width: 100px;
`;

export const StyledNavbarButtonContainer = styled.div``;

export const StyledNavbarButton = styled(StyledReusableButton)`
  margin: 5px;
  height: 50px;
  @media (max-width: 370px) {
    font-size: 15px;
    height: 25px;
  }
`;

export const StyledNavbarSpan = styled.span`
  font-family: var(--mainFontRoboto);
  font-size: 25px;
  padding-right: 50px;
  color: var(--whiteColor);
`;

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

export const StyledNavbarButton = styled(StyledReusableButton)`
  width: 10%;
  min-width: 150px;
  max-height: 60px;
  padding: 0.5% 0;
`;

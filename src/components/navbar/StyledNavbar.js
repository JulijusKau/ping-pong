import styled from "styled-components";

export const StyledNavbar = styled.nav`
  height: 5%;
  background-color: var(--optionalColorTwo);
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

export const StyledNavbarButton = styled.button`
  width: 10%;
  min-width: 150px;
  max-height: 60px;
  padding: 0.5% 0;
  font-family: var(--mainFontRoboto);
  font-size: var(--bigTextFont);
  background-color: var(--strongColor);
  color: var(--darkColor);
  &:hover {
    color: var(--whiteColor);
    cursor: pointer;
  }
`;

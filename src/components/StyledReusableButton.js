import styled from "styled-components";

export const StyledReusableButton = styled.button`
  font-family: var(--mainFontRoboto);
  font-size: var(--bigTextFont);
  background-color: var(--strongColor);
  color: var(--darkColor);
  &:hover {
    color: var(--whiteColor);
    cursor: pointer;
  }
`;

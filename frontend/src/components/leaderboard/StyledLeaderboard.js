import styled from "styled-components";

const textStyles = `
color: var(--whiteColor);
font-family: var(--mainFontRoboto)
`;

export const StyledLeaderboard = styled.div`
  float: right;
  padding: 40px;
  margin: 2% 0;
  background-color: var(--primaryColor);
  width: 25%;
  min-width: 250px;
  height: fit-content;
  @media (max-width: 370px) {
    width: 100%;
    padding: 0;
    font-size: 13px;
  }
`;

export const StyledLeaderboardHeading = styled.h1`
  ${textStyles};
  text-align: center;
`;
export const StyledOrderedList = styled.ol``;

export const StyledListElement = styled.li`
  ${textStyles};
  padding: 10px 0;
  font-size: 20px;
`;

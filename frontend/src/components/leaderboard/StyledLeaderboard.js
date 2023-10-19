import styled from "styled-components";

const textStyles = `
color: var(--whiteColor);
font-family: var(--mainFontRoboto)
`;

export const StyledLeaderboard = styled.div`
  ${textStyles};
  position: absolute;
  z-index: 2;
  right: 0;
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
    margin: 0;
    float: none;
    font-size: 10px;
  }
`;

export const StyledLeaderboardHeading = styled.h1`
  ${textStyles};
  text-align: center;
`;

export const StyledSpanDiv = styled.div`
  padding: 10px;
  font-size: 25px;
  display: flex;
  justify-content: space-between;

  &:nth-child(2) {
    color: var(--darkColor);
    font-size: 30px;
    @media (max-width: 1200px) {
      font-size: 20px;
    }
  }
  @media (max-width: 1200px) {
    font-size: 20px;
  }
`;
export const StyledListSpan = styled.span``;

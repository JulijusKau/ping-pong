import {
  StyledLeaderboard,
  StyledLeaderboardHeading,
  StyledListElement,
  StyledOrderedList,
} from "./StyledLeaderboard";

export const Leaderboard = () => {
  return (
    <StyledLeaderboard>
      <StyledLeaderboardHeading>LEADERBOARD</StyledLeaderboardHeading>
      <StyledOrderedList>
        <StyledListElement>weewoo</StyledListElement>
        <StyledListElement>adsda</StyledListElement>
        <StyledListElement>zxcczxczcx</StyledListElement>
        <StyledListElement>weeczxzcxcxzwoo</StyledListElement>
        <StyledListElement>czxzcxcxzcxczxzcxzcx</StyledListElement>
        <StyledListElement>weeczxzxcczxwoo</StyledListElement>
        <StyledListElement>weewczxcczxoo</StyledListElement>
      </StyledOrderedList>
    </StyledLeaderboard>
  );
};

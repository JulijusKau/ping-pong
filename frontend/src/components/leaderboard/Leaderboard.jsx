import { useEffect, useState } from "react";
import {
  StyledLeaderboard,
  StyledLeaderboardHeading,
  StyledListSpan,
  StyledSpanDiv,
} from "./StyledLeaderboard";
import axios from "axios";

export const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_AUTH}users`, {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setLeaderboardData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching leaderboard data: ", error);
      });
  }, [token]);

  return (
    <StyledLeaderboard>
      <StyledLeaderboardHeading>LEADERBOARD</StyledLeaderboardHeading>
      <StyledSpanDiv>
        <StyledListSpan>Username</StyledListSpan>
        <StyledListSpan>Highscore</StyledListSpan>
      </StyledSpanDiv>
      {leaderboardData.map((user) => (
        <StyledSpanDiv key={user.id}>
          <StyledListSpan>{user.username}</StyledListSpan>
          <StyledListSpan>{user.highscore}</StyledListSpan>
        </StyledSpanDiv>
      ))}
    </StyledLeaderboard>
  );
};

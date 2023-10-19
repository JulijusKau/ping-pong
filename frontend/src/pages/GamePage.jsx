import { Leaderboard } from "../components/leaderboard/Leaderboard";

export const GamePage = ({ showHighscore }) => {
  if (showHighscore) {
    return <Leaderboard />;
  }
};

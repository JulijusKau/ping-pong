import GameBoard from "../components/gameBoard/GameBoard";
import { Leaderboard } from "../components/leaderboard/Leaderboard";

export const GamePage = ({ showHighscore }) => {
  return (
    <>
      {showHighscore && <Leaderboard />}
      <GameBoard />
    </>
  );
};

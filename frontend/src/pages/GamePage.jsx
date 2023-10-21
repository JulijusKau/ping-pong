import { GameBoard } from "../components/gameBoard/GameBoard";
import { Leaderboard } from "../components/leaderboard/Leaderboard";

export const GamePage = ({ showHighscore, setFinalHighScore }) => {
  return (
    <>
      {showHighscore && <Leaderboard />}
      <GameBoard setFinalHighScore={setFinalHighScore} />
    </>
  );
};

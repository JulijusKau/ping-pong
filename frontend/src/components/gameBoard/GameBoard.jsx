import React, { useState, useEffect } from "react";
import {
  StyledGameCanvas,
  StyledGameDiv,
  StyledScoreSpan,
  StyledStartButton,
} from "./StyledGameBoard";

export const GameBoard = ({ setFinalHighScore }) => {
  const [ballX, setBallX] = useState(400);
  const [ballY, setBallY] = useState(200);
  const [ballSpeedX, setBallSpeedX] = useState(5);
  const [ballSpeedY, setBallSpeedY] = useState(5);
  const [paddle1Y, setPaddle1Y] = useState(150);
  const [paddle2Y, setPaddle2Y] = useState(150);
  const [paddle1Speed, setPaddle1Speed] = useState(0);
  const [paddle2Speed, setPaddle2Speed] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [scorePaddle1, setScorePaddle1] = useState(0);
  const [playerLives, setPlayerLives] = useState(3);
  const [initialGameStart, setInitialGameStart] = useState(false);
  const [showFinalScore, setShowFinalScore] = useState(false);

  useEffect(() => {
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");

    const aiLogic = () => {
      const paddle2CenterY = paddle2Y + 50;
      let aiSpeed = 5 + scorePaddle1 * 0.1;

      if (ballY > paddle2CenterY && ballX > canvas.width / 2) {
        setPaddle2Speed(aiSpeed);
      } else if (ballY < paddle2CenterY && ballX > canvas.width / 2) {
        setPaddle2Speed(-aiSpeed);
      } else {
        setPaddle2Speed(0);
      }
    };

    const resetGame = () => {
      setGameStarted(false);
      setFinalHighScore(scorePaddle1);
      setInitialGameStart(false);
      setShowFinalScore(true);
    };

    const updateGameArea = () => {
      if (playerLives === 0) {
        resetGame();
      } else if (gameStarted) {
        updateBallPosition();
        aiLogic();
      }
      updatePaddlePosition();
      updateCanvas();
    };

    const movePaddle = (e) => {
      const key = e.key;

      if (key === "w" && paddle1Y > 0) {
        setPaddle1Speed(-10);
      } else if (key === "s" && paddle1Y < canvas.height - 100) {
        setPaddle1Speed(10);
      }
    };

    const stopPaddle = (e) => {
      const key = e.key;

      if (key === "w" || key === "s") {
        setPaddle1Speed(0);
      }
    };

    const updateBallPosition = () => {
      let newBallX = ballX + ballSpeedX;
      let newBallY = ballY + ballSpeedY;
      if (newBallX > canvas.width) {
        setScorePaddle1(scorePaddle1 + 1);
        setGameStarted(false);
        setTimeout(() => {
          setGameStarted(true);
        }, 1000);
      } else if (newBallX < 0) {
        setPlayerLives(playerLives - 1);
        setGameStarted(false);
        setTimeout(() => {
          setGameStarted(true);
        }, 1000);
      }

      if (newBallY < 0 || newBallY > canvas.height - 10) {
        setBallSpeedY(-ballSpeedY);
      }

      if (
        (newBallX < 10 && newBallY > paddle1Y && newBallY < paddle1Y + 100) ||
        (newBallX > canvas.width - 10 &&
          newBallY > paddle2Y &&
          newBallY < paddle2Y + 100)
      ) {
        setBallSpeedX((prevSpeedX) => -prevSpeedX * 1.2);
        setBallSpeedY((prevSpeedY) => prevSpeedY * 1.2);
      }

      if (newBallX < 0 || newBallX > canvas.width) {
        newBallX = canvas.width / 2;
        newBallY = canvas.height / 2;
        setBallSpeedX(5);
        setBallSpeedY(5);
      }

      setBallX(newBallX);
      setBallY(newBallY);
    };

    const updatePaddlePosition = () => {
      let newPaddle1Y = paddle1Y + paddle1Speed;
      newPaddle1Y = Math.max(0, newPaddle1Y);
      newPaddle1Y = Math.min(canvas.height - 100, newPaddle1Y);

      let newPaddle2Y = paddle2Y + paddle2Speed;
      newPaddle2Y = Math.max(0, newPaddle2Y);
      newPaddle2Y = Math.min(canvas.height - 100, newPaddle2Y);

      setPaddle1Y(newPaddle1Y);
      setPaddle2Y(newPaddle2Y);
    };

    const updateCanvas = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";
      ctx.fillRect(0, paddle1Y, 10, 100);
      ctx.fillRect(canvas.width - 10, paddle2Y, 10, 100);
      ctx.fillRect(ballX, ballY, 10, 10);

      ctx.font = "30px Arial";
      ctx.fillText(`Score: ${scorePaddle1}`, 50, 50);
      ctx.fillText(`Lives: ${playerLives}`, canvas.width - 200, 50);
    };

    const intervalId = setInterval(updateGameArea, 17);

    window.addEventListener("keydown", movePaddle);
    window.addEventListener("keyup", stopPaddle);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("keydown", movePaddle);
      window.removeEventListener("keyup", stopPaddle);
    };
  }, [
    ballX,
    ballY,
    ballSpeedX,
    ballSpeedY,
    paddle1Y,
    paddle2Y,
    paddle1Speed,
    paddle2Speed,
    gameStarted,
    scorePaddle1,
    playerLives,
    initialGameStart,
    setFinalHighScore,
  ]);
  return (
    <StyledGameDiv
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "500px",
      }}
    >
      <StyledGameCanvas id="gameCanvas" width={800} height={400} />

      {!initialGameStart && (
        <StyledStartButton
          onClick={() => {
            setScorePaddle1(0);

            setPlayerLives(3);
            setGameStarted(true);
            setShowFinalScore(false);
            setInitialGameStart(true);
          }}
        >
          START THE GAME
        </StyledStartButton>
      )}
      {showFinalScore && (
        <StyledScoreSpan>Your final score is: {scorePaddle1}</StyledScoreSpan>
      )}
    </StyledGameDiv>
  );
};

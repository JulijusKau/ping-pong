import React, { useState, useEffect } from "react";

function GameBoard() {
  const [ballX, setBallX] = useState(400);
  const [ballY, setBallY] = useState(200);
  const [ballSpeedX, setBallSpeedX] = useState(5);
  const [ballSpeedY, setBallSpeedY] = useState(5);
  const [paddle1Y, setPaddle1Y] = useState(150);
  const [paddle2Y, setPaddle2Y] = useState(150);
  const [paddle1Speed, setPaddle1Speed] = useState(0);
  const [paddle2Speed, setPaddle2Speed] = useState(0);
  const [gameStarted, setGameStarted] = useState(true);
  const [scorePaddle1, setScorePaddle1] = useState(0);
  const [scorePaddle2, setScorePaddle2] = useState(0);

  useEffect(() => {
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");

    const updateGameArea = () => {
      if (gameStarted) {
        updateBallPosition();
      }
      updatePaddlePosition();
      updateCanvas();
    };

    const movePaddle = (e) => {
      const key = e.key;

      if (key === "ArrowUp" && paddle2Y > 0) {
        setPaddle2Speed(-10);
      } else if (key === "ArrowDown" && paddle2Y < canvas.height - 100) {
        setPaddle2Speed(10);
      } else if (key === "w" && paddle1Y > 0) {
        setPaddle1Speed(-10);
      } else if (key === "s" && paddle1Y < canvas.height - 100) {
        setPaddle1Speed(10);
      }
    };

    const stopPaddle = (e) => {
      const key = e.key;

      if (key === "ArrowUp" || key === "ArrowDown") {
        setPaddle2Speed(0);
      } else if (key === "w" || key === "s") {
        setPaddle1Speed(0);
      }
    };

    const updateBallPosition = () => {
      let newBallX = ballX + ballSpeedX;
      let newBallY = ballY + ballSpeedY;

      console.log(newBallX);
      if (newBallX > 800) {
        setScorePaddle1(scorePaddle1 + 1);
        setGameStarted(false);
      } else if (newBallX < 0) {
        setScorePaddle2(scorePaddle2 + 1);
        setGameStarted(false);
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
        // Increase ball speed after each hit
        setBallSpeedX((prevSpeedX) => -prevSpeedX * 1.2); // Increase speed by 10%
        setBallSpeedY((prevSpeedY) => prevSpeedY * 1.2); // Increase speed by 10%
      }

      if (newBallX < 0 || newBallX > canvas.width) {
        newBallX = canvas.width / 2;
        newBallY = canvas.height / 2;
        setBallSpeedX(-5);
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

      // Display scores
      ctx.font = "30px Arial";
      ctx.fillText(`Player 1: ${scorePaddle1}`, 50, 50);
      ctx.fillText(`Player 2: ${scorePaddle2}`, canvas.width - 200, 50);
    };

    const intervalId = setInterval(updateGameArea, 17);

    // Event listeners for paddle movement
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
    scorePaddle2,
  ]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "500px",
      }}
    >
      <canvas
        id="gameCanvas"
        width={800}
        height={400}
        style={{
          border: "1px solid black",
          background: "var(--primaryColor)",
        }}
      />
      <button
        onClick={() => {
          setGameStarted(true);
        }}
      >
        START THE GAME
      </button>
    </div>
  );
}

export default GameBoard;

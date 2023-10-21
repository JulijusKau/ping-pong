import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { GamePage } from "./pages/GamePage";
import { PageNotFound } from "./pages/PageNotFound";
import Protected from "./pages/Protected";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [showHighscore, setShowHighscore] = useState(false);
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");

  // REIKIA PAKEIST KAD ATEITU DUOMENYS IS KITUR
  const [finalHighScore, setFinalHighScore] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    const requestData = {
      highscore: finalHighScore,
    };
    axios
      .put(`${process.env.REACT_APP_API_AUTH}users/${userId}`, requestData, {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .catch((error) => {
        console.error("Error updating highscore:", error);
      });
  }, [finalHighScore, userId]);

  const handleHighscoreButtonClick = () => {
    setShowHighscore(!showHighscore);
  };

  return (
    <>
      <Navbar
        setShowHighscore={setShowHighscore}
        handleHighscoreButtonClick={handleHighscoreButtonClick}
        username={username}
      />
      <Routes>
        <Route
          element={
            <Protected setUsername={setUsername} setUserId={setUserId} />
          }
        >
          <Route
            path="/"
            element={
              <GamePage
                showHighscore={showHighscore}
                setFinalHighScore={setFinalHighScore}
              />
            }
          />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;

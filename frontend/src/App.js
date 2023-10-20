import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { GamePage } from "./pages/GamePage";
import { PageNotFound } from "./pages/PageNotFound";
import Protected from "./pages/Protected";
import { useState } from "react";

function App() {
  const [showHighscore, setShowHighscore] = useState(false);

  const handleHighscoreButtonClick = () => {
    setShowHighscore(!showHighscore);
  };

  console.log(localStorage.length === 1);

  // MAKE IT SO THAT I CHECK THE AUTHORISATION
  // https://stackoverflow.com/questions/52936624/react-router-authenticated-route-is-redirecting-when-i-refresh-the-page

  return (
    <>
      <Navbar
        setShowHighscore={setShowHighscore}
        onHighscoreButtonClick={handleHighscoreButtonClick}
      />
      <Routes>
        <Route element={<Protected />}>
          <Route
            path="/"
            element={<GamePage showHighscore={showHighscore} />}
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

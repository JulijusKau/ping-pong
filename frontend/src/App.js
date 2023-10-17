import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { GamePage } from "./pages/GamePage";
import { PageNotFound } from "./pages/PageNotFound";
import Protected from "./pages/Protected";

function App() {
  const handleHighscoreButtonClick = () => {};
  return (
    <>
      <Navbar onHighscoreButtonClick />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<Protected />}>
          <Route path="/" element={<GamePage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;

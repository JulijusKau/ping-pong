import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Leaderboard } from "./components/leaderboard/Leaderboard";
import { Navbar } from "./components/navbar/Navbar";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { HomePage } from "./pages/HomePage";
import { PageNotFound } from "./pages/PageNotFound";

function App() {
  return (
    <>
      <Navbar />
      {/* <Leaderboard /> */}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;

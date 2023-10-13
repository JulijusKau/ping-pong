import "./App.css";
import { Leaderboard } from "./components/leaderboard/Leaderboard";
import { Navbar } from "./components/navbar/Navbar";
import { LoginRegisterForm } from "./components/registerForm/LoginRegisterForm";

function App() {
  return (
    <>
      <Navbar />
      {/* <Leaderboard /> */}
      <LoginRegisterForm
        buttonName={"Login"}
        onButtonClick={() => {
          console.log("Login button pressed");
        }}
        isLoginForm={true}
      />
    </>
  );
}

export default App;

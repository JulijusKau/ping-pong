import { LoginRegisterForm } from "../components/registerForm/LoginRegisterForm";

export const LoginPage = () => {
  return (
    <LoginRegisterForm
      buttonName="Login"
      isLoginForm={true}
      onButtonClick={() => {
        console.log("Congratulations you have pressed the Login Button");
      }}
    />
  );
};

import { LoginRegisterForm } from "../components/registerForm/LoginRegisterForm";

export const RegisterPage = () => {
  return (
    <LoginRegisterForm
      buttonName="Register"
      isLoginForm={false}
      onButtonClick={() => {
        console.log("Congratulations you pressed the Register Button");
      }}
    />
  );
};

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  StyledInput,
  StyledLoginRegisterButton,
  StyledMainForm,
  StyledRegisterLink,
} from "./StyledLoginRegisterForm";

export const LoginRegisterForm = ({
  buttonName,
  onButtonClick,
  isLoginForm,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <StyledMainForm>
      <StyledInput
        name="username"
        type="text"
        placeholder="Username"
        required
        onChange={handleOnChange}
      />
      <StyledInput
        name="password"
        type="password"
        placeholder="*********"
        required
        onChange={handleOnChange}
      />
      <StyledLoginRegisterButton onClick={onButtonClick}>
        {buttonName}
      </StyledLoginRegisterButton>
      {isLoginForm && (
        // <StyledRegisterLink>
        //   No account? Register here.
        // </StyledRegisterLink>
        <span>This is a login form</span>
      )}
    </StyledMainForm>
  );
};

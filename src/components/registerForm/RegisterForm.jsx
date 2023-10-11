import { useState } from "react";
import {
  StyledInput,
  StyledMainForm,
  StyledRegisterButton,
} from "./StyledRegisterForm";

export const RegisterForm = () => {
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
      <StyledRegisterButton>REGISTER</StyledRegisterButton>
    </StyledMainForm>
  );
};

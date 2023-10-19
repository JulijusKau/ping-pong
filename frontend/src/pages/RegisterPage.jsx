import { useState } from "react";
import { LoginRegisterForm } from "../components/loginRegisterForm/LoginRegisterForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    if (formData.username.includes(" ") || formData.password.includes(" ")) {
      e.preventDefault();
      alert("No spacebars allowed");
    } else {
      e.preventDefault();
      axios
        .post("http://localhost:5000/register", formData)
        .then((response) => {
          navigate("/login");
        })
        .catch((err) => console.log(err));
    }
  };

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <LoginRegisterForm
      onChange={handleOnChange}
      onSubmit={handleOnSubmit}
      buttonName="Register"
      isLoginForm={false}
      minLength={6}
      maxlength={20}
    />
  );
};

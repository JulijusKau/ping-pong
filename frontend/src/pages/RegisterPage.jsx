import { useState } from "react";
import { LoginRegisterForm } from "../components/loginRegisterForm/LoginRegisterForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LoadingSpinner } from "../components/loadingSpinner/LoadingSpinner";

export const RegisterPage = () => {
  const [fetchingData, setFetchingData] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    highscore: 0,
  });

  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    if (formData.username.includes(" ") || formData.password.includes(" ")) {
      e.preventDefault();
      alert("No spacebars allowed");
    } else {
      setFetchingData(true);
      e.preventDefault();
      axios
        .post(`${process.env.REACT_APP_API_AUTH}register`, formData)
        .then((response) => {
          if (response.data.code === "ER_DUP_ENTRY") {
            alert("Username already exists");
            setFetchingData(false);
          } else {
            alert("Account created");
            navigate("/login");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (fetchingData) {
    return <LoadingSpinner />;
  } else {
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
  }
};

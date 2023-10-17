import { LoginRegisterForm } from "../components/registerForm/LoginRegisterForm";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthenticationContext } from "../context/AuthenticationContext";

export const LoginPage = () => {
  const { setIsSignedIn } = useContext(AuthenticationContext);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  // const [fetchingData, setFetchingData] = useState(false);

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    // setFetchingData(true);
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", formData)
      .then((response) => {
        if (response.data.token) {
          setIsSignedIn(true);
          localStorage.setItem("token", response.data.token);

          navigate("/");
        } else {
          setError(response.data.message);
          // setFetchingData(false);
          console.log(error);
          alert("Incorrect email or password");
        }
      })
      .catch((err) => console.log(err));
  };

  // if (fetchingData) {
  //   return <div>Please wait while loading...</div>;
  // } else {
  return (
    <LoginRegisterForm
      onChange={handleOnChange}
      onSubmit={handleOnSubmit}
      buttonName="Login"
      isLoginForm={true}
    />
  );
};

import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthenticationContext } from "../context/AuthenticationContext";

const Protected = () => {
  const { isSignedIn, setIsSignedIn } = useContext(AuthenticationContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${process.env.REACT_APP_API_AUTH}token/verify`, {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        if (response.data.id) {
          setIsSignedIn(true);
          navigate(location.pathname);
        }
      });
  }, [location.pathname, navigate, setIsSignedIn]);

  if (!isSignedIn) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default Protected;

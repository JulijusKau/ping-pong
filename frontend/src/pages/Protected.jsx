import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthenticationContext } from "../context/AuthenticationContext";
import { LoadingSpinner } from "../components/loadingSpinner/LoadingSpinner";

const Protected = ({ setUsername, setUserId }) => {
  const { isSignedIn, setIsSignedIn } = useContext(AuthenticationContext);
  const [fetchingData, setFetchingData] = useState(true); // Start with fetchingData as true
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
          setUsername(response.data.username);
          setUserId(response.data.id);
          navigate("/");
        }
      })
      .catch((error) => {
        // Handle authentication errors here
        console.error(error);
      })
      .finally(() => {
        setFetchingData(false); // Set fetchingData to false after the request is complete
      });
  }, [location.pathname, navigate, setIsSignedIn, setUsername, setUserId]);

  if (fetchingData) {
    return <LoadingSpinner />; // Show a loading spinner while fetching data
  } else if (!fetchingData) {
    if (isSignedIn) {
      return <Outlet />;
    } else if (!isSignedIn) {
      return <Navigate to="/login" />;
    }
  }
};

export default Protected;

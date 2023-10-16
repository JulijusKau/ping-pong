const { useContext, useEffect } = require("react");
const { AuthenticationContext } = require("../context/AuthenticationContext");
import axios from "axios";

const Protected = () => {
  const { isSignedIn, setIsSignedIn } = useContext(AuthenticationContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("http://");
  });
};

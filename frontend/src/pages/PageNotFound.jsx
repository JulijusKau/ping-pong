import { useNavigate } from "react-router-dom";
import { StyledReusableButton } from "../components/StyledReusableButton";

export const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          color: "white",
          fontSize: "50px",
          textAlign: "center",
          margin: "100px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        YOU'VE PROBABLY ENTERED A WRONG URL. THE PAGE DOESN'T EXIST.
        <StyledReusableButton
          onClick={() => {
            navigate("/");
          }}
          style={{ margin: "auto", padding: "30px" }}
        >
          BACK HOME
        </StyledReusableButton>
      </div>
    </>
  );
};

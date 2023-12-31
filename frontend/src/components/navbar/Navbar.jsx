import {
  StyledNavbar,
  StyledNavbarButton,
  StyledNavbarButtonContainer,
  StyledNavbarImage,
  StyledNavbarSpan,
} from "./StyledNavbar";

import placeholderLogo from "../../assets/images/placeholder-logo.png";
import { useContext } from "react";
import { AuthenticationContext } from "../../context/AuthenticationContext";

export const Navbar = ({
  setShowHighscore,
  username,
  handleHighscoreButtonClick,
}) => {
  const { isSignedIn, setIsSignedIn } = useContext(AuthenticationContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsSignedIn(false);
    setShowHighscore(false);
  };

  return (
    <StyledNavbar>
      <StyledNavbarImage src={placeholderLogo} />
      {isSignedIn && (
        <StyledNavbarButtonContainer>
          <StyledNavbarSpan>Hello, {username}</StyledNavbarSpan>

          <StyledNavbarButton onClick={handleLogout}>LOGOUT</StyledNavbarButton>

          <StyledNavbarButton onClick={handleHighscoreButtonClick}>
            HIGHSCORES
          </StyledNavbarButton>
        </StyledNavbarButtonContainer>
      )}
    </StyledNavbar>
  );
};

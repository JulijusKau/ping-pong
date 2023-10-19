import {
  StyledNavbar,
  StyledNavbarButton,
  StyledNavbarButtonContainer,
  StyledNavbarImage,
} from "./StyledNavbar";

import placeholderLogo from "../../assets/images/placeholder-logo.png";
import { useContext } from "react";
import { AuthenticationContext } from "../../context/AuthenticationContext";

export const Navbar = ({ onHighscoreButtonClick, setShowHighscore }) => {
  const { isSignedIn, setIsSignedIn } = useContext(AuthenticationContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsSignedIn(false);
    setShowHighscore(false);
  };

  return (
    <StyledNavbar>
      <StyledNavbarImage src={placeholderLogo} />
      <StyledNavbarButtonContainer>
        {isSignedIn && (
          <StyledNavbarButton onClick={handleLogout}>LOGOUT</StyledNavbarButton>
        )}
        {isSignedIn && (
          <StyledNavbarButton onClick={onHighscoreButtonClick}>
            HIGHSCORES
          </StyledNavbarButton>
        )}
      </StyledNavbarButtonContainer>
    </StyledNavbar>
  );
};

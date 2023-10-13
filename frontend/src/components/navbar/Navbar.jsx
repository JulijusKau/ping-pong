import {
  StyledNavbar,
  StyledNavbarButton,
  StyledNavbarButtonContainer,
  StyledNavbarImage,
} from "./StyledNavbar";

import placeholderLogo from "../../assets/images/placeholder-logo.png";

export const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledNavbarImage src={placeholderLogo} />
      <StyledNavbarButtonContainer>
        <StyledNavbarButton
          onClick={() => {
            console.log(
              "This should dynamically change to Login/Logout, depending on your status"
            );
          }}
        >
          LOGIN
        </StyledNavbarButton>
        <StyledNavbarButton
          onClick={() => {
            console.log("This should show the highscores");
          }}
        >
          HIGHSCORES
        </StyledNavbarButton>
      </StyledNavbarButtonContainer>
    </StyledNavbar>
  );
};

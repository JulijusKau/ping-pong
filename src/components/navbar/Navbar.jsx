import {
  StyledNavbar,
  StyledNavbarButton,
  StyledNavbarImage,
} from "./StyledNavbar";

import placeholderLogo from "../../assets/images/placeholder-logo.png";

export const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledNavbarImage src={placeholderLogo} />
      <StyledNavbarButton
        onClick={() => {
          console.log(
            "This should dynamically change to Login/Logout, depending on your status"
          );
        }}
      >
        LOGIN
      </StyledNavbarButton>
    </StyledNavbar>
  );
};

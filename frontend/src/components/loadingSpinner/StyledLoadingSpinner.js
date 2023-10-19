import styled from "styled-components";

export const StyledContainerDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const StyledLoadingSpinner = styled.div`
  border: 10px solid rgba(0, 0, 0, 00);
  border-top: 10px solid var(--primaryColor);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 0.75s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

// LoadingSpinner.js
import React from "react";
import styled, { keyframes } from "styled-components";

// Animation for rotating the circle
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Styled component for the spinner
const Spinner = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-top-color: var(--bs-primary);
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
`;
const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoadingSpinner = () => {
  return (
    <LoadingContainer>
      <Spinner />
    </LoadingContainer>
  );
};

export default LoadingSpinner;

import React from "react";

//import "./App.css";
import styled from "styled-components";
const Image = styled.img`
  /* height: 40vmin; */
  width: 400px;
  background-color: black;

  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
    &:hover {
      animation: test forwards 0.3s linear;
    }
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes test {
    from {
      transform: rotate(0deg) scale(1);
    }

    to {
      transform: rotate(360deg) scale(1.1);
    }
  }
`;
export default function App() {
  return (
    <div className="App bg-black">
      <Image
        src="logo.svg"
        className="App-logo"
        alt="logo"
        onClick={() => console.log()}
      />
    </div>
  );
}

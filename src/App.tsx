import React, { useState } from "react";
import Icon from "./assets/icon.svg";
import "./App.css";
import AppRoutes from "./appRoutes";
import { DisplayCard } from "./components/displayCard";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);
  return (
    <div>
      {isLoading ? (
        <div
          style={{
            background: "#0A0A0A",
            height: "100vh",
            width: "100%",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
            }}
          >
            <img
              id="icon"
              src={Icon}
              style={{
                margin: "auto",
                display: "flex",
                justifyContent: "center",
                position: "relative",
                top: "45vh",
              }}
            />
          </div>
        </div>
      ) : (
        <AppRoutes />
      )}
    </div>
  );
}

export default App;

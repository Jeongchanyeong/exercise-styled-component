import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";

const darkTheme = {
  textColor: "whiteSmoke",
  backgroundColor: "#111",
};

const lightTheme = {
  textColor: "#111",
  backgroundColor: " whiteSmoke",
};
// 객체 property를 ThemeProvider에 전달하면 ThemeProvider내부의 모든 component들이 해당 객체에 접근이 가능하다.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

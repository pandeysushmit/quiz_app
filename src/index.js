import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import Quiz from "./components/Quiz";
import { QuizProvider } from "./contexts/quiz";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <QuizProvider>
      <App />
      {/* <Quiz /> */}
    </QuizProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

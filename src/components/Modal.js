import React from "react";
import { useContext } from "react";
import "./Modal.css";
import { QuizContext } from "../contexts/quiz";
// import Animation from "./Animation";
// import Winner from "./Winner";
import Badge from "./Badge.js";

function Modal({ setOpenModal }) {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Thank you for attempting the test</h1>
        </div>
        <div className="">
          <p>
            YOUR SCORE IS: {quizState.correctAnswersCount}
            <div className="anime">
              {/* <Animation /> */}
              <Badge />
              {/* <Winner /> */}
            </div>
            {/* {quizState.questions.length} right. */}
          </p>
        </div>
        <div className="footer">
          {/* <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Next Exercise
          </button> */}
          <div
            onClick={() => dispatch({ type: "RESTART" })}
            className="next-button"
          >
            Restart
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;

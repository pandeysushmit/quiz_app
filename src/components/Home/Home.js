// import React from 'react';
import React from "react";
import { useNavigate } from "react-router-dom";
import Study from "../Study.js";
import "./styles.css";
// import Quiz from "../Quiz";
import Bulb from "../Bulb.js";
// import { useNavigate } from "react-router-dom";

// function Quiz1() {
//   const navigate = useNavigate();
// }

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg">
        <section className="layout">
          <div className="header">
            <div className="animation">
              <Study />
            </div>
            <div className="main">
            <h1>A Textbook by Government Of Karnataka!</h1>
            <p>
              A Web App for Knowledge with Fun!
            </p>
          </div>
          <div class="anim2">
            <Bulb />
          </div>
            {/* <div className="topic">
              <h1>WELCOME TO KARNATAKA</h1>
            </div> */}
          </div>
          
          

          <div className="footer">
            <button
              className="center"
              onClick={() => {
                navigate("/Quiz");
              }}
            >
              Exercises
            </button>
            <footer align="center">TheKidsGame©2023</footer>
          </div>
        </section>
      </div>
    </>
  );
};
export default Home;

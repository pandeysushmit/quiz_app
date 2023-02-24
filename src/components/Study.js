import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

function Study() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      rebderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./study.json"),
    });
  }, []);
  return (
    // <div className='animation'></div>
    <div className="conatiner" ref={container}></div>
  );
}

export default Study;

import React from "react";
import "./scoreboard.css";

function Scoreboard(props) {
  return (


    <header className="scoreB">
      {/* <jumbotron class="jumbo"> */}
      <div className="row">
        <h1>Harry P. Memory</h1>
        </div>
        <div className="row">
      <div className="col-md-12 col-ctr">
      <h2>Click each HP character once... if you click on anyone more than once, you'll be obliviated!</h2></div>
      </div>
        <div className="row">
          <div className="col-md-6"><h6>High Score: {props.topScore}</h6></div>
          <div className="col-md-6"><h6>Current Score: {props.score}</h6></div>
        </div>
        {/* </jumbotron> */}
    </header>
  );
}
export default Scoreboard;
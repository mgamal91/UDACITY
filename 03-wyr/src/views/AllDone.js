import React from "react";
import img from "../utils/media/doneImg.png";
import { Link } from "react-router-dom";
export default function AllDone() {
  return (
    <div>
      <h2 id="allDoneTexth2">
        <i className="star half icon"></i>All Questions Answered
        <i className="star half horizontally flipped icon"></i>
      </h2>

      <Link to="/add">
        <p>Add more questions?</p>
      </Link>
      <img src={img} alt="allDone" id="allDoneImg" />
    </div>
  );
}

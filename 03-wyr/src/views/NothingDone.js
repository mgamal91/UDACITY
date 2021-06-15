import React from "react";
import img from "../utils/media/hwaiting.png";

export default function NothingDone() {
  return (
    <div>
      <h2 id="allDoneTexth2">
        <i className="spinner loading icon"></i>No Questions Answered Yet!
        <i className="spinner loading icon"></i>
      </h2>
      <img src={img} alt="allDone" id="allDoneImg" />
    </div>
  );
}

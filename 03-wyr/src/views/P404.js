import React from "react";
import myImg from "../utils/media/p404_4.png";
function P404() {
  return (
    <div>
      <div id="cloudsA" className="clouds"></div>
      <div id="cloudsB" className="clouds"></div>
      <h1 className="P404_header">Whoops</h1>
      <p className="P404_p">Trying to test my site for errors maybe?</p>
      <img className="P404_img" src={myImg} alt="page404" />
    </div>
  );
}

export default P404;

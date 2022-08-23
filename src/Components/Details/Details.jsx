import React from "react";
import counterIcon1 from "../../images/counter-icon-1.png";
import counterIcon2 from "../../images/counter-icon-2.png";
import counterIcon3 from "../../images/counter-icon-3.png";
import "./styles.css";

function Details() {
  return (
    <div className="details__container">
      <div className="container">
        <div className="details">
          <div className="coin">
            <img src={counterIcon1} alt="icon-1" />
            <div className="detail">
              <p>€0</p>
              <p>Paid Out Prize in Total</p>
            </div>
          </div>
          <div className="winner">
            <img src={counterIcon2} alt="icon-1" />
            <div className="detail">
              <p>0</p>
              <p>Winner</p>
            </div>
          </div>
          <div className="online_player">
            <img src={counterIcon3} alt="icon-1" />
            <div className="detail">
              <p>0</p>
              <p>Player Online</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;

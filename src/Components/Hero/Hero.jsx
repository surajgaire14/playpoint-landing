import React from "react";
import player from "../../images/player.png"
import coin from "../../images/coin-1.png"
import coin1 from "../../images/coin-2.png"
import cup from "../../images/winner-cup.png"
import "./style.css";

function Hero() {
  return (
    <div className="hero__container">
      <div className="container">
        <div className="blob "><img src={coin} alt="coin" /></div>
        <div className="blob1"><img src={coin1} alt="coin2" /></div>
        <div className="blob2"><img src={cup} alt="cup" /></div>

        <div className="hero">
          <div className="about">
            <h1>Bet and Win Today!</h1>
            <h1>Sports Betting on Aptos Blockchain Under Development</h1>
            <p>
              The fastest, easiest way to bet on sports.NBA, Tennis & Soccer,
              Choose on which team to bet and win
            </p>
            <div className="button">
              <button>Connect Wallet</button>
            </div>
          </div>
          <div className="image">
            <img src={player} alt="player" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

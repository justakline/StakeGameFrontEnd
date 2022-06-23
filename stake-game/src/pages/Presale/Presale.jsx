import { useEffect } from "react";

import "./Presale.css";
import Navigation from "../../components/Nav/Navigation";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
import Footer from "../../components/Footer/Footer";
import Timer from "../../components/Timer/Timer";

import { useTimer } from "react-timer-hook";

const Presale = () => {
  // set the restart function for time countdown
  function timeCountdown() {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 300000);
    console.log("Time: ", time);
    restart(time);
  }

  useEffect(() => {
    timeCountdown();
  }, []);

  const time = new Date();
  time.setSeconds(time.getSeconds() + 600);

  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ time, onExpire: () => console.warn("onExpire called") });

  return (
    <>
      <Navigation />
      <div className="container">
        <div className="wrapper">
          <h1 className="gradientText heading">Presale</h1>
          <br />
          <h2 className="TimerTitle">ENDS IN</h2>
          <div className="countdown">
            <Timer data={days} text="DAYS" />
            <Timer data={hours} text="HOURS" />
            <Timer data={minutes} text="MINUTES" />
            <Timer data={seconds} text="SECONDS" />
          </div>

          <p className="presaleText">
            Dummy Text: Stake.com offers traditional casino games (such as
            slots, blackjack and roulette) and sports betting. It offers video
            streams with live dealers. Users on Stake.com typically do not deal
            with traditional currencies, instead they deposit and withdraw
            cryptocurrencies to and from their betting account.
            <br /> <br />
            instead they deposit and withdraw cryptocurrencies to and from their
            betting account. instead they deposit and withdraw cryptocurrencies
            to and from their betting account.
          </p>
          <h5 className="presaleh5">1 STK = 0.01 AVAX</h5>
          <Input placeholder="Amount" bntText="MAX" />
          <br />
          <button className="cBtn">Invest</button>
          <br />
          <div className="presaleCards">
            <Card heading="TVL Locked" text="100 AVAX" />
            <Card heading="STK Dispersed" text="1000 STK" />
          </div>
          <br />
          <br />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Presale;

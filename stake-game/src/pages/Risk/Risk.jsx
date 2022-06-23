import "./Risk.css";

import Navigation from "../../components/Nav/Navigation";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
import Footer from "../../components/Footer/Footer";

const Risk = () => {
  return (
    <>
      <Navigation />
      <div className="container">
        <div className="wrapper">
          <h1 className="gradientText heading">RISK</h1>
          <p className="subLink">
            Learn how to earn in the <a href="#">documentation!</a>
          </p>

          <div className="RiskCardsWrapper">
            <div className="RiskCard">
              <h2>Possible Gains</h2>
              <ul>
                <li>1 in 2 chance of gaining 1%</li>
                <li>1 in 10 chance of gaining 10%</li>
                <li>1 in 100 chance of gaining 100%</li>
              </ul>
            </div>

            <div className="RiskCard">
              <h2>Possible Losses</h2>
              <ul>
                <li>1 in 20 chance of gaining 10%</li>
                <li>1 in 100 chance of gaining 30%</li>
                <li>1 in 1000 chance of gaining 90%</li>
              </ul>
            </div>

            <div className="lastRow">
              <Card heading="Current Balance" text="100 GUR" />
              <Card heading="Next Change" text="32 minutes" />
            </div>
          </div>
          <br />
          <Input placeholder="Amount" bntText="MAX" />
          <div className="buttons">
            <button className="cBtn">Risk</button>
            <button className="cBtn">Unstake</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Risk;

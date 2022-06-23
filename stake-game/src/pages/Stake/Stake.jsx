import "./Stake.css";
import Navigation from "../../components/Nav/Navigation";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
import Footer from "../../components/Footer/Footer";

const Stake = () => {
  return (
    <div>
      <Navigation />
      <div className="container">
        <div className="wrapper">
          <h1 className="gradientText heading">STAKE</h1>
          <p className="subLink">
            Learn how to earn in the <a href="#">documentation!</a>
          </p>

          <div className="cards">
            <Card heading="Current Balance" text="100 GUR" />
            <Card heading="APR / Daily" text="1%" />
            <Card heading="ROL / 5-Day" text="5.1%" />
            <div className="lastRow">
              <Card heading="Next Reward" text="1 GUR" />
              <Card heading="Next Rebase" text="32 minutes" />
            </div>
          </div>
          <br />
          <Input placeholder="Amount" bntText="MAX" />
          <div className="buttons">
            <button className="cBtn">Stake</button>
            <button className="cBtn">Unstake</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Stake;

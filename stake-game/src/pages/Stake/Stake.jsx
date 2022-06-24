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
            <Card className="CurrentBalance" heading="Current Balance" text="100 STK" />
            <Card  className="APR"  heading="APR / Daily" text="1%" />
            <Card  className="ROI" heading="ROI / 5-Day" text="5.1%" />
            <div className="lastRow">
              <Card  className="Reward"  heading="Next Reward" text="1 GUR" />
              <Card  className="Rebase"  heading="Next Rebase" text="32 minutes" />
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

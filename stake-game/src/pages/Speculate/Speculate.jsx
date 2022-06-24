// inpternal imports
import "./speculate.css";
import Input from "../../components/Input/Input";
import Navigation from "../../components/Nav/Navigation";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";

import { Line } from "react-chartjs-2";
import "chart.js/auto";

const Speculate = () => {
  return (
    <>
      <Navigation />
      <div className="container">
        <div className="wrapper">
          <h1 className="gradientText heading">Speculate</h1>
          <p className="subLink">
            Learn how to earn in the <a href="#">documentation!</a>
          </p>

          <div className="specWrapper">
            <div className="specGrid">
              <div className="firstCard">
                <Card heading="Original Balance" text="100 GUR" />
              </div>
              <Card heading="Current Balance" text="100 GUR" />
              <Card heading="Current Minute" text="32" />
            </div>

            <div className="cartSection">
              <Line
                data={{
                  labels: [
                    "Red",
                    "Blue",
                    "Yellow",
                    "Green",
                    "Purple",
                    "Orange",
                  ],
                  datasets: [
                    {
                      label: "# of Votes",
                      data: [12, 19, 3, 5, 2, 3],
                      // fill: "origin",
                      backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                      ],
                      borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)",
                      ],
                      borderWidth: 1,
                    },
                  ],
                }}
                options={{
                  maintainAspectRatio: false,
                  elements: {
                    line: {
                      tension: 0.3,
                    },
                  },
                }}
              />
            </div>
          </div>

          <Input placeholder="Amount" bntText="MAX" />
          <Input placeholder="Minutes" />
          <div className="buttons">
            <button className="cBtn Speculate">Speculate</button>
            <button className="cBtn Unstake">Unstake</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Speculate;

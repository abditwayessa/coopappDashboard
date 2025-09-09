import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FloatingMenu from "./FloatingMenu";

import coop_app from "./coop_app_logo.png";

const Detail = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        // hour: "2-digit",
        // minute: "2-digit",
        // second: "2-digit",
        // hour12: true,
      });
      const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setCurrentDate(formattedDate);
      setCurrentTime(formattedTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const [data, setData] = useState({
    customers: 68394,
    user_retail: 68292,
    user_business: 102,

    transactions: 127255,
    avgOnboard: 980,
    amount: 1670600430,
    retail_mtd: 2000,
    business_mtd: 50,
    retail_ytd: 60000,
    business_ytd: 18,

    coopbank_num_mtd: 5140,
    coopbank_amt_mtd: 1244019771,
    otherbank_num_mtd: 13329,
    otherbank_amt_mtd: 36508337,
    telebirr_num_mtd: 0,
    telebirr_amt_mtd: 0,
    top_up_num_mtd: 0,
    top_up_amt_mtd: 0,

    coopbank_num_ytd: 24918,
    coopbank_amt_ytd: 1325986163,
    otherbank_num_ytd: 48033,
    otherbank_amt_ytd: 119555155,
    telebirr_num_ytd: 0,
    telebirr_amt_ytd: 0,
    top_up_num_ytd: 3602,
    top_up_amt_ytd: 468151,
  });

  const formatNumber = (number) => {
    if (number >= 1e9) {
      return (number / 1e9).toFixed(2) + "B";
    } else if (number >= 1e6) {
      return (number / 1e6).toFixed(2) + "M";
    } else if (number >= 1e3) {
      return (number / 1e3).toFixed(2) + "K";
    } else {
      return number.toString();
    }
  };
  return (
    <div className="dashboard">
      <div className="dashboard-title">
        <img src={coop_app} alt="logo" className="logo" />
        <h1>Report</h1>
        <div className="users">
          {/* <img src={users} alt="users" />
          <p>username</p> */}
          {/* <p>Date: {currentDate}</p> */}
          <p>
            <br /> {currentDate} <br /> {currentTime}
          </p>
        </div>
      </div>
      <hr />

      <h3 className="labels">Transaction</h3>
      <div className="dashboard-detail">
        <div className="dashboard-mtd">
          <h5>Month to Date</h5>
          <table className="table table-hover ">
            <thead>
              <tr>
                <th>Type</th>
                <th># Transaction</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody className="table-data">
              <tr>
                <td>Coopbank</td>
                <td>{data.coopbank_num_mtd.toLocaleString()}</td>
                <td>
                  {" "}
                  <span
                    title={data.coopbank_amt_mtd.toLocaleString()}
                    style={{ cursor: "pointer" }}
                  >
                    {formatNumber(data.coopbank_amt_mtd)}
                  </span>
                </td>
              </tr>
              <tr>
                <td>Otherbank</td>
                <td>{data.otherbank_num_mtd.toLocaleString()}</td>
                <td>
                  {" "}
                  <span
                    title={data.otherbank_amt_mtd.toLocaleString()}
                    style={{ cursor: "pointer" }}
                  >
                    {formatNumber(data.otherbank_amt_mtd)}
                  </span>
                </td>
              </tr>
              <tr>
                <td>Telebirr</td>
                <td>{data.telebirr_num_mtd.toLocaleString()}</td>
                <td>
                  {" "}
                  <span
                    title={data.telebirr_amt_mtd.toLocaleString()}
                    style={{ cursor: "pointer" }}
                  >
                    {formatNumber(data.telebirr_amt_mtd)}
                  </span>
                </td>
              </tr>
              <tr>
                <td>Top-up</td>
                <td>{data.top_up_num_mtd.toLocaleString()}</td>
                <td>
                  {" "}
                  <span
                    title={data.top_up_amt_mtd.toLocaleString()}
                    style={{ cursor: "pointer" }}
                  >
                    {formatNumber(data.top_up_amt_mtd)}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="dashboard-ytd">
          <h5>Year to Date </h5>{" "}
          <table className="table table-hover ">
            <thead className="thead-dark">
              <tr>
                <th>Type</th>
                <th># Transaction</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody className="table-data">
              <tr>
                <td>Coopbank</td>
                <td>{data.coopbank_num_ytd.toLocaleString()}</td>
                <td>
                  <span
                    title={data.coopbank_amt_ytd.toLocaleString()}
                    style={{ cursor: "pointer" }}
                  >
                    {formatNumber(data.coopbank_amt_ytd)}
                  </span>
                </td>
              </tr>
              <tr>
                <td>Otherbank</td>
                <td>{data.otherbank_num_ytd.toLocaleString()}</td>
                <td>
                  {" "}
                  <span
                    title={data.otherbank_amt_ytd.toLocaleString()}
                    style={{ cursor: "pointer" }}
                  >
                    {formatNumber(data.otherbank_amt_ytd)}
                  </span>
                </td>
              </tr>
              <tr>
                <td>Telebirr</td>
                <td>{data.telebirr_num_ytd.toLocaleString()}</td>
                <td>
                  {" "}
                  <span
                    title={data.telebirr_amt_ytd.toLocaleString()}
                    style={{ cursor: "pointer" }}
                  >
                    {formatNumber(data.telebirr_amt_ytd)}
                  </span>
                </td>
              </tr>
              <tr>
                <td>Top-up</td>
                <td>{data.top_up_num_ytd.toLocaleString()}</td>
                <td>
                  {" "}
                  <span
                    title={data.top_up_amt_ytd.toLocaleString()}
                    style={{ cursor: "pointer" }}
                  >
                    {formatNumber(data.top_up_amt_ytd)}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="dashboard-ytd">
          <h5>Position(All time)</h5>{" "}
          <table className="table table-hover ">
            <thead className="thead-dark">
              <tr>
                <th>Type</th>
                <th># Transaction</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody className="table-data">
              <tr>
                <td>Coopbank</td>
                <td>{data.coopbank_num_ytd.toLocaleString()}</td>
                <td>
                  <span
                    title={data.coopbank_amt_ytd.toLocaleString()}
                    style={{ cursor: "pointer" }}
                  >
                    {formatNumber(data.coopbank_amt_ytd)}
                  </span>
                </td>
              </tr>
              <tr>
                <td>Otherbank</td>
                <td>{data.otherbank_num_ytd.toLocaleString()}</td>
                <td>
                  {" "}
                  <span
                    title={data.otherbank_amt_ytd.toLocaleString()}
                    style={{ cursor: "pointer" }}
                  >
                    {formatNumber(data.otherbank_amt_ytd)}
                  </span>
                </td>
              </tr>
              <tr>
                <td>Telebirr</td>
                <td>{data.telebirr_num_ytd.toLocaleString()}</td>
                <td>
                  {" "}
                  <span
                    title={data.telebirr_amt_ytd.toLocaleString()}
                    style={{ cursor: "pointer" }}
                  >
                    {formatNumber(data.telebirr_amt_ytd)}
                  </span>
                </td>
              </tr>
              <tr>
                <td>Top-up</td>
                <td>{data.top_up_num_ytd.toLocaleString()}</td>
                <td>
                  {" "}
                  <span
                    title={data.top_up_amt_ytd.toLocaleString()}
                    style={{ cursor: "pointer" }}
                  >
                    {formatNumber(data.top_up_amt_ytd)}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />
        {/* <div className="charts-section">
      <div className="chart-container">
        <h2>Product Categories</h2>
        <PieChart
          data={pieChartData}
          colors={["#FF6384", "#36A2EB", "#FFCE56"]}
          width={400}
          height={400}
        />
      </div>
    </div> */}
      </div>
      <h3 className="labels">Customer</h3>
      <div className="dashboard-detail">
        <div className="dashboard-mtd">
          <h5>Month to Date</h5>
          <table className="table table-hover ">
            <thead>
              <tr>
                <th>Type</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody className="table-data">
              <tr>
                <td>Retail</td>
                <td>{data.retail_mtd.toLocaleString()}</td>
              </tr>
              <tr>
                <td>Business</td>
                <td>{data.business_mtd.toLocaleString()}</td>
              </tr>

              <tr>
                <td>Total</td>
                <td>{data.retail_mtd + data.business_mtd}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="dashboard-mtd">
          <h5>Year to Date</h5>
          <table className="table table-hover ">
            <thead>
              <tr>
                <th>Type</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody className="table-data">
              <tr>
                <td>Retail</td>
                <td>{data.retail_mtd.toLocaleString()}</td>
              </tr>
              <tr>
                <td>Business</td>
                <td>{data.business_mtd.toLocaleString()}</td>
              </tr>

              <tr>
                <td>Total</td>
                <td>{data.retail_mtd + data.business_mtd}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="dashboard-mtd">
          <h5>Position(All Time)</h5>
          <table className="table table-hover ">
            <thead>
              <tr>
                <th>Type</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody className="table-data">
              <tr>
                <td>Retail</td>
                <td>{data.user_retail.toLocaleString()}</td>
              </tr>
              <tr>
                <td>Business</td>
                <td>{data.user_business.toLocaleString()}</td>
              </tr>

              <tr>
                <td>Total</td>
                <td>{data.user_retail + data.user_business}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <FloatingMenu />
    </div>
  );
};
export default Detail;

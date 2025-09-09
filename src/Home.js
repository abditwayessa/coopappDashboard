import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FloatingMenu from "./FloatingMenu";
import coop_app from "./coop_app_logo.png";
import users from "./users.png";
import user from "./user.png";
import transaction from "./transaction.png";
import coins from "./coins.png";
import retail from "./retail.png";
import business from "./business.png";
import retail1 from "./retail1.png";
import business1 from "./business1.png";

const useCountAnimation = (targetNumber) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (targetNumber > 0) {
      const incrementAmount = 5000000;
      const speed = 1;

      const intervalId = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount + incrementAmount >= targetNumber) {
            clearInterval(intervalId);
            return targetNumber;
          }
          return prevCount + incrementAmount;
        });
      }, speed);

      return () => clearInterval(intervalId);
    }
  }, [targetNumber]);

  return count;
};

const Dashboard = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
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
  // Test API
  // const [datas, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  // const [btcPrice, setBtcPrice] = useState(null);
  // useEffect(() => {
  //   const fetchBtcPrice = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
  //       );
  //       const data = await response.json();
  //       setBtcPrice(data.bitcoin.usd);
  //     } catch (error) {
  //       console.error("Error fetching BTC price:", error);
  //     }
  //   };

  //   const interval = setInterval(fetchBtcPrice, 1000);
  //   fetchBtcPrice(); // Initial fetch

  //   return () => clearInterval(interval); // Cleanup on component unmount
  // }, []);

  const [data, setData] = useState({
    customers: 68394,
    user_retail: 68292,
    today_retail: 550,
    today_business: 14,
    user_business: 102,
    transactions: 127255,
    avgOnboard: 980,
    amount: 1670600430,
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
        <h1>Coop App Dashboard</h1>
        <div className="users">
          {/* <img src={users} alt="users" />
            <p>username</p> */}
          <p>
            <br /> {currentDate} <br /> {currentTime}
          </p>
        </div>
      </div>
      <hr />
      <h4 className="labels">Overview </h4>
      <hr />
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <div className="icon">
            <img src={user} alt="users" />
          </div>
          <div className="content">
            <div className="title">Total Customers</div>
            <div className="value">
              <span
                title={data.customers.toLocaleString()}
                style={{ cursor: "pointer" }}
              >
                {formatNumber(useCountAnimation(data.customers))}
              </span>
            </div>
            {/* <div className="change">
                <span className="percentage">+55%</span>
                <span className="label">than last week</span>
              </div> */}
          </div>
        </div>

        <div className="dashboard-card">
          <div className="icon">
            <img src={retail} alt="users" />
          </div>
          <div className="content">
            <div className="title">Retail Customers</div>
            <div className="value">
              <span
                title={data.user_retail.toLocaleString()}
                style={{ cursor: "pointer" }}
              >
                {formatNumber(useCountAnimation(data.user_retail))}
              </span>
            </div>
            {/* <div className="change">
                <span className="percentage">+55%</span>
                <span className="label">than last week</span>
              </div> */}
          </div>
        </div>
        <div className="dashboard-card">
          <div className="icon">
            <img src={business} alt="users" />
          </div>
          <div className="content">
            <div className="title">Business Customers</div>
            <div className="value">
              <span
                title={data.user_business.toLocaleString()}
                style={{ cursor: "pointer" }}
              >
                {formatNumber(useCountAnimation(data.user_business))}
              </span>
            </div>
            {/* <div className="change">
                <span className="percentage">+55%</span>
                <span className="label">than last week</span>
              </div> */}
          </div>
        </div>
        <div className="dashboard-card">
          <div className="icon">
            <img src={transaction} alt="users" />
          </div>
          <div className="content">
            <div className="title">No. of Transaction</div>
            <div className="value">
              <span
                title={data.transactions.toLocaleString()}
                style={{ cursor: "pointer" }}
              >
                {formatNumber(useCountAnimation(data.transactions))}
              </span>
            </div>
            {/* <div className="change">
                <span className="percentage">+55%</span>
                <span className="label">than last week</span>
              </div> */}
          </div>
        </div>

        <div className="dashboard-card">
          <div className="icon">
            <img src={coins} alt="users" />
          </div>
          <div className="content">
            <div className="title">Transaction Volume</div>
            <div className="value">
              <span
                title={data.amount.toLocaleString()}
                style={{ cursor: "pointer" }}
              >
                {formatNumber(useCountAnimation(data.amount))}
              </span>
            </div>
            {/* <div className="change">
                <span className="percentage">+55%</span>
                <span className="label">than last week</span>
              </div> */}
          </div>
        </div>
      </div>
      <hr />
      <h4 className="labels">Todays Performance </h4>
      <hr />
      <div className="dashboard-grid-btm">
        {" "}
        <div className="dashboard-card">
          <div className="icon">
            <img src={retail1} alt="users" />
          </div>
          <div className="content">
            <div className="title">Onboarded Retail Customer</div>
            <div className="value">
              <span
                title={data.today_retail.toLocaleString()}
                style={{ cursor: "pointer" }}
              >
                {formatNumber(useCountAnimation(data.today_retail))}
              </span>
            </div>
            {/* <div className="change">
                <span className="percentage">+55%</span>
                <span className="label">than last week</span>
              </div> */}
          </div>
        </div>
        <div className="dashboard-card">
          <div className="icon">
            <img src={business1} alt="users" />
          </div>
          <div className="content">
            <div className="title">Onboarded Business Customer</div>
            <div className="value">
              <span
                title={data.today_business.toLocaleString()}
                style={{ cursor: "pointer" }}
              >
                {formatNumber(useCountAnimation(data.today_business))}
              </span>
            </div>
            {/* <div className="change">
                <span className="percentage">+55%</span>
                <span className="label">than last week</span>
              </div> */}
          </div>
        </div>
        <div className="dashboard-card">
          <div className="icon">
            <img src={transaction} alt="users" />
          </div>
          <div className="content">
            <div className="title">No. of Transaction</div>
            <div className="value">
              <span
                title={data.transactions.toLocaleString()}
                style={{ cursor: "pointer" }}
              >
                {formatNumber(useCountAnimation(data.transactions))}
              </span>
            </div>
            {/* <div className="change">
                <span className="percentage">+55%</span>
                <span className="label">than last week</span>
              </div> */}
          </div>
        </div>
        <div className="dashboard-card">
          <div className="icon">
            <img src={business1} alt="users" />
          </div>
          <div className="content">
            <div className="title">Transaction Volume</div>
            <div className="value">
              <span
                title={data.today_business.toLocaleString()}
                style={{ cursor: "pointer" }}
              >
                {formatNumber(useCountAnimation(data.today_business))}
              </span>
            </div>
            {/* <div className="change">
                <span className="percentage">+55%</span>
                <span className="label">than last week</span>
              </div> */}
          </div>
        </div>
      </div>
      <hr />
      <FloatingMenu />
    </div>
  );
};

export default Dashboard;

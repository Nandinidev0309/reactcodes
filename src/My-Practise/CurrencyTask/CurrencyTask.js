import React from "react";
import { HiArrowsRightLeft } from "react-icons/hi2";
import "./currencyTask.css";

function CurrencyTask() {
  return (
    <div className="currency-converter">
      {/* <center> */}
      <h1 className="converter-title">Currency Converter</h1>

      <form className="converter-form">
        <div className="form-group">
          <label className="form-label">Enter Amount </label> <nbsp></nbsp>
          <input type="number" className="form-input" required />
        </div>

        <div className="form-group form-currency-group ">
          <div className="form-section">
            <label className="form-label">From</label>
            <div className="currency-select">
              <img
                src="https://www.worldometers.info//img/flags/small/tn_us-flag.gif"
                alt="flag"
                // height={50}
                // width={70}
              />
              <select className="currency-dropdown">
                <option value="USD" selected>
                  USD
                </option>
                <option value="INR">INR</option>
                <option value="NPR">NPR</option>
              </select>
            </div>
          </div>
          {/* .................................................... */}
          <div className="swap-icon">
            <HiArrowsRightLeft />
          </div>

          {/* .......... */}
          <div className="form-section">
            <label className="form-label">From</label>
            <div className="currency-select">
              <img
                src="https://www.worldometers.info//img/flags/small/tn_in-flag.gif"
                alt="flag"
                // height={50}
                // width={70}
              />
              <select className="currency-dropdown">
                <option value="USD" selected>
                  USD
                </option>
                <option value="INR">INR</option>
                <option value="NPR">NPR</option>
              </select>
            </div>
          </div>
        </div>
        {/* ...... */}
        <div>
          <button type="submit" className="submit-button">
            Get Exchange Rate
          </button>
          <p className="exchange-rate-result">1,000 USD =83620.80 INR</p>
        </div>
      </form>
      {/* </center> */}
    </div>
  );
}

export default CurrencyTask;

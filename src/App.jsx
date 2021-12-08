import { useState } from "react";
import AppLogo from "./logo.svg";
import "./App.scss";

function App() {
  const [billValue, setBillValue] = useState("");
  const [noOfPeople, setNoOfPeople] = useState("");

  return (
    <div className="app">
      <img src={AppLogo} alt="logo" className="splitter__logo" />
      <div className="splitter">
        <div className="splitter__left">
          <div className="splitter__left--bill">
            <label htmlFor="bill">Bill</label>
            <input
              type="text"
              name="bill"
              id="bill"
              placeholder="$"
              value={billValue}
              onChange={({ target }) => {
                setBillValue(target.value);
              }}
            />
          </div>

          <div className="splitter__left--selectTip">
            <h1 className="splitter__left--selectTip--label">Select Tip %</h1>
            <div className="splitter__left--selectTip--grid">
              <div className="splitter__left--selectTip--grid-grid1">
                <button>5%</button>
                <button>10%</button>
                <button>15%</button>
              </div>

              <div className="splitter__left--selectTip--grid-grid2">
                <button>25%</button>
                <button>10%</button>
                <button>50%</button>
              </div>
            </div>
          </div>

          <div className="splitter__left--people">
            <label htmlFor="bill">Number of People</label>
            <input
              type="text"
              name="noOfPeople"
              id="noOfPeople"
              placeholder="$"
              value={noOfPeople}
              onChange={({ target }) => {
                setNoOfPeople(target.value);
              }}
            />
          </div>
        </div>

        <div className="splitter__right">
          <div className="splitter__right--top">
            <div className="splitter__right--top--tipAmount">
              <div className="splitter__right--top--tipAmount--label">
                <h1>Tip Amount</h1>
                <h4>/ person</h4>
              </div>
              <h1 className="splitter__right--top--total--price">$80.00</h1>
            </div>

            <div className="splitter__right--top--total">
              <div className="splitter__right--top--total--label">
                <h1>Total</h1>
                <h4>/ person</h4>
              </div>
              <h1 className="splitter__right--top--total--price">$32.98</h1>
            </div>
          </div>

          <button className="splitter__right--btn">Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;

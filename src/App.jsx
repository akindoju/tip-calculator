import { useState } from "react";
import AppLogo from "./logo.svg";
import "./App.scss";

function App() {
  const [billValue, setBillValue] = useState("");
  const [noOfPeople, setNoOfPeople] = useState("");

  return (
    <div className="app">
      <div className="splitter">
        <img src={AppLogo} alt="logo" className="splitter__logo" />
        <div className="splitter__main">
          <div className="splitter__main--left">
            <div className="splitter__main--bill">
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

            <div className="splitter__main--selectTip">
              <h1>Select Tip %</h1>
            </div>

            <div className="splitter__main--people">
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

          <div className="splitter__main--right"></div>
        </div>
      </div>
    </div>
  );
}

export default App;

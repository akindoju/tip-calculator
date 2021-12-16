import { useEffect, useState } from "react";
import AppLogo from "./logo.svg";
import "./App.scss";

function App() {
  const [billValue, setBillValue] = useState("");
  const [tipValue, setTipValue] = useState("");
  const [customTip, setCustomTip] = useState("");
  const [noOfPeople, setNoOfPeople] = useState("");
  const [tipAmount, setTipAmount] = useState("0.00");
  const [total, setTotal] = useState("0.00");
  // const [isInputEmpty, setIsInputEmpty] = useState(false);

  useEffect(() => {
    const finalTipAmount = (billValue * tipValue) / 100;
    setTipAmount(finalTipAmount);
    const finalTotalAmount = billValue / noOfPeople + tipAmount;
    console.log(tipAmount, "tipAmount");
    // setTotal(finalTotalAmount);
  }, [tipAmount, tipValue, billValue, noOfPeople]);

  useEffect(() => {
    if (customTip !== "") {
      setTipValue(customTip);
    } else {
      setTipValue(0);
    }
  }, [customTip]);

  return (
    <div className="app">
      <img src={AppLogo} alt="logo" className="splitter__logo" />
      <div className="splitter">
        <div className="splitter__left">
          <div className="splitter__left--bill">
            <label htmlFor="bill">Bill</label>
            <input
              // className={isInputEmpty && "emptyInputTag"}
              autoComplete="off"
              type="text"
              name="bill"
              id="bill"
              placeholder="$"
              value={billValue}
              onChange={({ target }) => {
                setTipValue(0);
                setBillValue(Number(target.value.trim()));
                isNaN(target.value) && setBillValue("");
              }}
            />
          </div>

          <div className="splitter__left--selectTip">
            <h1 className="splitter__left--selectTip--label">Select Tip %</h1>
            <div className="splitter__left--selectTip--grid">
              <div className="splitter__left--selectTip--grid-grid1">
                <button
                  onClick={() => {
                    setTipValue(5);
                  }}
                >
                  5%
                </button>
                <button
                  onClick={() => {
                    setTipValue(10);
                  }}
                >
                  10%
                </button>
                <button
                  onClick={() => {
                    setTipValue(15);
                  }}
                >
                  15%
                </button>
              </div>

              <div className="splitter__left--selectTip--grid-grid2">
                <button
                  onClick={() => {
                    setTipValue(25);
                  }}
                >
                  25%
                </button>
                <button
                  onClick={() => {
                    setTipValue(50);
                  }}
                >
                  50%
                </button>
                <div>
                  <input
                    autoComplete="off"
                    type="text"
                    placeholder="Custom"
                    value={customTip}
                    onChange={({ target }) => {
                      setCustomTip(Number(target.value.trim()));
                      isNaN(target.value) && setCustomTip("");
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="splitter__left--people">
            <label htmlFor="bill">Number of People</label>
            <input
              // className={isInputEmpty && "emptyInputTag"}
              autoComplete="off"
              type="text"
              name="noOfPeople"
              id="noOfPeople"
              placeholder="$"
              value={noOfPeople}
              onChange={({ target }) => {
                setTipValue(0);
                setNoOfPeople(Number(target.value.trim()));
                isNaN(target.value) && setNoOfPeople("");
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
              <h1 className="splitter__right--top--total--price">
                ${tipAmount === "0.00" ? "0.00" : tipAmount.toFixed(2)}
              </h1>
            </div>

            <div className="splitter__right--top--total">
              <div className="splitter__right--top--total--label">
                <h1>Total</h1>
                <h4>/ person</h4>
              </div>
              <h1 className="splitter__right--top--total--price">
                ${total === "0.00" ? "0.00" : total.toFixed(2)}
              </h1>
            </div>
          </div>

          <button className="splitter__right--btn">Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;

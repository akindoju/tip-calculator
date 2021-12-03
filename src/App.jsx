import { useState } from "react";
import AppLogo from "./logo.svg";
import "./App.scss";

function App() {
  const [billValue, setBillValue] = useState("");

  return (
    <div className="app">
      <div className="splitter">
        <img src={AppLogo} alt="logo" className="splitter__logo" />
        <div className="splitter__main">
          <div className="splitter__main--bill">
            <label htmlFor="bill">Bill</label>
            <input type="text" name="bill" id="bill" placeholder="$" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";

let ProfitAndLoss = () => {
  let [initial, setInitial] = useState(0);
  let [quantity, setIQuantity] = useState(0);
  let [current, setCurrent] = useState(0);
  let [output, setOutput] = useState("");
  let [flag,setFlag] = useState(false);

  let checkProfitAndLoss = () => {
    if (initial > current) {
      let loss = (initial - current) / quantity;
      let lossPercentage = (loss / initial) * 100;
      setOutput(
        `Your loss is ${loss}, loss rate is ${lossPercentage.toFixed(2)}%`
      );
      setFlag(false);
    } else if (current > initial) {
      let profit = (current - initial) / quantity;
      let profitPercentage = (profit / initial) * 100;
      setOutput(
        `Your profit is ${profit}, growth rate is ${profitPercentage.toFixed(
          2
        )}%`
      );
      setFlag(true);
    } else {
      setOutput("Be patient your profit will grow");
    }
  };

  return (
    <div class="container">
      <h1>
        <span>Profit And Loss </span>Calculator
      </h1>
      <input
        type="number"
        placeholder="Initial Investment"
        onChange={(e) => setInitial(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        onChange={(e) => setIQuantity(e.target.value)}
      />
      <input
        type="number"
        placeholder="Current Rate"
        onChange={(e) => setCurrent(e.target.value)}
      />
      <button onClick={checkProfitAndLoss}>Check</button>
      <h2 style={{color:`${flag? '#22c55e' : '#dc2626'}`}}>{output}</h2>
    </div>
  );
};
export default ProfitAndLoss;

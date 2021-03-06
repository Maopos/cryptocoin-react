import React, { useState } from "react";
import "./hookStyle.css";

const useCoin = (label, firstState, options) => {
  const [state, updateState] = useState(firstState);

  const SelectCoin = () => (
    <div id="frag">
      <label>{label}</label>
      <select onChange={(e) => updateState(e.target.value)} value={state}>
        <option value="">-- Select --</option>
        {options.map((i) => (
          <option key={i.id} value={i.id}>
            {i.name}
          </option>
        ))}
      </select>
    </div>
  );
  return [state, SelectCoin, updateState];
};

export default useCoin;

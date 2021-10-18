import React, { useState } from "react";
import "./hookStyle.css";

const useCrypto = (label, firstState, options) => {
  const [state, updateState] = useState(firstState);
    
    
  const SelectCrypto = () => (
    <div id="frag">
      <label>{label}</label>
      <select onChange={(e) => updateState(e.target.value)} value={state}>
        <option value="">-- Select --</option>
        {options.map((i) => (
          <option key={i.CoinInfo.Id} value={i.CoinInfo.Name}>
            {i.CoinInfo.FullName}
          </option>
        ))} 
      </select>
    </div>
  );
  return [state, SelectCrypto, updateState];
};

export default useCrypto;

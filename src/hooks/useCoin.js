import React, { Fragment, useState } from "react";

const useCoin = (label, firstState, options) => {
  const [state, updateState] = useState(firstState);

  const Select = () => (
    <Fragment>
      <label>{label}</label>
      <select onChange={(e) => updateState(e.target.value)} value={state}>
        <option value="">-- Select --</option>
        {options.map((i) => (
          <option key={i.id} value={i.id}>
            {i.name}
          </option>
        ))}
      </select>
    </Fragment>
  );
  return [state, Select, updateState];
};

export default useCoin;

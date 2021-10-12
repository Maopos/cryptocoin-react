import React from "react";
import "./styles.css";
import useCoin from "../hooks/useCoin";

const Form = () => {
  const COINS = [
    {
      id: "USD",
      name: "American Dollar",
    },
    {
      id: "MXN",
      name: "Mexican Peso",
    },
    {
      id: "COP",
      name: "Colombian Peso",
    },
    {
      id: "EUR",
      name: "Euro",
    },
    {
      id: "GBP",
      name: "British pound sterling",
    }
  ];

  const [state, Select] = useCoin("Select a currency", '', COINS);

  return (
    <form action="">
      <Select ></Select>
      <button type="submit" className="click">
        Show me...
      </button>
    </form>
  );
};

export default Form;

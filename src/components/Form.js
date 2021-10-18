import React, { useEffect, useState } from "react";
import "./styles.css";
import useCoin from "../hooks/useCoin";
import useCrypto from "../hooks/useCrypto";
import axios from "axios";
import Error from "./Error";

const Form = ({saveCoin, saveCrypto}) => {
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
    },
  ];

  const [cryptoList, saveCryptoList] = useState([])

  // useCoin hook
  const [coin, SelectCoin] = useCoin("Select currency", "", COINS);

  // useCrypto hook
  const [crypto, SelectCrypto] = useCrypto("Select Crypto", "", cryptoList);

  // Error state
  const [error, saveError] = useState(false);

  // axios api
  useEffect(() => {
      const axiosApi = async () => {
        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
        const result = await axios.get(url);
        saveCryptoList(result.data.Data);
        
      }
      axiosApi();
  }, [])

  // Submit
  const showResult = (e) => {
    e.preventDefault();
    if (coin === '' || crypto === '') {
      saveError(true);
      return;
    }
    saveError(false);
    saveCoin(coin);
    saveCrypto(crypto);
  };

  return (
    <form onSubmit={showResult}>
      {error ? <Error message='All fields are required...'></Error> : null}
      <SelectCoin></SelectCoin>
      <SelectCrypto></SelectCrypto>
      <button type="submit" className="click">
        Show me...
      </button>
    </form>
  );
};

export default Form;

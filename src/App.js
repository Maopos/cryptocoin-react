import { useState, useEffect } from "react";
import "./App.css";
import logo from "./logo.svg";
import Form from "./components/Form";
import Result from "./components/Result";
import Spinner from "./components/Spinner";
import axios from "axios";

function App() {
  const [coin, saveCoin] = useState("");
  const [crypto, saveCrypto] = useState("");
  const [result, saveResult] = useState([]);

  // Spinner state
  const [loading, saveLoading] = useState(false);

  useEffect(() => {
    // Axios Api
    const axiosApi = async () => {
      // Stop first execution
      if (coin === "") {
        return;
      }

      // Api
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`;
      const result = await axios.get(url);

      // Show Spinner
      saveLoading(true);

      setTimeout(() => {
        saveLoading(false);
        saveResult(result.data.DISPLAY[crypto][coin]);
      }, 3000);
    };
    axiosApi();
  }, [coin, crypto]);

  return (
    <div className="App">
      <h1>Crypto React</h1>
      <header className="App-header">
        <div className="divs">
          <img id="logo" src={logo} alt="" />
        </div>
        <div className="divs">
          <h2>Instant Quote...</h2>
          <Form saveCoin={saveCoin} saveCrypto={saveCrypto}></Form>
          {loading ? <Spinner></Spinner> : <Result result={result}></Result>}
        </div>
      </header>
    </div>
  );
}

export default App;

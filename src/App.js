import "./App.css";
import logo from "./logo.svg";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <h1>Crypto React</h1>
      <header className="App-header">
        <div className="divs">
          <img id="logo" src={logo} alt="" />
        </div>
        <div className="divs">
          <h2>Instant Quote...</h2>
          <Form></Form>
        </div>
      </header>
    </div>
  );
}

export default App;

// import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Title from "./components/Title";

function App() {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/">
            <h1>AGAVES FOR SALE</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
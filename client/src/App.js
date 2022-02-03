// import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {Switch, Route} from 'react-router-dom';
// import "./App.css"

import Welcome from "./components/Welcome";
// import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import ProductList from "./components/ProductList";
import Contact from "./components/Contact";

function App() {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  return (
    <Router>
      <Route exact path="/">
        <Welcome />
      </Route>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/products">
          <ProductList />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
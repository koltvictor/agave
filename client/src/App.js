import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {Switch, Route} from 'react-router-dom';

import Image1  from './components/agave.png'
import Welcome from "./components/Welcome";
// import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import ProductList from "./components/ProductList";
import Contact from "./components/Contact";

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
      fetch("/api/products")
          .then((r) => r.json())
          .then((data) => setProducts(data));
  }, []);

  return (
    <Router>
      <Route exact path="/">
        <Welcome 
        Image1 = {Image1}/>
      </Route>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/products">
          <ProductList 
          products={products}/>
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
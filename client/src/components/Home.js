

import React from "react";
import Header from "./Header";
import { Switch, Route } from "react-router-dom";

import ProductList from "./ProductList";
import About from "./About.js";
import Contact from "./Contact.js";

export default function Home() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/home">
          <h1>Home</h1>
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
    </div>
  );
}
import Header from './Header';
import Image3 from '../agavedrawing.png'
import React from "react";

export default function Home() {
  return (
    <div>
      <Header />
      <br/>
      <h1 className="navHeader">Hello & Welcome</h1>
      <h3 className="navHeader">to our gardens of Agave americana!</h3>
      <h3 className="navHeader">Please feel free to peruse our gallery, view our agaves, and contact us to set up an appointment.</h3>
      <br/>
      <img src={Image3} className="contactImg" alt="garden logo" />
    </div>
  );
}
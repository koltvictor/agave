// import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";

function App() {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
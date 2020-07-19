import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// Components
import Navigation from "./views/Navigation";

function App() {
  return (
    <Router>
      <Navigation />
    </Router>
  );
}

export default App;

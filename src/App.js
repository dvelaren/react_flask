import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Redux
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";

// Components
import Navigation from "./views/Navigation";

function App() {
  return (
    <ReduxProvider store={store}>
      <Router>
        <Navigation />
      </Router>
    </ReduxProvider>
  );
}

export default App;

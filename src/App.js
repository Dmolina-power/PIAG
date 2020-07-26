import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ButtonAppBar from "./Components/NavBar";

// STYLE
import "./App.css";

// PAGES
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <ButtonAppBar />

        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
      </Router>
    </div>
  );
}

export default App;

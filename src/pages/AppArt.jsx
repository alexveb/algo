import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Article from "./Article";

const AppT = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/article/:id" component={Article} />
    </Router>
  );
};

export default AppT;

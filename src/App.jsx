import React from "react";
import { Route, Router } from "wouter";

import './App.css';

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Route path="/" component={Home} />
        <Route path="/headphones" component={Headphones} />
        <Route path="/speakers" component={Speakers} />
        <Route path="/earphones" component={Earphones} />
      </Router>

    </>
  );
}

export default App;

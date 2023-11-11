import React from "react";
import { Route, Router } from "wouter";

import './App.css';

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {

  return (
    <>
      <Navbar />
      <Home />

    </>
  )
}

export default App;

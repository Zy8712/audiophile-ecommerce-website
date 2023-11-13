import React from "react";
import { Route, Router } from "wouter";

import './App.css';

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";

import XX99MarkIIHeadphones from "./pages/headphones-product-details-pages/XX99MarkIIHeadphones";
import XX99MarkIHeadphones from "./pages/headphones-product-details-pages/XX99MarkIHeadphones";
import XX59Headphones from "./pages/headphones-product-details-pages/XX59Headphones";
import ZX9Speaker from "./pages/speakers-product-details-pages/ZX9Speaker";
import ZX7Speaker from "./pages/speakers-product-details-pages/ZX7Speaker";
import YX1WirelessEarphones from "./pages/earphones-product-details-pages/YX1WirelessEarphones";

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Route path="/" component={Home} />
        <Route path="/headphones" component={Headphones} />
        <Route path="/speakers" component={Speakers} />
        <Route path="/earphones" component={Earphones} />
        <Route path="/headphones/xx99markiiheadphones" component={XX99MarkIIHeadphones} />
        <Route path="/headphones/xx99markiheadphones" component={XX99MarkIHeadphones} />
        <Route path="/headphones/xx59headphones" component={XX59Headphones} />
        <Route path="/speakers/zx9speaker" component={ZX9Speaker} />
        <Route path="/speakers/zx7speaker" component={ZX7Speaker} />
        <Route path="/earphones/yx1wirelessearphones" component={YX1WirelessEarphones} />
      </Router>

    </>
  );
}

export default App;

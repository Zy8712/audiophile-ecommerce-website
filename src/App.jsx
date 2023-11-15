import React from "react";
import { Route, Router, useRouter, useLocation } from "wouter";

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

const Scope = (props) => {
  const router = useRouter();
  const [parentLocation] = useLocation();

  const nestedBase = `${router.base}${props.base}`;

  // don't render anything outside of the scope
  if (!parentLocation.startsWith(nestedBase)) return null;

  // we need key to make sure the router will remount if the base changes
  return (
    <Router base={nestedBase} key={nestedBase}>
      {props.children}
    </Router>
  );
};

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Route path="/" component={Home} />
        <Scope base="/headphones">
          <Route path="/xx99markiiheadphones" component={XX99MarkIIHeadphones} />
          <Route path="/xx99markiheadphones" component={XX99MarkIHeadphones} />
          <Route path="/xx59headphones" component={XX59Headphones} />
          <Route path="/" component={Headphones} />
        </Scope>

        <Scope base="/speakers">
          <Route path="/zx9speaker" component={ZX9Speaker} />
          <Route path="/zx7speaker" component={ZX7Speaker} />
          <Route path="/" component={Speakers} />
        </Scope>

        <Scope base="/earphones">
          <Route path="/yx1wirelessearphones" component={YX1WirelessEarphones} />
          <Route path="/" component={Earphones} />
        </Scope>

      </Router>

    </>
  );
}

export default App;

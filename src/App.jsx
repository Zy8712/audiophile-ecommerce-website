import React, { useState, useEffect } from "react";
import { Route, Router } from "wouter";

import './App.css';

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import Checkout from "./pages/Checkout";

import XX99MarkIIHeadphones from "./pages/headphones-product-details-pages/XX99MarkIIHeadphones";
import XX99MarkIHeadphones from "./pages/headphones-product-details-pages/XX99MarkIHeadphones";
import XX59Headphones from "./pages/headphones-product-details-pages/XX59Headphones";
import ZX9Speaker from "./pages/speakers-product-details-pages/ZX9Speaker";
import ZX7Speaker from "./pages/speakers-product-details-pages/ZX7Speaker";
import YX1WirelessEarphones from "./pages/earphones-product-details-pages/YX1WirelessEarphones";
import SiteFooter from "./components/SiteFooter";

import ScrollToTop from "./pages/ScrollToTop";
import Cart from "./components/Cart";

function App() {

  // Show/Hide Cart Popup Menu
  const [showCart, setShowCart] = useState(false);
  const toggleCart = () => {
    setShowCart(!showCart);
  }

  const [xx99m2ItemCount, setXX99M2ItemCount] = useState(0);
  const updateXX99M2ItemCount = (itemCount) => {
    setXX99M2ItemCount(itemCount);
  };

  const [xx99m1ItemCount, setXX99M1ItemCount] = useState(0);
  const updateXX99M1ItemCount = (itemCount) => {
    setXX99M1ItemCount(itemCount);
  };

  const [xx59ItemCount, setXX59ItemCount] = useState(0);
  const updateXX59ItemCount = (itemCount) => {
    setXX59ItemCount(itemCount);
  };

  const [zx9ItemCount, setZX9ItemCount] = useState(0);
  const updateZX9ItemCount = (itemCount) => {
    setZX9ItemCount(itemCount);
  };

  const [zx7ItemCount, setZX7ItemCount] = useState(0);
  const updateZX7ItemCount = (itemCount) => {
    setZX7ItemCount(itemCount);
  };

  const [yx1ItemCount, setYX1ItemCount] = useState(0);
  const updateYX1ItemCount = (itemCount) => {
    setYX1ItemCount(itemCount);
  };

  const resetCart = () => {
    setXX99M2ItemCount(0);
    setXX99M1ItemCount(0);
    setXX59ItemCount(0);
    setZX9ItemCount(0);
    setZX7ItemCount(0);
    setYX1ItemCount(0);
  };

  // Total Number of Items in Card
  const [cartItemCount, setCartItemCount] = useState(0);
  useEffect(() => {
    // Calculate the total count whenever any individual item count changes
    const totalItems = xx99m1ItemCount + xx99m2ItemCount + xx59ItemCount + zx9ItemCount + zx7ItemCount + yx1ItemCount;
    setCartItemCount(totalItems);
  }, [xx99m1ItemCount, xx99m2ItemCount, xx59ItemCount, zx9ItemCount, zx7ItemCount, yx1ItemCount]);

  // Calculate Current Bill
  const [totalBill, setTotalBill] = useState(0);
  useEffect(() => {
    // Calculate the total count whenever any individual item count changes
    const calcTotalBill = (xx99m1ItemCount * 1750) + (xx99m2ItemCount * 2999) + (xx59ItemCount * 899) + (zx9ItemCount * 4500) + (zx7ItemCount * 3500) + (yx1ItemCount * 599);
    setTotalBill(calcTotalBill);
  }, [xx99m1ItemCount, xx99m2ItemCount, xx59ItemCount, zx9ItemCount, zx7ItemCount, yx1ItemCount]);

  return (
    <>
      <Router>

        <Navbar toggleCart={toggleCart} showCart={showCart} cartItemCount={cartItemCount} />
        <ScrollToTop />
        <Route path="/" component={Home} />
        <Route path="/headphones" component={Headphones} />
        <Route path="/speakers" component={Speakers} />
        <Route path="/earphones" component={Earphones} />

        <Route path="/checkout">
          {(params) => (
            <Checkout
              cartItemCount={cartItemCount}
              totalBill={totalBill}
            />
          )}
        </Route>

        <Route path="/headphones/xx99markiiheadphones">
          {(params) => (
            <XX99MarkIIHeadphones
              xx99m2ItemCount={xx99m2ItemCount}
              updateXX99M2ItemCount={updateXX99M2ItemCount}
            />
          )}
        </Route>

        <Route path="/headphones/xx99markiheadphones">
          {(params) => (
            <XX99MarkIHeadphones
              xx99m1ItemCount={xx99m1ItemCount}
              updateXX99M1ItemCount={updateXX99M1ItemCount}
            />
          )}
        </Route>

        <Route path="/headphones/xx59headphones">
          {(params) => (
            <XX59Headphones
              xx59ItemCount={xx59ItemCount}
              updateXX59ItemCount={updateXX59ItemCount}
            />
          )}
        </Route>

        <Route path="/speakers/zx9speaker">
          {(params) => (
            <ZX9Speaker
              zx9ItemCount={zx9ItemCount}
              updateZX9ItemCount={updateZX9ItemCount}
            />
          )}
        </Route>

        <Route path="/speakers/zx7speaker">
          {(params) => (
            <ZX7Speaker
              zx7ItemCount={zx7ItemCount}
              updateZX7ItemCount={updateZX7ItemCount}
            />
          )}
        </Route>

        <Route path="/earphones/yx1wirelessearphones">
          {(params) => (
            <YX1WirelessEarphones
              yx1ItemCount={yx1ItemCount}
              updateYX1ItemCount={updateYX1ItemCount}
            />
          )}
        </Route>

        <Cart
          toggleCart={toggleCart}
          showCart={showCart}

          cartItemCount={cartItemCount}
          totalBill={totalBill}

          xx99m2ItemCount={xx99m2ItemCount}
          updateXX99M2ItemCount={updateXX99M2ItemCount}

          xx99m1ItemCount={xx99m1ItemCount}
          updateXX99M1ItemCount={updateXX99M1ItemCount}

          xx59ItemCount={xx59ItemCount}
          updateXX59ItemCount={updateXX59ItemCount}

          zx9ItemCount={zx9ItemCount}
          updateZX9ItemCount={updateZX9ItemCount}

          zx7ItemCount={zx7ItemCount}
          updateZX7ItemCount={updateZX7ItemCount}

          yx1ItemCount={yx1ItemCount}
          updateYX1ItemCount={updateYX1ItemCount}

          resetCart={resetCart}
        />

        <SiteFooter />

      </Router>

    </>
  );
}

export default App;

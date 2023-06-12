import React from "react";

import {
  Footer,
  Blog,
  Possibility,
  Feature,
  WhatGPT3,
  Header,
} from "./containers";
import { CTA, Brand, NavBar } from "./components";
import './App.css'

const App = () => {
  return (
    <div className="APP">
      <div className="gradient__bg">
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Feature />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
      <></>
    </div>
  );
};

export default App;

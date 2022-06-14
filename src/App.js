import React, { useState } from "react";
import { BsFillMoonFill } from "react-icons/bs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeView, DetailsView } from "./views";

import "./App.css";

function App() {
  const [toggle, setToggle] = useState(false);
  const switchButton = () => {
    setToggle(!toggle);
  };

  return (
    <div className={toggle === true ? "cover-bg dark" : "cover-bg"}>
      <header id="header" className="app__header">
        <div className="header_container">
          <h3>Where in the world?</h3>    
          <span className="nav-link" onClick={() => switchButton()}>
            <BsFillMoonFill className="icon-moon" />
            <h5>Dark Mode</h5>
          </span>
        </div>
      </header>

      <main className="app__main">
        <div className="main_container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/details/:name" element={<DetailsView />} />
          </Routes>
        </BrowserRouter>
        </div>
      </main>
    </div>
  );
}

export default App;

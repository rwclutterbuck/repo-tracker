import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, About } from "./pages";
import { NavBar } from "./components";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

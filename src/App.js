import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Vancouver" />
      <Footer />
      <header className="App-header"></header>
    </div>
  );
}

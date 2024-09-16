import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Info from "./components/info/Info";
import About from "./components/about/About";
import Interests from "./components/interests/Interests";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <main className="main">
        <Info />
        <About />
        <Interests />
        <Footer />
      </main>
    </>
  );
}

export default App;

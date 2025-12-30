import React from "react";
import Navbar from "./components/Navbar";
import RoamingEU from "./pages/RoamingEU";
import Footer from "./components/Footer";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app-root">
      <Navbar />
      <RoamingEU />
      <Footer />
    </div>
  );
};

export default App;

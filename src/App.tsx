import React from "react";
import Navbar from "./components/Navbar";
import RoamingEU from "./pages/RoamingEU";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app-root">
      <Navbar />

      <RoamingEU />
    </div>
  );
};

export default App;

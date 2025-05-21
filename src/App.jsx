import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Section from "./components/Section";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Survey from "./components/Survey";
import DataConsole from "./components/DataConsole";
import MISStat from "./components/MISStat";
import CrossTab from "./components/CrossTab";
import Dashboard from "./components/Dashboard";
import MenuPage from "./components/MenuPage";
import "./index.css";

function App() {
  return (
    <main className="bg-[#cdcacd] h-screen -z-10">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/survey" element={<Survey />} />
          <Route
            path="/section"
            element={
              <>
                <Header />
                <Section />
              </>
            }
          >
            <Route path="dataconsole" element={<DataConsole />} />
            <Route path="misstat" element={<MISStat />} />
            <Route path="crosstab" element={<CrossTab />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </main>
    // <main className="bg-[#cdcacd] h-screen -z-10">
    // {/* <Header /> */}
    // {/* <Section /> */}
    // {/* <LandingPage /> */}
    // {/* <Login /> */}
    // {/* <Survey /> */}
    // <MenuPage />
    // </main>
  );
}

export default App;

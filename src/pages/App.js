import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppHeader from "../component/AppHeader/AppHeader";
import LandingPage from "./LandingPage";
import ProjectPage from "./ProjectPage";
import AboutPage from "./AboutPage";
import ResumePage from "./ResumePage";
import ScrollToTop from "../component/ScrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppHeader />
        <ScrollToTop>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/projects" element={<ProjectPage />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/resume" element={<ResumePage />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;

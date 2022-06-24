import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppHeader from "./component/AppHeader/AppHeader";
import LandingPage from "./pages/LandingPage";
import ProjectPage from "./pages/ProjectPage";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import ScrollToTop from "./component/ScrollToTop";

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

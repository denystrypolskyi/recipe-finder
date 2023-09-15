import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./assets/components/pages/SearchPage";
import ResultPage from "./assets/components/pages/ResultPage";
import NavBar from "./assets/components/common/NavBar";
import NotFoundPage from "./assets/components/pages/NotFoundPage";

function App() {
  return (
    <Router>
      <div className="h-full min-h-screen bg-orange-200">
        <NavBar />
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/result/:query" element={<ResultPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Mentors from "./pages/Mentors";
import Healthcare_Professional from "./pages/Healthcare_Professional";
import Volunteer from "./pages/Volunteer";
import JoinForm from "./pages/JoinForm";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/members" element={<Healthcare_Professional />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/join" element={<JoinForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

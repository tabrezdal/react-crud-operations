import React from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NoPageFound from './pages/NoPageFound';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPageFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
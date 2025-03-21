import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/Home/home';
import NotHomePage from './pages/NotHome/notHome';
import './App.css';

const App = () => {
  return (
    <div>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<h1>My Website Yay!</h1>} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/nothome" element={<NotHomePage />} />
          </Routes>
        </div>
    </div>
  );
};

export default App;
  
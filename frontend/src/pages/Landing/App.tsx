import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { HomePage } from './pages/HomePage';
import { FavouritesPage } from './pages/FavouritesPage';
import { QuizPage } from './pages/QuizPage';
import { AboutPage } from './pages/AboutPage';
export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>);

}
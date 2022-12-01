import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import LandingPage from './pages/landingPage/landingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LandingPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

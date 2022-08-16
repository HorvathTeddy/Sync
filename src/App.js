import React from 'react'
//import "@fontsource/encode-sans-expanded";
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages'
import './App.css'

const App = () => {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;

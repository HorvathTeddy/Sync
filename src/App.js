import React from 'react'
//import "@fontsource/encode-sans-expanded";
import Navbar from './components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;

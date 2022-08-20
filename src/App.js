import React from 'react'
//import "@fontsource/encode-sans-expanded";
import Home from './pages'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Register from "./pages/Register";
import Reset from "./pages/Reset";
import Dashboard from "./pages/Dashboard";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} exact />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/reset" element={<Reset />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
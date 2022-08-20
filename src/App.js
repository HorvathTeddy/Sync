import React from 'react'
//import "@fontsource/encode-sans-expanded";
import Home from './pages'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SigninPage from './pages/signin'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} exact />
        <Route path='/login' element={<SigninPage/>} exact />
      </Routes>
    </Router>
  );
}

export default App;
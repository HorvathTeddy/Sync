import React from 'react'
//import "@fontsource/encode-sans-expanded";
import Home from './pages'
import './App.css'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SigninPage from './pages/signin'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' element={<Home/>} exact />
        <Route path='/signin' element={<SigninPage/>} exact />
      </Switch>
    </Router>
  );
}

export default App;

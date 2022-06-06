import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigationbar from './components/Navigationbar';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <div className="App">
      <Navigationbar/>
      <Routes>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/contact' component={Contact}/>
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;

import React from 'react'
import './App.css'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Stocks from './pages/Stocks'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/stocks" exact component={Stocks} />
        <Footer />
      </Router>
    </div>
  )
}

export default App

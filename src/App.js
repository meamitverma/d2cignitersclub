import './App.css';
import React from 'react';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Team from './pages/Team';
import Footer from './pages/Footer';
import Toconnect from './pages/Toconnect';

function App() {
  return (
    <React.Fragment>
      <Navbar/> 
      <Home/>
      <Events/>
      <Blogs/>
      <Toconnect/>
      {/* <About/> */}
      <Team/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;

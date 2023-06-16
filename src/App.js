import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/calculator';
import Quote from './components/quote';
import Home from './components/Home';
import './css/app.css';
import Navbar from './components/NavBar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Quote" element={<Quote />} />
        <Route path="/Calculator" element={<Calculator />} />
      </Routes>
    </>
  );
}

export default App;

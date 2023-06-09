import React from 'react';
import Calculator from './components/calculator';
import Quote from './components/quote';
import './css/app.css';

const App = () => (
  <div className="site-container">
    <Quote />
    <Calculator />
  </div>

);

export default App;

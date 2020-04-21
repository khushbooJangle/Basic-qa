import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Components/Main'

function App() {
  return (
    <div className="App">
      <Main city="Delhi" animal="Lion" game="Hockey" flower="Lotus" bird="Peacock" />
    </div>
  );
}

export default App;

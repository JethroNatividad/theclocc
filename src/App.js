import React from 'react';
import './App.css';
import Clock from './Clock';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <div className="Main">
        <div className="Main-title">the.CLOCC</div>
        <div className="Main-clock">
          <Clock />
        </div>
      </div>
      <div className="Sidebar">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;

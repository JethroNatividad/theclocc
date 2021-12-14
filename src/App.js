import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Main">
        <div className="Main-title">the.CLOCC</div>
        <div className="Main-clock">
          <p className="time">12:00:00</p>
          <div className="timezone-container">
            <p className="timezone">Asia/Manila</p>
            <p>+08:00 - Sunday, 6 Dec 10</p>
          </div>
        </div>
      </div>
      <div className="Sidebar">
        sidebar
      </div>
    </div>
  );
}

export default App;

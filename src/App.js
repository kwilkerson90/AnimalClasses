import React from 'react';
import MemoryCardBack from './components/MemoryCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Memory Game</h2>
        <h3>Match cards to win</h3>
        <div>
        <MemoryCardBack />
        <MemoryCardBack />
        <MemoryCardBack />
        <MemoryCardBack />
        </div>
        <div>
        <MemoryCardBack />
        <MemoryCardBack />
        <MemoryCardBack />
        <MemoryCardBack />
        </div>
        <div>
        <MemoryCardBack />
        <MemoryCardBack />
        <MemoryCardBack />
        <MemoryCardBack />
        </div>
        <div>
        <MemoryCardBack />
        <MemoryCardBack />
        <MemoryCardBack />
        <MemoryCardBack />
        </div>
        
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;

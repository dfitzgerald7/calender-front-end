import React from 'react';
import Homepage from './components/Homepage'
import CalenderContainer from './components/stateless/CalenderContainer'
import './App.css';
import calenderContainer from './components/stateless/CalenderContainer';

function App() {
  return (
    <div className="appContainer">
      <Homepage />
      <CalenderContainer/>
    </div>
  );
}

export default App;

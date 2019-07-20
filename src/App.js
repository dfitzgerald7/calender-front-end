import React from 'react';
import Homepage from './components/Homepage'
import CalenderContainer from './components/containers/CalenderContainer'
import './App.css';


function App() {
  return (
    <div className="appContainer">
      <Homepage />
      <CalenderContainer/>
    </div>
  );
}

export default App;

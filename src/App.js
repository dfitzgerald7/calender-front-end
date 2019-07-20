import React from 'react';
import Homepage from './components/Homepage'
import CalendarContainer from './components/containers/CalendarContainer'
import './App.css';


function App() {
  return (
    <div className="appContainer">
      <Homepage />
      <CalendarContainer/>
    </div>
  );
}

export default App;

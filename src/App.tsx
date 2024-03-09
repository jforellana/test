import React from 'react';
import logo from './logo.svg';
import './App.css';

const name = ['JUan'];
function myNameIs() {
  return (
    <div>
      <h3>My</h3>
      <h3>Name</h3>
      <h3>Is</h3>
      <h3>{name[0]}</h3>
    </div>
  );
}

function App() {
  const bandNames = ['band1', 'band2', 'band3'];

  return (
    <div className="App">
      <h1>{bandNames[0]}</h1>
    </div>
  );
}

export default App;

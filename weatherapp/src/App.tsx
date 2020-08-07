import React from 'react';
import './App.css';
import Weather from './components/Weather';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
function App() {
  return (
    <div className="App">
        <NavBar/>
        <Weather title="Weather Report"/>
    </div>
  );
}

export default App;

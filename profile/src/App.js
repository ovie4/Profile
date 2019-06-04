import React from 'react';
import './App.css';
import Cover from "./components/Cover";
import Profile from "./components/Profile";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="App">
      <Cover></Cover>
      <Profile></Profile>
      <Experience></Experience>
    </div>
  );
}

export default App;

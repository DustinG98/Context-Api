import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import ThemeContextProvider from './contexts/ThemeContext'

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <NavBar/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;

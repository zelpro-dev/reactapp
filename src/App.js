import React, { useState } from 'react';
import Header from './Header';
import './App.css';
import backgroundImage from './bg.jpg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <img src={backgroundImage} alt="Background" className="background-image" />
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <h1 className="title">El Mejor Bot De Discord</h1>
      <button className='button'><a href='#'>Añadir</a></button>
    </div>
  );
}

export default App;
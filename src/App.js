import React, { useState } from 'react';
import Header from './Header';
import './App.css';
import backgroundImage from './assets/bg.jpg';
import captura1 from './assets/cap.png';

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
      <section className='feature'>
        <h1>Característica #1</h1>
        <p>Gran facilidad para configurar.</p>
        <img src={captura1} alt='Discover' />
      </section>
    </div>
  );
}

export default App;
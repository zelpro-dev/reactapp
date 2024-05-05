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
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <img src={backgroundImage} alt="Background" className="background-image" />
      <section className='main'>
        <h1>El Mejor Bot De Discord</h1>
        <button><a href='#'>Añadir</a></button>
      </section>
      <section className='feature'>
        <h1>Característica #1</h1>
        <p>Gran facilidad para configurar.</p>
      </section>
    </div>
  );
}

export default App;
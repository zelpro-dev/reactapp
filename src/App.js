import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import backgroundImage from './assets/bg.jpg';
import backgroundImage2 from './assets/bg2.jpg';
import logo from './assets/logo.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 8:15

  return (
    <div className="App">
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <img src={backgroundImage} alt="Background" className="background-image" />
      <section className='main'>
        <img src={logo} alt='Discover' />
        <button><a href='https://discord.com/oauth2/authorize?client_id=1234920732535029800&permissions=8&scope=bot+applications.commands' target='_blank'>Añadir</a></button>
      </section>
      <section className='feature-l'>
        <h1>Gran visibilidad</h1>
        <p>Gran facilidad para configurar.</p>
      </section>
      <section className='feature-r'>
        <h1>Sencillez y efectividad</h1>
        <p>Gran facilidad para configurar.</p>
      </section>
      <section className='feature-l'>
        <h1>Totalmente seguro</h1>
        <p>Gran facilidad para configurar.</p>
      </section>
      <img src={backgroundImage2} alt="Background" className="background-image" />
      <iframe className='support' src="https://discordapp.com/widget?id=1222991487344705536&theme=dark" width="300" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
      <Footer />
    </div>
  );
}

export default App;
const Navbar = ({ isMenuOpen }) => {
    return (
      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <a href="/">Inicio</a>
        <a href="#">Explorar</a>
        <a href="https://discord.gg/r8gMUQ8pqc">Soporte</a>
      </nav>
    );
  }
  
  export default Navbar;
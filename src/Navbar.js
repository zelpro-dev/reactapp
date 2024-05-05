const Navbar = ({ isMenuOpen }) => {
    return (
      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <a href="#">Inicio</a>
        <a href="#">Explorar</a>
        <a href="#">Soporte</a>
      </nav>
    );
  }
  
  export default Navbar;
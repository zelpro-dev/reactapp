const Navbar = ({ isMenuOpen }) => {
    return (
      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Gallery</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </nav>
    );
  }
  
  export default Navbar;
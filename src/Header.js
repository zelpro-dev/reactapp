import Navbar from './Navbar';

const Header = ({ isMenuOpen, toggleMenu }) => {
  return (
    <header className="header">
      <a href="#" className="logo">Discover</a>
      <div className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <Navbar isMenuOpen={isMenuOpen} />
    </header>
  );
}

export default Header;
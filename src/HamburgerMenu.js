import React, { useState } from 'react';

const HamburgerMenu = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={`hamburger-menu ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
    );
}

export default HamburgerMenu;
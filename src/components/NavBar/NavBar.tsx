
import React from 'react';
import './NavBar.scss';

interface NavBarProps {
    items: string[];
  }

const NavBar: React.FC<NavBarProps> = ({ items }) => {
    return (
        <nav className="navigation-bar">
          <ul className="navigation-list">
            {items.map((item, index) => (
              <li key={index} className="navigation-item">
                {item}
              </li>
            ))}
          </ul>
        </nav>
      );
    
};

export default NavBar;

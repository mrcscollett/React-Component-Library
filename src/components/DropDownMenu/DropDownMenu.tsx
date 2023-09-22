
import React, { useState } from 'react';
import './DropDownMenu.scss';

interface DropDownMenuProps {
  items: string[];
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-menu">
      <button onClick={handleToggle} className="toggle-button">
        Toggle Menu
      </button>
      {isOpen && (
        <ul className="menu-list">
          {items.map((item, index) => (
            <li key={index} className="menu-item">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDownMenu;

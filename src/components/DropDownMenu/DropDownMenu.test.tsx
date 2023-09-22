
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DropDownMenu from './DropDownMenu';

describe('DropdownMenu Component', () => {
  it('should render the Toggle button', () => {
    render(<DropDownMenu items={[]} />);
    const toggleButton = screen.getByText('Toggle Menu');
    expect(toggleButton).toBeInTheDocument();
  });

  it('should not initially display the menu', () => {
    render(<DropDownMenu items={['Item 1', 'Item 2', 'Item 3']} />);
    const menuList = screen.queryByRole('list');
    expect(menuList).not.toBeInTheDocument();
  });

  it('should display the menu when the Toggle button is clicked', () => {
    render(<DropDownMenu items={['Item 1', 'Item 2', 'Item 3']} />);
    const toggleButton = screen.getByText('Toggle Menu');

    fireEvent.click(toggleButton);

    const menuList = screen.getByRole('list');
    expect(menuList).toBeInTheDocument();
  });

  it('should hide the menu when the Toggle button is clicked twice', () => {
    render(<DropDownMenu items={['Item 1', 'Item 2', 'Item 3']} />);
    const toggleButton = screen.getByText('Toggle Menu');

    fireEvent.click(toggleButton);
    fireEvent.click(toggleButton);

    const menuList = screen.queryByRole('list');
    expect(menuList).not.toBeInTheDocument();
  });
});


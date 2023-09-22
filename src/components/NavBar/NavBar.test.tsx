
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import NavBar from './NavBar';

describe('NavigationBar Component', () => {
  const mockItems = ['Home', 'About', 'Contact'];

  it('should render navigation items', () => {
    const { getByText } = render(<NavBar items={mockItems} />);

    mockItems.forEach(item => {
      const element = getByText(item);
      expect(element).toBeInTheDocument();
    });
  });

  it('should have correct number of navigation items', () => {
    const { getAllByRole } = render(<NavBar items={mockItems} />);

    const navigationItems = getAllByRole('listitem');
    expect(navigationItems.length).toBe(mockItems.length);
  });
});


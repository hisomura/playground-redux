import React from 'react';
import { render, screen } from '@testing-library/react';
import CombinedReducerStoreApp from './CombinedReducerStoreApp';

test('renders learn react link', () => {
  render(<CombinedReducerStoreApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

import React from 'react';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const layout = screen.getByRole('button');
  expect(layout).toBeInTheDocument();
});

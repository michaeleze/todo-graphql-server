import React from 'react';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import List from './index';

it('renders learn react link', () => {
  const {getByText} = render(<List/>);
  const layout = screen.getByRole('div');
  expect(layout).toBeInTheDocument();
});

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import SearchPets from '../../components/SearchPets';

test('should render Details components properly ', () => {
  const details = renderer.create(<SearchPets />);
  const final = details.toJSON();
  expect(final).toMatchSnapshot();
});

test('should render text Animal', () => {
  render(<SearchPets />);
  const details = screen.getByTestId('search-pets-id');
  expect(details).toHaveTextContent('Animal');
});
test('should render text Gender', () => {
  render(<SearchPets />);
  const details = screen.getByTestId('search-pets-id');
  expect(details).toHaveTextContent('Gender');
});
test('should render text Size', () => {
  render(<SearchPets />);
  const details = screen.getByTestId('search-pets-id');
  expect(details).toHaveTextContent('Size');
});

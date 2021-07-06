import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchPets from '../../components/SearchPets';

test('should render the Pet component', async () => {
  const { getByTestId } = render(<SearchPets />);

  const data = getByTestId('search-pets-id');
  expect(data).toHaveClass('main__wrapper');
  const dataForm = getByTestId('search-pets-form');
  expect(dataForm).toHaveTextContent('Animal');
  expect(dataForm).toHaveTextContent('Size');
  expect(dataForm).toHaveTextContent('Gender');
  expect(dataForm).toHaveTextContent('Search Pet');
});

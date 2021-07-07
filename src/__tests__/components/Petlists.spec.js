import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import PetsList from '../../components/PetList';

test('should render the Pet component', async () => {
  const { getByTestId } = render(<PetsList />);

  const data = getByTestId('pets-list-id');
  expect(data).toHaveClass('pets__wrapper');
  const dataForm = getByTestId('pets-list-id');
  expect(dataForm).toHaveTextContent('No pets Found');
});

import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import PetList from '../../components/PetList';

test('should render Details components properly ', () => {
  const details = renderer.create(<PetList />);
  const final = details.toJSON();
  expect(final).toMatchSnapshot();
});

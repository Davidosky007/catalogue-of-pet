import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Pet from '../../components/Pet';

test('should render Pets components properly ', () => {
  const details = renderer.create(<Pet />);
  const final = details.toJSON();
  expect(final).toMatchSnapshot();
});

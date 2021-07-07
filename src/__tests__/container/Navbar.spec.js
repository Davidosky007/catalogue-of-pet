import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Navbar from '../../components/Navbar';

test('should render Details components properly ', () => {
  const details = renderer.create(<Navbar />);
  const final = details.toJSON();
  expect(final).toMatchSnapshot();
});

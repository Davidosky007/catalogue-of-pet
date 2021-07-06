import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Footer from '../../components/Footer';

test('should render Details components properly ', () => {
  const details = renderer.create(<Footer />);
  const final = details.toJSON();
  expect(final).toMatchSnapshot();
});

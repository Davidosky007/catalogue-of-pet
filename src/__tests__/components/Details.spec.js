import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Details from '../../components/Details';

test('should render text Loading', () => {
  render(<Details />);
  const details = screen.getByTestId('details-loading');
  expect(details).toHaveTextContent('Loading....');
});

test('should render Details components properly ', () => {
  const details = renderer.create(<Details />);
  const final = details.toJSON();
  expect(final).toMatchSnapshot();
});

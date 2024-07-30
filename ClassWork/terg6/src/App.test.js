/** @jsx h */
import { h } from 'preact';
import { render, screen } from '@testing-library/preact';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

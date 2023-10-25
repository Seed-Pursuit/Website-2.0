import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('renders the homepage when the path is /', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );

  const homepageElement = screen.getByText(/Welcome to My App/i);
  expect(homepageElement).toBeInTheDocument();
});

test('renders the error page when the path is unknown', () => {
  render(
    <MemoryRouter initialEntries={['/unknown']}>
      <App />
    </MemoryRouter>
  );

  const errorElement = screen.getByText(/Page Not Found/i);
  expect(errorElement).toBeInTheDocument();
});

test('navigates to the What Happens At SP page', () => {
  render(
    <MemoryRouter initialEntries={['/what_happens_at_sp']}>
      <App />
    </MemoryRouter>
  );

  const whatHappensElement = screen.getByText(/What Happens at SP/i);
  expect(whatHappensElement).toBeInTheDocument();
});

test('renders the navbar', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const navbarElement = screen.getByTestId('navbar');
  expect(navbarElement).toBeInTheDocument();
});

test('renders the footer', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const footerElement = screen.getByTestId('footer');
  expect(footerElement).toBeInTheDocument();
});

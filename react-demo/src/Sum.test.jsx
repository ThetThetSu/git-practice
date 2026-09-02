import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Sum from './Sum';

describe('Sum', () => {
  it('renders the correct sum of two numbers', () => {
    render(<Sum a={2} b={3} />);
    expect(screen.getByText('2 + 3 = 5')).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import Home from './index';

describe('HomePage First Test', () => {
  it('renders header', () => {
    render(<Home />);
    screen.getByText('Hello world!');
  });
});

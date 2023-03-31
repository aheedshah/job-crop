import { render } from '@testing-library/react';
import Home from './Home';

test('renders MainSection component', () => {
    const { getByTestId } = render(<Home />);
    const mainSection = getByTestId('main-section');
    expect(mainSection).toBeInTheDocument();
});

test('renders Cards component', () => {
    const { getByTestId } = render(<Home />);
    const cards = getByTestId('cards');
    expect(cards).toBeInTheDocument();
});

test('renders Footer component', () => {
    const { getByRole } = render(<Home />);
    const footer = getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
});
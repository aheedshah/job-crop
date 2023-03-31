import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
    it('renders with default props', () => {
        const { getByText } = render(<Button>Click me</Button>);
        const button = getByText('Click me');
        expect(button).toBeInTheDocument();
        expect(button.tagName).toBe('BUTTON');
        expect(button).toHaveClass('btn', 'primary-button', 'sides');
        expect(button).toHaveAttribute('type', 'button');
    });

    it('renders with custom props', () => {
        const { getByText } = render(
            <Button style="secondary-button" size="large" type="submit">
                Submit
            </Button>
        );
        const button = getByText('Submit');
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass('btn', 'secondary-button', 'large');
        expect(button).toHaveAttribute('type', 'submit');
    });

    it('calls onClick handler when clicked', () => {
        const handleClick = jest.fn();
        const { getByText } = render(
            <Button onClick={handleClick}>Click me</Button>
        );
        const button = getByText('Click me');
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('navigates to /login when clicked', () => {
        const { getByText } = render(<Button>Login</Button>);
        const button = getByText('Login');
        fireEvent.click(button);
        expect(window.location.pathname).toBe('/login');
    });
});

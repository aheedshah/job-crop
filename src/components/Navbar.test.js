import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
    it('renders the navbar logo', () => {
        const { getByText } = render(<Navbar />);
        expect(getByText('Job Crop')).toBeInTheDocument();
    });

    it('toggles the mobile menu when the hamburger is clicked', () => {
        const { getByTestId } = render(<Navbar />);
        fireEvent.click(getByTestId('menu-icon'));
        expect(getByTestId('nav-menu')).toHaveClass('active');
        fireEvent.click(getByTestId('menu-icon'));
        expect(getByTestId('nav-menu')).not.toHaveClass('active');
    });

    it('closes the mobile menu when a menu item is clicked', () => {
        const { getByTestId } = render(<Navbar />);
        fireEvent.click(getByTestId('menu-icon'));
        fireEvent.click(getByTestId('nav-links-home'));
        expect(getByTestId('nav-menu')).not.toHaveClass('active');
    });

    it('renders the sign-in button on desktop', () => {
        global.innerWidth = 1024;
        const { getByText } = render(<Navbar />);
        expect(getByText('SIGN IN')).toBeInTheDocument();
    });

    it('does not render the sign-in button on mobile', () => {
        global.innerWidth = 800;
        const { queryByText } = render(<Navbar />);
        expect(queryByText('SIGN IN')).not.toBeInTheDocument();
    });
});

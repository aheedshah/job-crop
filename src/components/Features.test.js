import React from 'react';
import { render, screen } from '@testing-library/react';
import Features from './Features';

describe('Features', () => {
    it('should render a title and text', () => {
        render(<Features />);
        expect(screen.getByText('Core Features')).toBeInTheDocument();
        expect(screen.getByText(/Before us, the Job Searching sector/)).toBeInTheDocument();
    });

    it('should render a button with text "Try it now!"', () => {
        render(<Features />);
        const button = screen.getByText('Try it now!');
        expect(button).toBeInTheDocument();
        expect(button.tagName).toBe('BUTTON');
    });

    it('should call console.log when the button is clicked', () => {
        console.log = jest.fn();
        render(<Features />);
        const button = screen.getByText('Try it now!');
        button.click();
        expect(console.log).toHaveBeenCalledWith('hey');
    });
});

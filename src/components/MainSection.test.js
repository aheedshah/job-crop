import React from 'react';
import { render, screen } from '@testing-library/react';
import MainSection from './MainSection';

describe('MainSection component', () => {
    it('renders the video', () => {
        render(<MainSection />);
        const video = screen.getByRole('video');
        expect(video).toBeInTheDocument();
    });

    it('renders the title and description', () => {
        render(<MainSection />);
        const title = screen.getByText('Land the perfect job!');
        const description = screen.getByText('We only show relevant roles.');
        expect(title).toBeInTheDocument();
        expect(description).toBeInTheDocument();
    });

    it('renders the login button with the correct text', () => {
        render(<MainSection />);
        const button = screen.getByText('Sign in!');
        expect(button).toBeInTheDocument();
    });

    it('calls the onClick function when the login button is clicked', () => {
        const mockOnClick = jest.fn();
        render(<MainSection onClick={mockOnClick} />);
        const button = screen.getByText('Sign in!');
        button.click();
        expect(mockOnClick).toHaveBeenCalled();
    });
});

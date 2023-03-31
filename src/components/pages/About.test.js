import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';

test('renders container with correct text', () => {
    render(<About />);
    const headingElement = screen.getByText(/Find the perfect job with us!/i);
    const paragraphElement = screen.getByText(/At job crop, we believe everyone should have the opportunity to find the perfect job they are looking for without going through countless pages of jobs. We are the only job-searching app that do you justice./i);
    expect(headingElement).toBeInTheDocument();
    expect(paragraphElement).toBeInTheDocument();
});

test('renders Features and Footer components', () => {
    render(<About />);
    const featuresElement = screen.getByTestId('features');
    const footerElement = screen.getByTestId('footer');
    expect(featuresElement).toBeInTheDocument();
    expect(footerElement).toBeInTheDocument();
});
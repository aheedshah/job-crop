import React from 'react';
import { render, screen } from '@testing-library/react';
import Matches from './Matches';

describe('Matches', () => {
    test('renders company name', () => {
        render(<Matches />);
        const companyName = screen.getByText('ABC Company');
        expect(companyName).toBeInTheDocument();
    });

    test('renders job title', () => {
        render(<Matches />);
        const jobTitle = screen.getByText('Software Engineer');
        expect(jobTitle).toBeInTheDocument();
    });

    test('renders mission statement', () => {
        render(<Matches />);
        const missionStatement = screen.getByText('Our mission is to make everyone in this world know their ABCs.');
        expect(missionStatement).toBeInTheDocument();
    });

    test('renders tech stack badges', () => {
        render(<Matches />);
        const html5Badge = screen.getByText('HTML5');
        expect(html5Badge).toHaveClass('badge-match');

        const javaBadge = screen.getByText('Java');
        expect(javaBadge).toHaveClass('badge-unmatch');
    });

    test('renders job description', () => {
        render(<Matches />);
        const jobDescription = screen.getByText('This job is about teaching people their ABCs');
        expect(jobDescription).toBeInTheDocument();
    });

    test('renders apply now button', () => {
        render(<Matches />);
        const applyNowButton = screen.getByText('Apply Now');
        expect(applyNowButton).toBeInTheDocument();
    });
});

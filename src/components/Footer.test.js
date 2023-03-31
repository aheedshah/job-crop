import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from './Footer';

describe('Footer', () => {
    test('renders footer container', () => {
        const { getByTestId } = render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );
        const footerContainer = getByTestId('footer-container');
        expect(footerContainer).toBeInTheDocument();
    });

    test('renders social media links', () => {
        const { getByLabelText } = render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );
        const facebookLink = getByLabelText('Facebook');
        expect(facebookLink).toBeInTheDocument();
        const instagramLink = getByLabelText('Instagram');
        expect(instagramLink).toBeInTheDocument();
        const youtubeLink = getByLabelText('Youtube');
        expect(youtubeLink).toBeInTheDocument();
        const twitterLink = getByLabelText('Twitter');
        expect(twitterLink).toBeInTheDocument();
        const linkedInLink = getByLabelText('LinkedIn');
        expect(linkedInLink).toBeInTheDocument();
    });

    test('renders correct text in social logo', () => {
        const { getByText } = render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );
        const socialLogo = getByText('Job Crop');
        expect(socialLogo).toBeInTheDocument();
    });
});

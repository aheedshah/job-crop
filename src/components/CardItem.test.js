import React from 'react';
import { render, screen } from '@testing-library/react';
import CardItem from './CardItem';
import { BrowserRouter } from 'react-router-dom';

describe('CardItem component', () => {
    const props = {
        path: '/jobs/1',
        label: 'Full-time',
        src: 'https://example.com/job-image.jpg',
        text: 'Frontend Developer',
    };

    it('renders the correct job label', () => {
        render(
            <BrowserRouter>
                <CardItem {...props} />
            </BrowserRouter>
        );
        const jobLabel = screen.getByText(props.label);
        expect(jobLabel).toBeInTheDocument();
    });

    it('renders the correct job image', () => {
        render(
            <BrowserRouter>
                <CardItem {...props} />
            </BrowserRouter>
        );
        const jobImage = screen.getByAltText('Job Image');
        expect(jobImage).toHaveAttribute('src', props.src);
    });

    it('renders the correct job text', () => {
        render(
            <BrowserRouter>
                <CardItem {...props} />
            </BrowserRouter>
        );
        const jobText = screen.getByText(props.text);
        expect(jobText).toBeInTheDocument();
    });

    it('links to the correct job path', () => {
        render(
            <BrowserRouter>
                <CardItem {...props} />
            </BrowserRouter>
        );
        const jobLink = screen.getByRole('link');
        expect(jobLink).toHaveAttribute('href', props.path);
    });
});

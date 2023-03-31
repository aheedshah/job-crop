import React from 'react';
import { render } from '@testing-library/react';
import Cards from './Cards';

describe('Cards', () => {
    it('should render the component without errors', () => {
        render(<Cards />);
    });

    it('should render two CardItems in the first ul', () => {
        const { getAllByRole } = render(<Cards />);
        const items = getAllByRole('listitem');

        expect(items.slice(0, 2).length).toBe(2);
    });

    it('should render three CardItems in the second ul', () => {
        const { getAllByRole } = render(<Cards />);
        const items = getAllByRole('listitem');

        expect(items.slice(2).length).toBe(3);
    });
});

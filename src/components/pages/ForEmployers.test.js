import { render } from '@testing-library/react';
import ForEmployers from './ForEmployers';

test('renders ForEmployers component without errors', () => {
    render(<ForEmployers />);
});

test('renders correct header text', () => {
    const { getByRole } = render(<ForEmployers />);
    const header = getByRole('heading', { level: 1 });
    expect(header).toHaveTextContent('We’ve re-invented how talented people find jobs in tech');
});

test('renders all boxes with text and images', () => {
    const { getByAltText, getByText } = render(<ForEmployers />);
    const reinventingJobsBox = getByText(/Reinventing jobs/i);
    const companyBuilderBox = getByText(/Company Builder/i);
    const calculatorBox = getByText(/Calculator/i);
    const findTheRightPersonBox = getByText(/Find the right person/i);

    const reinventingJobsImage = getByAltText(/supervisor/);
    const companyBuilderImage = getByAltText(/supervisor/);
    const calculatorImage = getByAltText(/supervisor/);
    const findTheRightPersonImage = getByAltText(/supervisor/);

    expect(reinventingJobsBox).toBeInTheDocument();
    expect(companyBuilderBox).toBeInTheDocument();
    expect(calculatorBox).toBeInTheDocument();
    expect(findTheRightPersonBox).toBeInTheDocument();

    expect(reinventingJobsImage).toBeInTheDocument();
    expect(companyBuilderImage).toBeInTheDocument();
    expect(calculatorImage).toBeInTheDocument();
    expect(findTheRightPersonImage).toBeInTheDocument();
});

test('renders footer', () => {
    const { getByRole } = render(<ForEmployers />);
    const footer = getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
});
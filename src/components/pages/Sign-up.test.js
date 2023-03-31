import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import SignUp from './SignUp';

// Mocking the useNavigate hook
jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
}));

// Mocking the getAuth and createUserWithEmailAndPassword functions from Firebase
jest.mock('firebase/auth', () => ({
    getAuth: jest.fn(),
    createUserWithEmailAndPassword: jest.fn(),
}));

describe('SignUp component', () => {
    it('should render the form', () => {
        const {getByText, getByPlaceholderText} = render(<SignUp/>);
        expect(getByText('Sign Up for your account')).toBeInTheDocument();
        expect(getByPlaceholderText('First Name')).toBeInTheDocument();
        expect(getByPlaceholderText('Last Name')).toBeInTheDocument();
        expect(getByPlaceholderText('Email address')).toBeInTheDocument();
        expect(getByPlaceholderText('Password')).toBeInTheDocument();
        expect(getByText('Sign Up')).toBeInTheDocument();
    });

    it('should call createUserWithEmailAndPassword when the form is submitted', async () => {
        const {getByLabelText, getByText} = render(<SignUp/>);
        const emailInput = getByLabelText('Email address');
        const passwordInput = getByLabelText('Password');
        const signUpButton = getByText('Sign Up');

        // Fill in the form fields
        fireEvent.change(getByLabelText('First Name'), {target: {value: 'John'}});
        fireEvent.change(getByLabelText('Last Name'), {target: {value: 'Doe'}});
        fireEvent.change(emailInput, {target: {value: 'john.doe@example.com'}});
        fireEvent.change(passwordInput, {target: {value: 'password'}});

        // Submit the form
        fireEvent.click(signUpButton);

        // Wait for createUserWithEmailAndPassword to be called
        await waitFor(() =>
            expect(jest.requireMock('firebase/auth').createUserWithEmailAndPassword).toHaveBeenCalledWith(
                expect.any(Object),
                'john.doe@example.com',
                'password'
            )
        );
    });

    it('should navigate to the home page when the form is submitted successfully', async () => {
        const navigate = jest.fn();
        jest.requireMock('react-router-dom').useNavigate.mockReturnValue(navigate);
        jest.requireMock('firebase/auth').createUserWithEmailAndPassword.mockResolvedValueOnce();

        const {getByLabelText, getByText} = render(<SignUp/>);
        const emailInput = getByLabelText('Email address');
        const passwordInput = getByLabelText('Password');
        const signUpButton = getByText('Sign Up');

        // Fill in the form fields
        fireEvent.change(getByLabelText('First Name'), {target: {value: 'John'}});
        fireEvent.change(getByLabelText('Last Name'), {target: {value: 'Doe'}});
        fireEvent.change(emailInput, {target: {value: 'john.doe@example.com'}});
        fireEvent.change(passwordInput, {target: {value: 'password'}});

        // Submit the form
        fireEvent.click(signUpButton);

        // Wait for the navigation to happen
        await waitFor(() => expect(navigate).toHaveBeenCalledWith('/'));
    });

    it('should log an error when createUserWithEmailAndPassword fails', async () => {
        jest.spyOn(console, 'log').mockImplementation(() => {
        });
        jest.requireMock('firebase/auth').createUserWithEmailAndPassword.mockRejectedValueOnce(new Error('An error occurred'));

        const {getByLabelText, getByText} = render(<SignUp/>);
        const emailInput = getByLabelText('Email address');
        const passwordInput = getByLabelText('Password');
        const signUpButton = getByText('Sign Up');
        //Filling out the form with mock data
        fireEvent.change(emailInput, {target: {value: 'test@test.com'}});
        fireEvent.change(passwordInput, {target: {value: 'password123'}});
        // Asserting that the function logs the error message to the console
        expect(console.log).toHaveBeenCalledWith(new Error('An error occurred'));
    });
});
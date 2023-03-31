import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import Login from './Login';

describe('Login component', () => {
    test('should render the login form', () => {
        render(<Login />);
        const emailInput = screen.getByLabelText('Email address');
        const passwordInput = screen.getByLabelText('Password');
        const loginButton = screen.getByText('Login');

        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(loginButton).toBeInTheDocument();
    });

    test('should show error message for invalid credentials', async () => {
        const signInWithEmailAndPasswordMock = jest.fn(() => {
            throw new Error('Invalid credentials');
        });
        jest.spyOn(require('firebase/auth'), 'signInWithEmailAndPassword')
            .mockImplementation(signInWithEmailAndPasswordMock);

        render(<Login />);
        const emailInput = screen.getByLabelText('Email address');
        const passwordInput = screen.getByLabelText('Password');
        const loginButton = screen.getByText('Login');

        fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
        fireEvent.change(passwordInput, { target: { value: 'invalid-password' } });
        fireEvent.click(loginButton);

        await waitFor(() => {
            expect(signInWithEmailAndPasswordMock).toHaveBeenCalledWith(expect.any(Object), 'invalid-email', 'invalid-password');
            expect(screen.getByText("The Email address or password you've entered is wrong!")).toBeInTheDocument();
        });
    });

    test('should navigate to matches page for valid credentials', async () => {
        const signInWithEmailAndPasswordMock = jest.fn(() => ({
            user: { uid: 'some-uid' },
        }));
        jest.spyOn(require('firebase/auth'), 'signInWithEmailAndPassword')
            .mockImplementation(signInWithEmailAndPasswordMock);
        const navigateMock = jest.fn();
        jest.mock('react-router-dom', () => ({
            useNavigate: () => navigateMock,
        }));

        render(<Login />);
        const emailInput = screen.getByLabelText('Email address');
        const passwordInput = screen.getByLabelText('Password');
        const loginButton = screen.getByText('Login');

        fireEvent.change(emailInput, { target: { value: 'valid-email@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'valid-password' } });
        fireEvent.click(loginButton);

        await waitFor(() => {
            expect(signInWithEmailAndPasswordMock).toHaveBeenCalledWith(expect.any(Object), 'valid-email@example.com', 'valid-password');
            expect(navigateMock).toHaveBeenCalledWith('/matches');
        });
    });
});

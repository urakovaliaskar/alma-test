import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import {Form} from '../Form';

describe('Form Component', () => {
  it('renders the form correctly', () => {
    render(<Form onSubmit={jest.fn()} />);
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  it('renders input fields', () => {
    render(<Form onSubmit={jest.fn()} />);
    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Portfolio / LinkedIn URL')).toBeInTheDocument();
  });

  it('fills all fields and submits the form', () => {
    const handleSubmit = jest.fn();
    render(<Form onSubmit={handleSubmit} />);
  
    fireEvent.change(screen.getByPlaceholderText('First Name'), { target: { value: 'John' } });
    fireEvent.change(screen.getByPlaceholderText('Last Name'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Portfolio / LinkedIn URL'), { target: { value: 'https://linkedin.com/in/johndoe' } });
  
    const visaOptions = ["O-1", "EB-1A", "EB-2 NIW", "I don't know"];
    visaOptions.forEach(option => {
      fireEvent.click(screen.getByLabelText(option));
    });

    const file = new File(['resume content'], 'resume.pdf', { type: 'application/pdf' });
    const fileInput = screen.getByPlaceholderText('Resume/CV Upload');
    fireEvent.change(fileInput, { target: { files: [file] } });
    fireEvent.change(screen.getByPlaceholderText('What is your current status and when does it expire! What is your past immigration history? Are you or short-term employment visa or both? Are there any timeline considerators?'), { target: { value: 'This is additional information about my case.' } });
  
    fireEvent.click(screen.getByText('Submit'));
  
    expect(handleSubmit).toHaveBeenCalledWith({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      file: file,
      url: 'https://linkedin.com/in/johndoe',
      visaCategories: visaOptions,
      additionalInfo: 'This is additional information about my case.',
    });
  });

  it('updates input values on change', () => {
    render(<Form onSubmit={jest.fn()} />);
    const nameInput = screen.getByPlaceholderText('First Name');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    expect(nameInput).toHaveValue('John Doe');
  });

  it('displays validation error for empty required fields', () => {
    render(<Form onSubmit={jest.fn()} />);
    fireEvent.submit(screen.getByRole('form'));
    expect(screen.getByText('First Name is required.')).toBeInTheDocument();
    expect(screen.getByText('Valid email is required.')).toBeInTheDocument();
  });

  it('displays error for invalid email format', () => {
    render(<Form onSubmit={jest.fn()} />);
    const emailInput = screen.getByPlaceholderText('Email');
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.submit(screen.getByRole('form'));
    expect(screen.getByText('Valid email is required.')).toBeInTheDocument();
  });

  it('displays error for invalid URL format', () => {
    render(<Form onSubmit={jest.fn()} />);
    const urlInput = screen.getByPlaceholderText('Portfolio / LinkedIn URL');
    fireEvent.change(urlInput, { target: { value: 'invalid-url' } });
    fireEvent.submit(screen.getByRole('form'));
    expect(screen.getByText('Please enter a valid URL.')).toBeInTheDocument();
  });
});
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from './Input';

describe('Input', () => {
  it('renders correctly', () => {
    render(<Input placeholder="Test input" />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Input label="Email" placeholder="Enter email" />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveAccessibleName('Email');
  });

  it('renders error message', () => {
    render(<Input label="Email" error="Email is required" />);
    expect(screen.getByText('Email is required')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('renders helper text', () => {
    render(<Input label="Username" helperText="Choose a unique username" />);
    expect(screen.getByText('Choose a unique username')).toBeInTheDocument();
  });

  it('handles user input', async () => {
    const user = userEvent.setup();
    render(<Input placeholder="Type here" />);
    
    const input = screen.getByRole('textbox');
    await user.type(input, 'hello world');
    
    expect(input).toHaveValue('hello world');
  });

  it('calls onChange handler', async () => {
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} placeholder="Type here" />);
    
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    
    expect(handleChange).toHaveBeenCalled();
  });

  it('is disabled when disabled prop is true', () => {
    render(<Input disabled placeholder="Disabled input" />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('applies full width styling', () => {
    const { container } = render(<Input fullWidth placeholder="Full width" />);
    const inputContainer = container.firstChild as HTMLElement;
    expect(inputContainer).toHaveStyle('width: 100%');
  });

  it('renders start icon', () => {
    render(<Input startIcon={<span data-testid="start-icon">@</span>} />);
    expect(screen.getByTestId('start-icon')).toBeInTheDocument();
  });

  it('renders end icon', () => {
    render(<Input endIcon={<span data-testid="end-icon">*</span>} />);
    expect(screen.getByTestId('end-icon')).toBeInTheDocument();
  });

  it('associates error with input using aria-describedby', () => {
    render(<Input label="Email" error="Invalid email" />);
    const input = screen.getByRole('textbox');
    const errorId = input.getAttribute('aria-describedby');
    expect(errorId).toBeTruthy();
    expect(document.getElementById(errorId!)).toHaveTextContent('Invalid email');
  });
});
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Modal } from './Modal';

describe('Modal', () => {
  const defaultProps = {
    isOpen: true,
    onClose: vi.fn(),
    children: <div>Modal content</div>,
  };

  beforeEach(() => {
    vi.clearAllMocks();
    // Create a div for the portal
    const portalDiv = document.createElement('div');
    portalDiv.setAttribute('id', 'modal-root');
    document.body.appendChild(portalDiv);
  });

  afterEach(() => {
    // Clean up portal div
    const portalDiv = document.getElementById('modal-root');
    if (portalDiv) {
      document.body.removeChild(portalDiv);
    }
  });

  it('renders when isOpen is true', () => {
    render(<Modal {...defaultProps} />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Modal content')).toBeInTheDocument();
  });

  it('does not render when isOpen is false', () => {
    render(<Modal {...defaultProps} isOpen={false} />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders with title', () => {
    render(<Modal {...defaultProps} title="Test Modal" />);
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(screen.getByRole('dialog')).toHaveAttribute('aria-labelledby', 'modal-title');
  });

  it('calls onClose when close button is clicked', async () => {
    const user = userEvent.setup();
    render(<Modal {...defaultProps} title="Test Modal" />);
    
    const closeButton = screen.getByLabelText('Close modal');
    await user.click(closeButton);
    
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when escape key is pressed', () => {
    render(<Modal {...defaultProps} />);
    
    fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });
    
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  it('does not call onClose when escape key is pressed and closeOnEscape is false', () => {
    render(<Modal {...defaultProps} closeOnEscape={false} />);
    
    fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });
    
    expect(defaultProps.onClose).not.toHaveBeenCalled();
  });

  it('calls onClose when overlay is clicked', async () => {
    const user = userEvent.setup();
    render(<Modal {...defaultProps} />);
    
    const overlay = screen.getByRole('dialog').parentElement;
    if (overlay) {
      await user.click(overlay);
    }
    
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  it('does not call onClose when overlay is clicked and closeOnOverlayClick is false', async () => {
    const user = userEvent.setup();
    render(<Modal {...defaultProps} closeOnOverlayClick={false} />);
    
    const overlay = screen.getByRole('dialog').parentElement;
    if (overlay) {
      await user.click(overlay);
    }
    
    expect(defaultProps.onClose).not.toHaveBeenCalled();
  });

  it('does not show close button when showCloseButton is false', () => {
    render(<Modal {...defaultProps} title="Test Modal" showCloseButton={false} />);
    expect(screen.queryByLabelText('Close modal')).not.toBeInTheDocument();
  });

  it('applies correct size class', () => {
    const { rerender } = render(<Modal {...defaultProps} size="sm" />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    rerender(<Modal {...defaultProps} size="lg" />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('sets body overflow to hidden when open', () => {
    render(<Modal {...defaultProps} />);
    expect(document.body.style.overflow).toBe('hidden');
  });

  it('restores body overflow when closed', () => {
    const { rerender } = render(<Modal {...defaultProps} />);
    expect(document.body.style.overflow).toBe('hidden');

    rerender(<Modal {...defaultProps} isOpen={false} />);
    expect(document.body.style.overflow).toBe('unset');
  });
});
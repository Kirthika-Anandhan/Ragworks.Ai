import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Card } from './Card';

describe('Card', () => {
  it('renders correctly', () => {
    render(
      <Card>
        <Card.Title>Test Card</Card.Title>
        <Card.Content>Test content</Card.Content>
      </Card>
    );
    
    expect(screen.getByText('Test Card')).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders all sub-components correctly', () => {
    render(
      <Card>
        <Card.Header>
          <Card.Title>Test Title</Card.Title>
          <Card.Subtitle>Test Subtitle</Card.Subtitle>
        </Card.Header>
        <Card.Content>Test Content</Card.Content>
        <Card.Footer>Test Footer</Card.Footer>
      </Card>
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
    expect(screen.getByText('Test Footer')).toBeInTheDocument();
  });

  it('calls onClick when card is clicked', async () => {
    const handleClick = vi.fn();
    render(
      <Card onClick={handleClick}>
        <Card.Content>Clickable content</Card.Content>
      </Card>
    );

    const card = screen.getByRole('button');
    await userEvent.click(card);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('supports keyboard navigation when clickable', async () => {
    const handleClick = vi.fn();
    render(
      <Card onClick={handleClick}>
        <Card.Content>Clickable content</Card.Content>
      </Card>
    );

    const card = screen.getByRole('button');
    card.focus();
    
    fireEvent.keyDown(card, { key: 'Enter' });
    expect(handleClick).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(card, { key: ' ' });
    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  it('has correct accessibility attributes when clickable', () => {
    render(
      <Card clickable onClick={() => {}}>
        <Card.Content>Clickable content</Card.Content>
      </Card>
    );

    const card = screen.getByRole('button');
    expect(card).toHaveAttribute('tabIndex', '0');
    expect(card).toHaveAttribute('role', 'button');
  });

  it('does not have button role when not clickable', () => {
    render(
      <Card>
        <Card.Content>Non-clickable content</Card.Content>
      </Card>
    );

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <Card className="custom-class">
        <Card.Content>Test content</Card.Content>
      </Card>
    );

    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('renders with different variants', () => {
    const { container, rerender } = render(
      <Card variant="outlined">
        <Card.Content>Test content</Card.Content>
      </Card>
    );

    expect(container.firstChild).toBeInTheDocument();

    rerender(
      <Card variant="elevated">
        <Card.Content>Test content</Card.Content>
      </Card>
    );

    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders with different padding sizes', () => {
    const { container, rerender } = render(
      <Card padding="sm">
        <Card.Content>Test content</Card.Content>
      </Card>
    );

    expect(container.firstChild).toBeInTheDocument();

    rerender(
      <Card padding="lg">
        <Card.Content>Test content</Card.Content>
      </Card>
    );

    expect(container.firstChild).toBeInTheDocument();
  });
});
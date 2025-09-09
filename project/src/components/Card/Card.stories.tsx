import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from '../Button/Button';
import { Heart, Share, MessageCircle } from 'lucide-react';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'elevated'],
    },
    padding: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Card.Header>
          <Card.Title>Default Card</Card.Title>
          <Card.Subtitle>This is a default card with some content</Card.Subtitle>
        </Card.Header>
        <Card.Content>
          <p>This is the main content area of the card. You can put any content here including text, images, buttons, and other components.</p>
        </Card.Content>
      </>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: (
      <>
        <Card.Header>
          <Card.Title>Outlined Card</Card.Title>
          <Card.Subtitle>This card has an outlined style</Card.Subtitle>
        </Card.Header>
        <Card.Content>
          <p>The outlined variant has a more prominent border and no shadow, giving it a cleaner, flatter appearance.</p>
        </Card.Content>
      </>
    ),
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: (
      <>
        <Card.Header>
          <Card.Title>Elevated Card</Card.Title>
          <Card.Subtitle>This card appears to float above the page</Card.Subtitle>
        </Card.Header>
        <Card.Content>
          <p>The elevated variant has a larger shadow and no border, creating a floating effect that draws attention.</p>
        </Card.Content>
      </>
    ),
  },
};

export const Hoverable: Story = {
  args: {
    hoverable: true,
    children: (
      <>
        <Card.Header>
          <Card.Title>Hoverable Card</Card.Title>
          <Card.Subtitle>This card has hover effects</Card.Subtitle>
        </Card.Header>
        <Card.Content>
          <p>Hover over this card to see the animation effect. It lifts up and increases the shadow.</p>
        </Card.Content>
      </>
    ),
  },
};

export const Clickable: Story = {
  args: {
    clickable: true,
    onClick: () => alert('Card clicked!'),
    children: (
      <>
        <Card.Header>
          <Card.Title>Clickable Card</Card.Title>
          <Card.Subtitle>This entire card is clickable</Card.Subtitle>
        </Card.Header>
        <Card.Content>
          <p>Click anywhere on this card to trigger the action. It supports both mouse clicks and keyboard navigation.</p>
        </Card.Content>
      </>
    ),
  },
};

export const WithFooter: Story = {
  args: {
    children: (
      <>
        <Card.Header>
          <Card.Title>Card with Footer</Card.Title>
          <Card.Subtitle>This card includes a footer section</Card.Subtitle>
        </Card.Header>
        <Card.Content>
          <p>This card demonstrates the footer component which is separated from the main content with a border.</p>
        </Card.Content>
        <Card.Footer>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Button size="sm">Primary Action</Button>
            <Button variant="outline" size="sm">Secondary</Button>
          </div>
        </Card.Footer>
      </>
    ),
  },
};

export const BlogPostCard: Story = {
  args: {
    variant: 'elevated',
    hoverable: true,
    children: (
      <>
        <Card.Header>
          <Card.Title>Building Modern React Applications</Card.Title>
          <Card.Subtitle>Published on March 15, 2024 • 5 min read</Card.Subtitle>
        </Card.Header>
        <Card.Content>
          <p>Learn the latest best practices for building scalable, maintainable React applications with modern tools and techniques.</p>
          <p>We'll cover component architecture, state management, testing strategies, and performance optimization.</p>
        </Card.Content>
        <Card.Footer>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button style={{ 
                background: 'none', 
                border: 'none', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.25rem',
                color: '#6b7280',
                cursor: 'pointer'
              }}>
                <Heart size={16} />
                24
              </button>
              <button style={{ 
                background: 'none', 
                border: 'none', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.25rem',
                color: '#6b7280',
                cursor: 'pointer'
              }}>
                <MessageCircle size={16} />
                8
              </button>
              <button style={{ 
                background: 'none', 
                border: 'none', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.25rem',
                color: '#6b7280',
                cursor: 'pointer'
              }}>
                <Share size={16} />
                Share
              </button>
            </div>
            <Button size="sm">Read More</Button>
          </div>
        </Card.Footer>
      </>
    ),
  },
};

export const ProductCard: Story = {
  args: {
    variant: 'default',
    hoverable: true,
    children: (
      <>
        <div style={{ 
          height: '200px', 
          backgroundColor: '#f3f4f6', 
          borderRadius: '0.5rem',
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#6b7280'
        }}>
          Product Image
        </div>
        <Card.Header>
          <Card.Title>Premium Wireless Headphones</Card.Title>
          <Card.Subtitle>High-quality audio experience</Card.Subtitle>
        </Card.Header>
        <Card.Content>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>$199.99</span>
            <span style={{ fontSize: '1rem', color: '#6b7280', textDecoration: 'line-through' }}>$249.99</span>
            <span style={{ 
              backgroundColor: '#10b981', 
              color: 'white', 
              fontSize: '0.75rem', 
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem'
            }}>
              20% OFF
            </span>
          </div>
          <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: 0 }}>
            Premium noise-cancelling headphones with 30-hour battery life and crystal-clear sound quality.
          </p>
        </Card.Content>
        <Card.Footer>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Button fullWidth>Add to Cart</Button>
            <Button variant="outline">♡</Button>
          </div>
        </Card.Footer>
      </>
    ),
  },
};

export const SmallPadding: Story = {
  args: {
    padding: 'sm',
    children: (
      <>
        <Card.Title>Small Padding</Card.Title>
        <Card.Content>
          <p>This card uses small padding for a more compact layout.</p>
        </Card.Content>
      </>
    ),
  },
};

export const LargePadding: Story = {
  args: {
    padding: 'lg',
    children: (
      <>
        <Card.Title>Large Padding</Card.Title>
        <Card.Content>
          <p>This card uses large padding for more breathing room and a spacious feel.</p>
        </Card.Content>
      </>
    ),
  },
};
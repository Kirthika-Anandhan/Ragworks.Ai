import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from './Modal';
import { Button } from '../Button/Button';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

interface ModalWithButtonProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  title?: string;
  children: React.ReactNode;
}

const ModalWithButton = ({ size = 'md', title, children }: ModalWithButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={title}
        size={size}
      >
        {children}
      </Modal>
    </>
  );
};

export const Default: Story = {
  render: () => (
    <ModalWithButton title="Default Modal">
      <p>This is a default modal with some content. You can put any content here.</p>
      <p>The modal will close when you click the X button, click outside the modal, or press the Escape key.</p>
    </ModalWithButton>
  ),
};

export const Small: Story = {
  render: () => (
    <ModalWithButton title="Small Modal" size="sm">
      <p>This is a small modal perfect for confirmations or simple messages.</p>
    </ModalWithButton>
  ),
};

export const Large: Story = {
  render: () => (
    <ModalWithButton title="Large Modal" size="lg">
      <div>
        <p>This is a large modal with more content space.</p>
        <h3 style={{ margin: '1rem 0' }}>Features:</h3>
        <ul>
          <li>More content space</li>
          <li>Better for forms and complex layouts</li>
          <li>Responsive design</li>
          <li>Smooth animations</li>
        </ul>
      </div>
    </ModalWithButton>
  ),
};

export const ExtraLarge: Story = {
  render: () => (
    <ModalWithButton title="Extra Large Modal" size="xl">
      <div>
        <p>This is an extra large modal for maximum content.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '1rem' }}>
          <div>
            <h3>Left Column</h3>
            <p>This modal size is perfect for complex forms, data tables, or side-by-side content layouts.</p>
          </div>
          <div>
            <h3>Right Column</h3>
            <p>The extra large size provides ample space for detailed interfaces while maintaining good UX.</p>
          </div>
        </div>
      </div>
    </ModalWithButton>
  ),
};

const WithoutCloseButtonComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Modal Without Close Button"
        showCloseButton={false}
      >
        <p>This modal doesn't have a close button. You can still close it by clicking outside or pressing Escape.</p>
        <div style={{ marginTop: '1rem' }}>
          <Button onClick={() => setIsOpen(false)}>Close with Button</Button>
        </div>
      </Modal>
    </>
  );
};

export const WithoutCloseButton: Story = {
  render: () => <WithoutCloseButtonComponent />,
};

const WithFormComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Form Modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Contact Form"
        size="md"
      >
        <form onSubmit={(e) => e.preventDefault()}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
              Name
            </label>
            <input
              type="text"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '0.375rem',
              }}
              placeholder="Enter your name"
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
              Email
            </label>
            <input
              type="email"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '0.375rem',
              }}
              placeholder="Enter your email"
            />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
              Message
            </label>
            <textarea
              rows={4}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '0.375rem',
                resize: 'vertical',
              }}
              placeholder="Enter your message"
            />
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
            <Button variant="ghost" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">
              Send Message
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export const WithForm: Story = {
  render: () => <WithFormComponent />,
};
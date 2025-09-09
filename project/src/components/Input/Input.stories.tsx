import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { Mail, Lock, Search } from 'lucide-react';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email',
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    error: 'Password must be at least 8 characters',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    helperText: 'Username must be unique and contain only letters and numbers',
  },
};

export const WithStartIcon: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    startIcon: <Mail size={16} />,
  },
};

export const WithEndIcon: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    endIcon: <Lock size={16} />,
  },
};

export const SearchInput: Story = {
  args: {
    placeholder: 'Search...',
    startIcon: <Search size={16} />,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Input',
    placeholder: 'This input takes full width',
    fullWidth: true,
  },
};
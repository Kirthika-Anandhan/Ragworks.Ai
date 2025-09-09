import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../theme/theme';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const ButtonBase = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.borderRadius.md};
  font-weight: ${theme.typography.fontWeights.medium};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${theme.colors.primary[200]};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  }

  ${props => props.fullWidth && css`
    width: 100%;
  `}

  /* Size variants */
  ${props => props.size === 'sm' && css`
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    font-size: ${theme.typography.fontSizes.sm};
    height: 2rem;
  `}

  ${props => (!props.size || props.size === 'md') && css`
    padding: ${theme.spacing.md} ${theme.spacing.lg};
    font-size: ${theme.typography.fontSizes.base};
    height: 2.5rem;
  `}

  ${props => props.size === 'lg' && css`
    padding: ${theme.spacing.lg} ${theme.spacing.xl};
    font-size: ${theme.typography.fontSizes.lg};
    height: 3rem;
  `}

  /* Variant styles */
  ${props => (!props.variant || props.variant === 'primary') && css`
    background-color: ${theme.colors.primary[600]};
    color: white;
    border: 1px solid ${theme.colors.primary[600]};

    &:hover:not(:disabled) {
      background-color: ${theme.colors.primary[700]};
      border-color: ${theme.colors.primary[700]};
      transform: translateY(-1px);
      box-shadow: ${theme.shadows.md};
    }

    &:active {
      transform: translateY(0);
      box-shadow: ${theme.shadows.sm};
    }
  `}

  ${props => props.variant === 'secondary' && css`
    background-color: ${theme.colors.gray[600]};
    color: white;
    border: 1px solid ${theme.colors.gray[600]};

    &:hover:not(:disabled) {
      background-color: ${theme.colors.gray[700]};
      border-color: ${theme.colors.gray[700]};
      transform: translateY(-1px);
      box-shadow: ${theme.shadows.md};
    }

    &:active {
      transform: translateY(0);
      box-shadow: ${theme.shadows.sm};
    }
  `}

  ${props => props.variant === 'outline' && css`
    background-color: transparent;
    color: ${theme.colors.primary[600]};
    border: 1px solid ${theme.colors.primary[300]};

    &:hover:not(:disabled) {
      background-color: ${theme.colors.primary[50]};
      border-color: ${theme.colors.primary[400]};
      transform: translateY(-1px);
      box-shadow: ${theme.shadows.md};
    }

    &:active {
      transform: translateY(0);
      background-color: ${theme.colors.primary[100]};
    }
  `}

  ${props => props.variant === 'ghost' && css`
    background-color: transparent;
    color: ${theme.colors.gray[600]};
    border: 1px solid transparent;

    &:hover:not(:disabled) {
      background-color: ${theme.colors.gray[100]};
      color: ${theme.colors.gray[700]};
      transform: translateY(-1px);
    }

    &:active {
      transform: translateY(0);
      background-color: ${theme.colors.gray[200]};
    }
  `}

  ${props => props.variant === 'danger' && css`
    background-color: ${theme.colors.error[500]};
    color: white;
    border: 1px solid ${theme.colors.error[500]};

    &:hover:not(:disabled) {
      background-color: ${theme.colors.error[700]};
      border-color: ${theme.colors.error[700]};
      transform: translateY(-1px);
      box-shadow: ${theme.shadows.md};
    }

    &:active {
      transform: translateY(0);
      box-shadow: ${theme.shadows.sm};
    }
  `}
`;

const LoadingSpinner = styled.div`
  width: 1rem;
  height: 1rem;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: ${theme.spacing.sm};

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  loading, 
  disabled, 
  variant,
  size,
  fullWidth,
  ...props 
}) => {
  return (
    <ButtonBase 
      {...props} 
      disabled={disabled || loading}
      variant={variant}
      size={size}
      fullWidth={fullWidth}
    >
      {loading && <LoadingSpinner />}
      {children}
    </ButtonBase>
  );
};
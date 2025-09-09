import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../theme/theme';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const InputContainer = styled.div<{ fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
  
  ${props => props.fullWidth && css`
    width: 100%;
  `}
`;

const Label = styled.label`
  font-size: ${theme.typography.fontSizes.sm};
  font-weight: ${theme.typography.fontWeights.medium};
  color: ${theme.colors.gray[700]};
`;

const InputWrapper = styled.div<{ hasError?: boolean; hasStartIcon?: boolean; hasEndIcon?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;

  ${props => props.hasStartIcon && css`
    padding-left: ${theme.spacing.md};
  `}

  ${props => props.hasEndIcon && css`
    padding-right: ${theme.spacing.md};
  `}
`;

const StyledInput = styled.input<{ hasError?: boolean; hasStartIcon?: boolean; hasEndIcon?: boolean }>`
  width: 100%;
  padding: ${theme.spacing.md};
  border: 1px solid ${theme.colors.gray[300]};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSizes.base};
  background-color: white;
  transition: all 0.2s ease-in-out;

  ${props => props.hasStartIcon && css`
    padding-left: 2.5rem;
  `}

  ${props => props.hasEndIcon && css`
    padding-right: 2.5rem;
  `}

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary[500]};
    box-shadow: 0 0 0 3px ${theme.colors.primary[100]};
  }

  &:hover:not(:focus) {
    border-color: ${theme.colors.gray[400]};
  }

  &:disabled {
    background-color: ${theme.colors.gray[50]};
    color: ${theme.colors.gray[400]};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${theme.colors.gray[400]};
  }

  ${props => props.hasError && css`
    border-color: ${theme.colors.error[500]};

    &:focus {
      border-color: ${theme.colors.error[500]};
      box-shadow: 0 0 0 3px ${theme.colors.error[100]};
    }
  `}
`;

const IconWrapper = styled.div<{ position: 'start' | 'end' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.gray[400]};
  pointer-events: none;

  ${props => props.position === 'start' && css`
    left: ${theme.spacing.md};
  `}

  ${props => props.position === 'end' && css`
    right: ${theme.spacing.md};
  `}
`;

const HelperText = styled.div<{ isError?: boolean }>`
  font-size: ${theme.typography.fontSizes.xs};
  color: ${props => props.isError ? theme.colors.error[600] : theme.colors.gray[500]};
`;

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  helperText,
  fullWidth,
  startIcon,
  endIcon,
  id,
  ...props
}, ref) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <InputContainer fullWidth={fullWidth}>
      {label && <Label htmlFor={inputId}>{label}</Label>}
      <InputWrapper 
        hasError={!!error} 
        hasStartIcon={!!startIcon} 
        hasEndIcon={!!endIcon}
      >
        {startIcon && (
          <IconWrapper position="start">
            {startIcon}
          </IconWrapper>
        )}
        <StyledInput
          {...props}
          ref={ref}
          id={inputId}
          hasError={!!error}
          hasStartIcon={!!startIcon}
          hasEndIcon={!!endIcon}
          aria-invalid={!!error}
          aria-describedby={
            error ? `${inputId}-error` : 
            helperText ? `${inputId}-helper` : undefined
          }
        />
        {endIcon && (
          <IconWrapper position="end">
            {endIcon}
          </IconWrapper>
        )}
      </InputWrapper>
      {error && (
        <HelperText id={`${inputId}-error`} isError={true}>
          {error}
        </HelperText>
      )}
      {helperText && !error && (
        <HelperText id={`${inputId}-helper`} isError={false}>
          {helperText}
        </HelperText>
      )}
    </InputContainer>
  );
});

Input.displayName = 'Input';
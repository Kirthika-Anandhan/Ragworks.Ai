import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../theme/theme';

export interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'outlined' | 'elevated';
  hoverable?: boolean;
  clickable?: boolean;
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
}

const CardContainer = styled.div<CardProps>`
  background-color: white;
  border-radius: ${theme.borderRadius.lg};
  transition: all 0.2s ease-in-out;
  cursor: ${props => props.clickable ? 'pointer' : 'default'};

  /* Padding variants */
  ${props => (!props.padding || props.padding === 'md') && css`
    padding: ${theme.spacing.xl};
  `}

  ${props => props.padding === 'sm' && css`
    padding: ${theme.spacing.lg};
  `}

  ${props => props.padding === 'lg' && css`
    padding: ${theme.spacing['2xl']};
  `}

  ${props => props.padding === 'xl' && css`
    padding: ${theme.spacing['3xl']};
  `}

  /* Variant styles */
  ${props => (!props.variant || props.variant === 'default') && css`
    border: 1px solid ${theme.colors.gray[200]};
    box-shadow: ${theme.shadows.sm};
  `}

  ${props => props.variant === 'outlined' && css`
    border: 2px solid ${theme.colors.gray[200]};
    box-shadow: none;
  `}

  ${props => props.variant === 'elevated' && css`
    border: none;
    box-shadow: ${theme.shadows.lg};
  `}

  /* Hover and clickable states */
  ${props => props.hoverable && css`
    &:hover {
      transform: translateY(-2px);
      box-shadow: ${theme.shadows.xl};
      border-color: ${theme.colors.gray[300]};
    }
  `}

  ${props => props.clickable && css`
    &:hover {
      transform: translateY(-1px);
      box-shadow: ${theme.shadows.lg};
      border-color: ${theme.colors.primary[200]};
    }

    &:active {
      transform: translateY(0);
      box-shadow: ${theme.shadows.md};
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px ${theme.colors.primary[100]};
    }
  `}
`;

const CardHeader = styled.div`
  margin-bottom: ${theme.spacing.lg};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const CardTitle = styled.h3`
  font-size: ${theme.typography.fontSizes.lg};
  font-weight: ${theme.typography.fontWeights.semibold};
  color: ${theme.colors.gray[900]};
  margin: 0 0 ${theme.spacing.sm};
`;

const CardSubtitle = styled.p`
  font-size: ${theme.typography.fontSizes.sm};
  color: ${theme.colors.gray[600]};
  margin: 0;
`;

const CardContent = styled.div`
  margin-bottom: ${theme.spacing.lg};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const CardFooter = styled.div`
  margin-top: ${theme.spacing.lg};
  padding-top: ${theme.spacing.lg};
  border-top: 1px solid ${theme.colors.gray[200]};
  
  &:first-child {
    margin-top: 0;
    padding-top: 0;
    border-top: none;
  }
`;

export const Card: React.FC<CardProps> = ({ 
  children, 
  onClick,
  clickable,
  variant,
  hoverable,
  padding,
  ...props 
}) => {
  return (
    <CardContainer 
      {...props} 
      onClick={onClick}
      clickable={clickable || !!onClick}
      variant={variant}
      hoverable={hoverable}
      padding={padding}
      tabIndex={clickable || !!onClick ? 0 : undefined}
      role={clickable || !!onClick ? 'button' : undefined}
      onKeyDown={
        clickable || !!onClick 
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onClick?.();
              }
            }
          : undefined
      }
    >
      {children}
    </CardContainer>
  );
};

// Sub-components for better composition
Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Content = CardContent;
Card.Footer = CardFooter;
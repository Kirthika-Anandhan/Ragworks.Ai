import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styled, { keyframes, css } from 'styled-components';
import { theme } from '../theme/theme';
import { X } from 'lucide-react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeIn} 0.2s ease-out;
`;

const ModalContainer = styled.div<{ size: string }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.xl};
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: ${slideIn} 0.2s ease-out;

  ${props => props.size === 'sm' && css`
    width: 90vw;
    max-width: 400px;
  `}

  ${props => props.size === 'md' && css`
    width: 90vw;
    max-width: 500px;
  `}

  ${props => props.size === 'lg' && css`
    width: 90vw;
    max-width: 700px;
  `}

  ${props => props.size === 'xl' && css`
    width: 90vw;
    max-width: 900px;
  `}

  @media (min-width: ${theme.breakpoints.sm}) {
    ${props => props.size === 'sm' && css`
      width: 400px;
    `}

    ${props => props.size === 'md' && css`
      width: 500px;
    `}

    ${props => props.size === 'lg' && css`
      width: 700px;
    `}

    ${props => props.size === 'xl' && css`
      width: 900px;
    `}
  }
`;

const ModalHeader = styled.div`
  padding: ${theme.spacing.xl} ${theme.spacing.xl} ${theme.spacing.lg};
  border-bottom: 1px solid ${theme.colors.gray[200]};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalTitle = styled.h2`
  font-size: ${theme.typography.fontSizes.lg};
  font-weight: ${theme.typography.fontWeights.semibold};
  color: ${theme.colors.gray[900]};
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  padding: ${theme.spacing.sm};
  cursor: pointer;
  color: ${theme.colors.gray[400]};
  border-radius: ${theme.borderRadius.md};
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${theme.colors.gray[100]};
    color: ${theme.colors.gray[600]};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${theme.colors.primary[100]};
  }
`;

const ModalContent = styled.div`
  padding: ${theme.spacing.xl};
  flex: 1;
  overflow-y: auto;
`;

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (closeOnEscape && event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Focus management
      const focusableElements = modalRef.current?.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
      );
      if (focusableElements && focusableElements.length > 0) {
        (focusableElements[0] as HTMLElement).focus();
      }

      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, closeOnEscape, onClose]);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOverlayClick && event.target === overlayRef.current) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const modalContent = (
    <Overlay ref={overlayRef} onClick={handleOverlayClick} isOpen={isOpen}>
      <ModalContainer 
        ref={modalRef} 
        size={size}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "modal-title" : undefined}
      >
        {(title || showCloseButton) && (
          <ModalHeader>
            {title && <ModalTitle id="modal-title">{title}</ModalTitle>}
            {showCloseButton && (
              <CloseButton onClick={onClose} aria-label="Close modal">
                <X size={20} />
              </CloseButton>
            )}
          </ModalHeader>
        )}
        <ModalContent>
          {children}
        </ModalContent>
      </ModalContainer>
    </Overlay>
  );

  return createPortal(modalContent, document.body);
};
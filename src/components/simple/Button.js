import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { GoSync } from 'react-icons/go';

const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.375rem 0.75rem;
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  height: 2rem;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  ${({ primary, secondary, success, warning, danger, outline }) => {
    if (primary) {
        return css`
        border-color: var(--primary-blue);
        background-color: var(--primary-blue);
        color: #fff;
        &:hover {
          background-color: #2563eb;
        }
      `;
    } else if (secondary) {
        return css`
        border-color: #374151;
        background-color: #374151;
        color: #fff;
        &:hover {
          background-color: #1f2937;
        }
      `;
    } else if (success) {
        return css`
        border-color: #10b981;
        background-color: #10b981;
        color: #fff;
        &:hover {
          background-color: #047857;
        }
      `;
    } else if (warning) {
        return css`
        border-color: #f59e0b;
        background-color: #f59e0b;
        color: #fff;
        &:hover {
          background-color: #d97706;
        }
      `;
    } else if (danger) {
        return css`
        border-color: #ef4444;
        background-color: #ef4444;
        color: #fff;
        &:hover {
          background-color: #dc2626;
        }
      `;
    } else if (outline) {
        return css`
        border-color: #d1d5db;
        background-color: transparent;
        color: #111827;
        &:hover {
          border-color: #111827;
          background-color: #d1d5db;
          color: #111827;
        }
      `;
    }
}}
  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 9999px;
    `}
`;

function Button({ children, loading, ...rest }) {
    return (
        <ButtonContainer disabled={loading} {...rest}>
            {loading ? <GoSync className='animate-spin' /> : children}
        </ButtonContainer>
    );
}

Button.propTypes = {
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    success: PropTypes.bool,
    warning: PropTypes.bool,
    danger: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    loading: PropTypes.bool,
    children: PropTypes.node,
};

Button.defaultProps = {
    primary: false,
    secondary: false,
    success: false,
    warning: false,
    danger: false,
    outline: false,
    rounded: false,
    loading: false,
};

export default Button;

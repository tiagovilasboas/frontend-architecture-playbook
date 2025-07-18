// Exemplo real de Button para Component-Driven Development
import React from 'react';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export function Button({ variant = 'primary', ...props }: ButtonProps) {
  return (
    <button
      style={{
        background: variant === 'primary' ? '#228be6' : '#e9ecef',
        color: variant === 'primary' ? '#fff' : '#222',
        border: 'none',
        borderRadius: 4,
        padding: '8px 16px',
        fontWeight: 600,
        cursor: 'pointer',
      }}
      {...props}
    />
  );
}

import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large';  // Add the size prop
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  children,
  disabled,
  size = 'medium',  // Default size
  type = 'button',
  ...props
}, ref) => {
  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-5 py-3 text-base',
    large: 'px-7 py-4 text-lg',
  };

  return (
    <button
      ref={ref}
      className={cn(
        `w-auto rounded-full bg-black border-transparent disabled:cursor-not-allowed 
        disabled:opacity-50 text-white font-semibold hover:opacity-75 transition`,
        sizeClasses[size],  // Apply size class based on the size prop
        className
      )}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';
export default Button;
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  showArrow?: boolean;
}

export default function AnimatedButton({ children, to, onClick, className = '', variant = 'primary', showArrow = true }: ButtonProps) {
  const baseClasses = 'relative inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-all duration-300 overflow-hidden group w-full sm:w-auto z-10 hover:-translate-y-0.5';

  const variants = {
    primary: 'bg-[var(--surface-light)] border border-[var(--border-highlight)] text-white shadow-[0_0_18px_rgba(255,122,24,0.10)] hover:border-[var(--accent-orange)] hover:shadow-[0_0_32px_rgba(255,122,24,0.28)]',
    secondary: 'bg-white text-black hover:bg-[var(--accent-yellow)] hover:shadow-[0_0_28px_rgba(255,200,87,0.28)]',
    outline: 'bg-transparent border border-[var(--border)] text-white hover:border-[var(--accent-orange)] hover:text-[var(--accent-yellow)] hover:shadow-[0_0_22px_rgba(255,122,24,0.16)]',
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {showArrow && <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
      </span>
      <span className="absolute inset-0 bg-gradient-to-r from-[rgba(255,122,24,0.14)] to-[rgba(255,200,87,0.14)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </>
  );

  const classNameFinal = `${baseClasses} ${variants[variant]} ${className}`;

  if (to) return <Link to={to} className={classNameFinal}>{content}</Link>;
  return <button onClick={onClick} className={classNameFinal}>{content}</button>;
}

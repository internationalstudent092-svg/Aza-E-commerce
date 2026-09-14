import React, { useState } from 'react';
import { motion } from 'motion/react';
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
  const [isHovered, setIsHovered] = useState(false);
  
  const baseClasses = "relative inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-all duration-300 overflow-hidden group w-full sm:w-auto z-10";
  
  let variantClasses = "";
  if (variant === 'primary') {
    variantClasses = "bg-[var(--surface-light)] border border-[var(--border-highlight)] text-white hover:border-[var(--neon-blue)] shadow-[0_0_15px_rgba(0,168,255,0.1)] hover:shadow-[0_0_30px_rgba(0,168,255,0.3)]";
  } else if (variant === 'secondary') {
    variantClasses = "bg-white text-black hover:bg-[var(--neon-cyan)]";
  } else if (variant === 'outline') {
    variantClasses = "bg-transparent border border-[var(--border)] text-white hover:border-[var(--neon-cyan)] hover:text-[var(--neon-cyan)]";
  }

  const InnerContent = () => (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {showArrow && (
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,168,255,0.1)] to-[rgba(0,229,255,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </>
  );

  // Use motion for magnetic effect on desktop
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    e.currentTarget.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'translate(0px, 0px)';
    setIsHovered(false);
  };

  const wrapperProps = {
    className: "inline-block transition-transform duration-200 ease-out",
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onMouseEnter: () => setIsHovered(true),
  };

  if (to) {
    return (
      <div {...wrapperProps}>
        <Link to={to} className={`${baseClasses} ${variantClasses} ${className}`}>
          <InnerContent />
        </Link>
      </div>
    );
  }

  return (
    <div {...wrapperProps}>
      <button onClick={onClick} className={`${baseClasses} ${variantClasses} ${className}`}>
        <InnerContent />
      </button>
    </div>
  );
}

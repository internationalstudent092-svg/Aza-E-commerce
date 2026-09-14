import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Only run on desktop/fine pointer
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      // Check if hovering over interactive elements
      const isInteractive = target.closest('a, button, [role="button"], input, select, textarea');
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Don't render on mobile devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-[100]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
      />
      
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-cyan-400/50 rounded-full pointer-events-none z-[100] flex items-center justify-center"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(0, 229, 255, 0.1)' : 'transparent',
          borderColor: isHovering ? 'rgba(0, 229, 255, 0.8)' : 'rgba(0, 229, 255, 0.5)',
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.5 }}
      />
    </>
  );
}

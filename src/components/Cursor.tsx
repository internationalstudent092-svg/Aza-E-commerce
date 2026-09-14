import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsHovering(!!(e.target as HTMLElement).closest('a, button, [role="button"], input, select, textarea'));
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null;

  return (
    <>
      <motion.div className="fixed top-0 left-0 w-2 h-2 bg-[var(--accent-yellow)] rounded-full pointer-events-none z-[100] shadow-[0_0_10px_rgba(255,200,87,0.7)]" animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4, scale: isHovering ? 0 : 1 }} transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }} />
      <motion.div className="fixed top-0 left-0 w-8 h-8 border border-[rgba(255,122,24,0.5)] rounded-full pointer-events-none z-[100] flex items-center justify-center" animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16, scale: isHovering ? 1.5 : 1, backgroundColor: isHovering ? 'rgba(255,122,24,0.1)' : 'transparent', borderColor: isHovering ? 'rgba(255,200,87,0.85)' : 'rgba(255,122,24,0.5)' }} transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.5 }} />
    </>
  );
}

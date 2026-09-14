import { useEffect } from 'react';

export default function AnimatedBackground() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Update mouse position for glow-box radial gradients
      const boxes = document.querySelectorAll('.glow-box, .glass-card');
      boxes.forEach((box) => {
        const rect = (box as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        (box as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (box as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div className="animated-bg"></div>
      <div className="noise-overlay"></div>
    </>
  );
}

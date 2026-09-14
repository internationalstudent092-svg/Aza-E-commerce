import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { siteConfig } from '../../data/config';

const navLinks = [
  { name: 'HOME', path: '/' }, { name: 'SERVICES', path: '/services' }, { name: 'COURSES', path: '/courses' },
  { name: 'ABOUT', path: '/about' }, { name: 'PROJECTS', path: '/projects' }, { name: 'BLOG', path: '/blog' },
  { name: 'CONTACT', path: '/contact' }, { name: 'FAQ', path: '/faq' }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'} pointer-events-none`}>
      <nav className={`pointer-events-auto w-fit mx-auto flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-500 ${scrolled ? 'bg-[var(--surface)] backdrop-blur-xl border border-[var(--border)] shadow-lg' : 'bg-[var(--surface-light)] backdrop-blur-md border border-[var(--border)]'}`}>
        <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
          <Link to="/" className="text-lg md:text-xl font-bold tracking-widest text-white shrink-0 font-heading flex items-center relative z-10">
            {siteConfig.name}<span className="text-[var(--accent-orange)] drop-shadow-[0_0_7px_var(--accent-orange)]">.</span>
          </Link>

          <div className="flex items-center space-x-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden" onMouseLeave={() => setHoveredPath(null)}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              const displayHighlight = hoveredPath === link.path || (hoveredPath === null && isActive);
              return (
                <Link key={link.path} to={link.path} onMouseEnter={() => setHoveredPath(link.path)} className={`relative px-4 py-2 text-[10px] md:text-xs font-semibold tracking-[0.15em] whitespace-nowrap transition-colors z-10 ${isActive ? 'text-[var(--accent-yellow)]' : 'text-[var(--text-secondary)] hover:text-white'}`}>
                  {displayHighlight && <motion.div layoutId="navHighlight" className="absolute inset-0 bg-[var(--surface-light)] border border-[rgba(255,122,24,0.3)] rounded-full -z-10 shadow-[0_0_18px_rgba(255,122,24,0.16)]" transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }} />}
                  {link.name}
                  {isActive && <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[var(--accent-orange)] rounded-full shadow-[0_0_6px_var(--accent-orange)]" />}
                </Link>
              );
            })}
          </div>

          <Link to="/contact" className="hidden lg:flex shrink-0 px-6 py-2 rounded-full bg-[rgba(255,122,24,0.08)] border border-[var(--border-highlight)] text-white text-[10px] font-bold tracking-widest hover:bg-[var(--accent-orange)] hover:text-black hover:shadow-[0_0_24px_rgba(255,122,24,0.45)] transition-all uppercase z-10">
            Let's Talk
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}

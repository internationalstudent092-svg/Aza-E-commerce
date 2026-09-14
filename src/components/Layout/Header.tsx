import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { siteConfig } from '../../data/config';

const navLinks = [
  { name: 'HOME', path: '/' },
  { name: 'SERVICES', path: '/services' },
  { name: 'COURSES', path: '/courses' },
  { name: 'ABOUT', path: '/about' },
  { name: 'PROJECTS', path: '/projects' },
  { name: 'BLOG', path: '/blog' },
  { name: 'CONTACT', path: '/contact' },
  { name: 'FAQ', path: '/faq' }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4 ${
        scrolled ? 'py-4' : 'py-6'
      } pointer-events-none`}
    >
      <nav className={`pointer-events-auto w-fit mx-auto flex flex-row items-center justify-between px-4 sm:px-6 py-2 sm:py-3 transition-all duration-500 rounded-full ${
        scrolled 
          ? 'bg-[var(--surface)] backdrop-blur-xl border border-[var(--border)] shadow-lg' 
          : 'bg-[var(--surface-light)] backdrop-blur-md border border-[var(--border)] shadow-sm'
      }`}>
        <div className="flex flex-row items-center space-x-4 md:space-x-6 lg:space-x-8">
          {/* Logo */}
          <Link to="/" className="text-lg md:text-xl font-bold tracking-widest text-white shrink-0 font-heading flex items-center relative z-10">
            {siteConfig.name}<span className="text-[var(--neon-blue)] drop-shadow-[0_0_5px_var(--neon-blue)]">.</span>
          </Link>

          {/* Nav Links - Strictly one line */}
          <div className="flex flex-row items-center space-x-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden shrink-1" onMouseLeave={() => setHoveredPath(null)}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              const isHovered = hoveredPath === link.path;
              const displayHighlight = isHovered || (hoveredPath === null && isActive);

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onMouseEnter={() => setHoveredPath(link.path)}
                  className={`relative px-4 py-2 text-[10px] md:text-xs font-semibold tracking-[0.15em] whitespace-nowrap transition-colors z-10 ${
                    isActive ? 'text-[var(--neon-cyan)] drop-shadow-[0_0_5px_rgba(0,229,255,0.5)]' : 'text-[var(--text-secondary)] hover:text-white'
                  }`}
                >
                  {displayHighlight && (
                    <motion.div
                      layoutId="navHighlight"
                      className="absolute inset-0 bg-[var(--surface-light)] border border-[var(--border-highlight)] rounded-full -z-10 shadow-[0_0_15px_rgba(0,168,255,0.2)]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[var(--neon-cyan)] rounded-full shadow-[0_0_5px_var(--neon-cyan)]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <Link to="/contact" className="hidden lg:flex shrink-0 px-6 py-2 rounded-full bg-[rgba(0,168,255,0.1)] border border-[var(--border-highlight)] text-white text-[10px] font-bold tracking-widest hover:bg-[var(--neon-blue)] hover:text-black hover:shadow-[0_0_20px_rgba(0,168,255,0.6)] transition-all uppercase z-10">
            Let's Talk
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}

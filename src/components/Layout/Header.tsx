import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
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
          ? 'bg-cyan-950/40 backdrop-blur-xl border border-cyan-400/50 shadow-[0_0_20px_rgba(0,229,255,0.2)]' 
          : 'bg-cyan-950/20 backdrop-blur-md border border-cyan-400/30 shadow-[0_0_15px_rgba(0,229,255,0.1)]'
      }`}>
        <div className="flex flex-row items-center space-x-4 md:space-x-6 lg:space-x-8">
          {/* Logo */}
          <Link to="/" className="text-lg md:text-xl font-bold tracking-widest text-white shrink-0 font-heading flex items-center">
            {siteConfig.name}<span className="text-cyan-400 drop-shadow-[0_0_5px_rgba(0,229,255,0.8)]">.</span>
          </Link>

          {/* Nav Links - Strictly one line */}
          <div className="flex flex-row items-center space-x-4 md:space-x-6 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden shrink-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[10px] md:text-xs font-semibold tracking-[0.15em] whitespace-nowrap relative group transition-colors ${
                    isActive ? 'text-cyan-300 drop-shadow-[0_0_5px_rgba(0,229,255,0.5)]' : 'text-cyan-100/70 hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-2 left-0 h-px bg-cyan-400 transition-all duration-300 shadow-[0_0_8px_rgba(0,229,255,0.8)] ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <Link to="/contact" className="hidden lg:flex shrink-0 px-6 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/50 text-cyan-50 text-[10px] font-bold tracking-widest hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(0,229,255,0.6)] transition-all uppercase">
            Let's Talk
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}

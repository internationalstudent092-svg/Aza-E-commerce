import { ReactNode, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import AnimatedBackground from '../AnimatedBackground';
import Cursor from '../Cursor';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '../../data/config';

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    // Dynamic page titles
    const routes: Record<string, string> = {
      '/': `${siteConfig.name} - Digital Experiences`,
      '/services': `Services - ${siteConfig.name}`,
      '/courses': `Courses - ${siteConfig.name}`,
      '/about': `About - ${siteConfig.name}`,
      '/projects': `Projects - ${siteConfig.name}`,
      '/blog': `Blog - ${siteConfig.name}`,
      '/contact': `Contact - ${siteConfig.name}`,
      '/faq': `FAQ - ${siteConfig.name}`,
    };
    
    document.title = routes[location.pathname] || siteConfig.name;
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex flex-col w-full text-white overflow-hidden">
      <AnimatedBackground />
      <Cursor />
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex-grow z-10 w-full relative"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

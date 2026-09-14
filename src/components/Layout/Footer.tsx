import { Link } from 'react-router-dom';
import { siteConfig } from '../../data/config';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-black/60 backdrop-blur-xl pt-24 pb-12 px-6 md:px-12 z-10 relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-20">
        
        <div className="md:col-span-2">
          <Link to="/" className="text-4xl font-black tracking-tighter text-white block mb-6">
            {siteConfig.name}<span className="text-cyan-400">.</span>
          </Link>
          <p className="text-zinc-400 max-w-md text-lg font-light leading-relaxed mb-8">
            {siteConfig.description}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            LET'S BUILD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">THE NEXT THING.</span>
          </h2>
          <Link to="/contact" className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-cyan-400 transition-all group">
            <span>Start a Project</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="text-xs font-bold text-white tracking-widest uppercase mb-4">Navigation</h4>
          <Link to="/" className="text-zinc-400 hover:text-cyan-400 transition-colors">Home</Link>
          <Link to="/services" className="text-zinc-400 hover:text-cyan-400 transition-colors">Services</Link>
          <Link to="/projects" className="text-zinc-400 hover:text-cyan-400 transition-colors">Projects</Link>
          <Link to="/courses" className="text-zinc-400 hover:text-cyan-400 transition-colors">Courses</Link>
          <Link to="/about" className="text-zinc-400 hover:text-cyan-400 transition-colors">About</Link>
          <Link to="/faq" className="text-zinc-400 hover:text-cyan-400 transition-colors">FAQ</Link>
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="text-xs font-bold text-white tracking-widest uppercase mb-4">Connect</h4>
          <a href={`mailto:${siteConfig.email}`} className="text-zinc-400 hover:text-cyan-400 transition-colors">{siteConfig.email}</a>
          <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-cyan-400 transition-colors">Twitter (X)</a>
          <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-cyan-400 transition-colors">GitHub</a>
          <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-cyan-400 transition-colors">LinkedIn</a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-zinc-500 text-sm">
        <p>© 2026 {siteConfig.fullName}. All Rights Reserved.</p>
        <p className="mt-4 md:mt-0">Designed for performance.</p>
      </div>
    </footer>
  );
}

import { motion } from 'motion/react';
import { projects } from '../data/projects';
import { ArrowUpRight } from 'lucide-react';
import AnimatedButton from '../components/AnimatedButton';

export default function Projects() {
  return (
    <div className="w-full flex flex-col items-center pb-32">
      {/* Hero */}
      <section className="relative w-full pt-48 pb-24 px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <span className="text-[var(--neon-cyan)] text-sm font-semibold tracking-widest uppercase mb-6 block">Selected Work</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            Digital Experiences <br/>
            <span className="text-transparent bg-clip-text bg-[var(--neon-gradient)]">Built to Perform.</span>
          </h1>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="w-full max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className={`group flex flex-col ${idx % 2 !== 0 ? 'md:mt-24' : ''}`}
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-8 glow-box cursor-pointer glass-card">
                <div className="absolute inset-0 bg-black/40 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                   <div className="w-16 h-16 rounded-full bg-[var(--neon-cyan)] text-black flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100 shadow-[0_0_20px_var(--neon-cyan)]">
                     <ArrowUpRight className="w-6 h-6" />
                   </div>
                </div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out opacity-80 group-hover:opacity-100"
                />
              </div>
              
              <div className="flex flex-col space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[var(--neon-cyan)] text-xs font-semibold tracking-widest uppercase">{project.category}</span>
                  <span className="text-[var(--text-muted)] text-sm font-mono">{project.id}</span>
                </div>
                <h3 className="text-3xl font-bold text-white group-hover:text-[var(--neon-cyan)] transition-colors">{project.title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed font-light">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--surface-light)] text-[var(--text-secondary)] text-xs">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-32 flex justify-center">
          <AnimatedButton to="/contact" variant="outline">
            Discuss a Project
          </AnimatedButton>
        </div>
      </section>
    </div>
  );
}

import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { services } from '../data/services';
import AnimatedButton from '../components/AnimatedButton';

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-12 pt-24 pb-12 overflow-hidden perspective-1000">
        <motion.div 
          style={{ y: y1 }}
          className="max-w-4xl w-full flex flex-col items-center text-center z-10"
        >
          
          {/* Main Content */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col items-center justify-center"
          >
            <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--surface)] backdrop-blur-md w-fit mx-auto shadow-[0_0_15px_rgba(0,168,255,0.1)]">
              <div className="w-2 h-2 rounded-full bg-[var(--neon-cyan)] animate-pulse shadow-[0_0_8px_var(--neon-cyan)]"></div>
              <span className="text-xs font-semibold tracking-wider text-zinc-300 uppercase">Available for new projects</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              BUILDING DIGITAL <br />
              <span className="text-transparent bg-clip-text bg-[var(--neon-gradient)]">EXPERIENCES</span> THAT MOVE PEOPLE.
            </h1>
            
            <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-10 leading-relaxed max-w-2xl mx-auto font-light">
              I design and build modern digital experiences, high-performance websites, eCommerce solutions, and practical learning experiences for businesses and ambitious creators.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <AnimatedButton to="/projects" variant="primary">
                Explore My Work
              </AnimatedButton>
              <AnimatedButton to="/contact" variant="outline" showArrow={false}>
                Let's Work Together
              </AnimatedButton>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50"
        >
          <span className="text-[10px] tracking-widest uppercase mb-2 text-[var(--neon-cyan)]">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[var(--neon-cyan)] to-transparent"></div>
        </motion.div>
      </section>

      {/* Services Preview Section */}
      <section className="w-full py-32 px-6 md:px-12 bg-[var(--surface-light)] border-y border-[var(--border)] relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-[var(--neon-cyan)] text-sm font-semibold tracking-widest uppercase mb-4 block">Capabilities</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Services That Turn Ideas<br/>Into Digital Products.</h2>
            </div>
            <Link to="/services" className="mt-6 md:mt-0 inline-flex items-center space-x-2 text-[var(--text-secondary)] hover:text-[var(--neon-cyan)] transition-colors group">
              <span className="font-medium uppercase tracking-widest text-sm">View All Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-8 rounded-3xl glow-box overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 text-6xl font-black text-white group-hover:text-[var(--neon-cyan)] transition-colors duration-500">{service.id}</div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{service.title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-8 relative z-10">{service.description}</p>
                <div className="flex items-center space-x-2 text-[var(--neon-cyan)] relative z-10">
                  <span className="text-sm font-semibold uppercase tracking-widest">Learn More</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="w-full py-32 px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
           <div className="flex flex-col mb-16">
            <span className="text-[var(--neon-cyan)] text-sm font-semibold tracking-widest uppercase mb-4 block">Selected Work</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Recent Projects.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(0, 4).map((project, idx) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`group relative rounded-3xl overflow-hidden glass-card p-0 ${idx === 0 || idx === 3 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-square md:aspect-[4/5]'}`}
              >
                <div className="absolute inset-0 bg-black/60 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-12">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="h-full flex flex-col justify-end"
                  >
                    <span className="text-[var(--neon-cyan)] text-sm font-semibold tracking-widest uppercase mb-2">{project.category}</span>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map(tech => (
                        <span key={tech} className="px-3 py-1 rounded-full bg-[var(--surface-light)] border border-[var(--border)] text-white text-xs backdrop-blur-md">{tech}</span>
                      ))}
                    </div>
                    <Link to="/projects" className="inline-flex items-center space-x-2 text-white hover:text-[var(--neon-cyan)] transition-colors w-fit group-hover:drop-shadow-[0_0_8px_rgba(0,168,255,0.8)]">
                      <span className="font-medium uppercase tracking-widest text-sm">View Project</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out opacity-60 group-hover:opacity-30" 
                />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 flex justify-center">
            <AnimatedButton to="/projects" variant="outline">
              View All Projects
            </AnimatedButton>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-32 px-6 md:px-12 bg-transparent relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
            READY TO START <br /> YOUR NEXT PROJECT?
          </h2>
          <p className="text-xl text-[var(--text-secondary)] mb-12 font-light max-w-2xl mx-auto">
            Have an idea, project, business or learning goal? Let's turn it into something real.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <AnimatedButton to="/contact" variant="primary">
              Let's Build Together
            </AnimatedButton>
          </div>
        </div>
      </section>
    </div>
  );
}

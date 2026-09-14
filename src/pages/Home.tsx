import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { services } from '../data/services';

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-12 pt-24 pb-12 overflow-hidden">
        <div className="max-w-4xl w-full flex flex-col items-center text-center z-10">
          
          {/* Main Content */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col items-center justify-center"
          >
            <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md w-fit mx-auto">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
              <span className="text-xs font-semibold tracking-wider text-zinc-300 uppercase">Available for new projects</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              BUILDING DIGITAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">EXPERIENCES</span> THAT MOVE PEOPLE.
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
              I design and build modern digital experiences, high-performance websites, eCommerce solutions, and practical learning experiences for businesses and ambitious creators.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/projects" className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-cyan-400 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.15)] group">
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="w-full sm:w-auto px-8 py-4 glow-box text-white font-semibold rounded-full hover:bg-white/10 transition-colors backdrop-blur-md text-center">
                Let's Work Together
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50"
        >
          <span className="text-[10px] tracking-widest uppercase mb-2">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
        </motion.div>
      </section>

      {/* Services Preview Section */}
      <section className="w-full py-32 px-6 md:px-12 bg-black/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Capabilities</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Services That Turn Ideas<br/>Into Digital Products.</h2>
            </div>
            <Link to="/services" className="mt-6 md:mt-0 inline-flex items-center space-x-2 text-zinc-400 hover:text-cyan-400 transition-colors group">
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
                <div className="absolute top-0 right-0 p-8 opacity-10 text-6xl font-black text-white group-hover:text-cyan-400 transition-colors">{service.id}</div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{service.title}</h3>
                <p className="text-zinc-400 leading-relaxed mb-8 relative z-10">{service.description}</p>
                <div className="flex items-center space-x-2 text-cyan-400 relative z-10">
                  <span className="text-sm font-semibold uppercase tracking-widest">Learn More</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="w-full py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
           <div className="flex flex-col mb-16">
            <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Selected Work</span>
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
                className={`group relative rounded-3xl overflow-hidden glow-box p-0 ${idx === 0 || idx === 3 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-square md:aspect-[4/5]'}`}
              >
                <div className="absolute inset-0 bg-black/60 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-12">
                  <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-2">{project.category}</span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-3 py-1 rounded-full bg-white/10 text-white text-xs backdrop-blur-md">{tech}</span>
                    ))}
                  </div>
                  <Link to="/projects" className="inline-flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors w-fit">
                    <span className="font-medium uppercase tracking-widest text-sm">View Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out opacity-60 group-hover:opacity-40" 
                />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 flex justify-center">
            <Link to="/projects" className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-full hover:bg-white hover:text-black transition-colors">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-32 px-6 md:px-12 bg-gradient-to-b from-black to-[#050505] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
            READY TO START <br /> YOUR NEXT PROJECT?
          </h2>
          <p className="text-xl text-zinc-400 mb-12 font-light max-w-2xl mx-auto">
            Have an idea, project, business or learning goal? Let's turn it into something real.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/contact" className="w-full sm:w-auto px-10 py-5 bg-white text-black text-lg font-bold rounded-full hover:bg-cyan-400 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.2)]">
              Let's Build Together
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

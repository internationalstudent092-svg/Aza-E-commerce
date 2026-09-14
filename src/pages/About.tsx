import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const stats = [
    { label: "Years Experience", value: "8+" },
    { label: "Projects Completed", value: "120+" },
    { label: "Happy Clients", value: "85+" },
    { label: "Global Awards", value: "14" }
  ];

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
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-6 block">My Story</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            More Than Just <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Writing Code.</span>
          </h1>
        </motion.div>
      </section>

      {/* Content */}
      <section className="w-full max-w-7xl px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden glow-box"
          >
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" 
              alt="Workspace" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
               <h3 className="text-2xl font-bold text-white">EZA Studio</h3>
               <p className="text-cyan-400 text-sm">San Francisco, CA</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-8"
          >
            <h2 className="text-3xl font-bold text-white">Engineering Digital Excellence.</h2>
            <div className="space-y-6 text-lg text-zinc-400 font-light leading-relaxed">
              <p>
                I am a senior frontend engineer, UI/UX designer, and creative developer with a deep passion for building high-performance web applications and immersive digital experiences.
              </p>
              <p>
                My philosophy is simple: technology should be invisible, enabling seamless and beautiful user interactions. I specialize in bridging the gap between sophisticated design and complex technical architecture.
              </p>
              <p>
                Whether it's a headless eCommerce platform, a real-time analytics dashboard, or an award-winning creative portfolio, I bring a meticulous attention to detail and a commitment to modern web standards.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-4xl font-black text-white mb-2">{stat.value}</span>
                  <span className="text-sm font-semibold tracking-widest text-zinc-500 uppercase">{stat.label}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-8">
              <Link to="/contact" className="inline-flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors group pb-1 border-b border-white/20 hover:border-cyan-400">
                <span className="font-semibold uppercase tracking-widest text-sm">Get In Touch</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

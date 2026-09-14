import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowRight, Code2, Palette, Database, Globe } from 'lucide-react';
import AnimatedButton from '../components/AnimatedButton';
import { useRef } from 'react';

export default function About() {
  const stats = [
    { label: "Years Experience", value: "8+" },
    { label: "Projects Completed", value: "120+" },
    { label: "Happy Clients", value: "85+" },
    { label: "Global Awards", value: "14" }
  ];

  const skills = [
    { icon: <Code2 className="w-6 h-6 text-[var(--neon-cyan)]" />, name: "Frontend Engineering", description: "React, Next.js, Vue, TypeScript, Framer Motion" },
    { icon: <Palette className="w-6 h-6 text-[var(--neon-blue)]" />, name: "UI/UX Design", description: "Figma, Design Systems, Prototyping, Wireframing" },
    { icon: <Database className="w-6 h-6 text-[var(--neon-cyan)]" />, name: "Backend Systems", description: "Node.js, PostgreSQL, GraphQL, Serverless APIs" },
    { icon: <Globe className="w-6 h-6 text-[var(--neon-blue)]" />, name: "Web GL & 3D", description: "Three.js, React Three Fiber, GLSL Shaders" },
  ];

  const timeline = [
    { year: "2026", title: "Senior Performance Engineer", company: "AZA Studio", desc: "Leading frontend architecture and creative development for premium digital products." },
    { year: "2023", title: "Lead Creative Developer", company: "Digital Wave Agency", desc: "Built award-winning WebGL experiences and headless eCommerce platforms." },
    { year: "2020", title: "Full-Stack Developer", company: "TechNova Solutions", desc: "Developed scalable SaaS applications and comprehensive design systems." },
    { year: "2018", title: "Frontend Intern", company: "Creative Labs", desc: "Started journey in web development focusing on responsive design and interactive UI." },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="w-full flex flex-col items-center pb-32 overflow-hidden">
      {/* Hero */}
      <section className="relative w-full pt-48 pb-24 px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <span className="text-[var(--neon-cyan)] text-sm font-semibold tracking-widest uppercase mb-6 block">My Story</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            More Than Just <br/>
            <span className="text-transparent bg-clip-text bg-[var(--neon-gradient)]">Writing Code.</span>
          </h1>
        </motion.div>
      </section>

      {/* Content */}
      <section className="w-full max-w-7xl px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-card group"
          >
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" 
              alt="Workspace" 
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] to-transparent flex flex-col justify-end p-8">
               <h3 className="text-2xl font-bold text-white">AZA Studio</h3>
               <p className="text-[var(--neon-cyan)] text-sm font-semibold tracking-widest uppercase">San Francisco, CA</p>
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
            <div className="space-y-6 text-lg text-[var(--text-secondary)] font-light leading-relaxed">
              <p>
                I am a senior frontend engineer, UI/UX designer, and creative developer with a deep passion for building high-performance web applications and immersive digital experiences.
              </p>
              <p>
                My philosophy is simple: technology should be invisible, enabling seamless and beautiful user interactions. I specialize in bridging the gap between sophisticated design and complex technical architecture.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-[var(--border)]">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col group">
                  <span className="text-4xl font-black text-white mb-2 group-hover:text-[var(--neon-cyan)] transition-colors">{stat.value}</span>
                  <span className="text-xs font-semibold tracking-widest text-[var(--text-muted)] uppercase">{stat.label}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-8">
              <AnimatedButton to="/contact" variant="primary">
                Get In Touch
              </AnimatedButton>
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[var(--neon-cyan)] text-sm font-semibold tracking-widest uppercase mb-4 block">Expertise</span>
            <h2 className="text-4xl font-bold text-white">Technical Arsenal.</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glow-box p-8 flex flex-col items-start group"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--surface-light)] border border-[var(--border)] flex items-center justify-center mb-6 group-hover:border-[var(--neon-cyan)] group-hover:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{skill.name}</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[var(--neon-blue)] text-sm font-semibold tracking-widest uppercase mb-4 block">Experience</span>
            <h2 className="text-4xl font-bold text-white">The Journey.</h2>
          </motion.div>

          <div className="relative max-w-4xl mx-auto pl-8 md:pl-0">
            {/* Animated Center Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-[var(--surface-light)] -translate-x-1/2 overflow-hidden hidden md:block">
              <motion.div 
                className="absolute top-0 left-0 w-full bg-[var(--neon-gradient)] shadow-[0_0_15px_var(--neon-cyan)] origin-top"
                style={{ height: '100%', scaleY }}
              />
            </div>
            {/* Mobile Line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-[var(--surface-light)] md:hidden">
               <motion.div 
                className="absolute top-0 left-0 w-full bg-[var(--neon-gradient)] shadow-[0_0_15px_var(--neon-cyan)] origin-top"
                style={{ height: '100%', scaleY }}
              />
            </div>

            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center justify-between mb-16 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Center Node */}
                <div className="absolute left-[-36px] md:left-1/2 w-4 h-4 rounded-full bg-[var(--background)] border-2 border-[var(--neon-cyan)] -translate-x-1/2 mt-1.5 md:mt-0 shadow-[0_0_10px_var(--neon-cyan)] z-10 hidden md:block" />
                <div className="absolute left-0 w-3 h-3 rounded-full bg-[var(--background)] border-2 border-[var(--neon-cyan)] -translate-x-1/2 mt-1.5 md:hidden z-10" />

                <div className={`w-full md:w-[45%] pl-6 md:pl-0 ${idx % 2 === 0 ? 'md:pl-12' : 'md:text-right md:pr-12'}`}>
                  <div className="glass-card p-6 md:p-8 group hover:border-[var(--neon-blue)] transition-colors inline-block w-full">
                    <span className="text-[var(--neon-cyan)] text-xs font-bold tracking-widest uppercase mb-2 block">{item.year}</span>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[var(--neon-cyan)] transition-colors">{item.title}</h3>
                    <h4 className="text-sm font-semibold text-[var(--text-secondary)] mb-4">{item.company}</h4>
                    <p className="text-[var(--text-muted)] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                
                <div className="w-full md:w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

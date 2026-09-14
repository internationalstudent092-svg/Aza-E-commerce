import { motion } from 'motion/react';
import { services } from '../data/services';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import AnimatedButton from '../components/AnimatedButton';

export default function Services() {
  return (
    <div className="w-full flex flex-col items-center pb-24">
      {/* Hero */}
      <section className="relative w-full pt-48 pb-24 px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <span className="text-[var(--neon-cyan)] text-sm font-semibold tracking-widest uppercase mb-6 block">Capabilities</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            Services That Turn Ideas <br/>
            <span className="text-transparent bg-clip-text bg-[var(--neon-gradient)]">Into Digital Products.</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] font-light max-w-2xl mx-auto leading-relaxed">
            From high-performance web applications to immersive 3D experiences, we provide end-to-end digital solutions designed for modern businesses.
          </p>
        </motion.div>
      </section>

      {/* Services List */}
      <section className="w-full max-w-5xl px-6 md:px-12">
        <div className="flex flex-col space-y-16 md:space-y-32">
          {services.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="grid md:grid-cols-2 gap-12 md:gap-24 items-center group"
            >
              <div className={`flex flex-col ${idx % 2 !== 0 ? 'md:order-2' : ''}`}>
                <span className="text-6xl md:text-8xl font-black text-white/5 mb-4 font-mono group-hover:text-[rgba(0,168,255,0.05)] transition-colors duration-700">{service.id}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{service.title}</h2>
                <p className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed font-light">{service.description}</p>
                
                <div className="space-y-4 mb-10">
                  <h4 className="text-sm font-semibold tracking-widest text-[var(--text-muted)] uppercase mb-4">Includes:</h4>
                  {service.includes.map((item, i) => (
                    <div key={i} className="flex items-center space-x-3 text-white">
                      <CheckCircle2 className="w-5 h-5 text-[var(--neon-cyan)] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <AnimatedButton to="/contact" variant="outline">
                    Request Service
                  </AnimatedButton>
                </div>
              </div>
              
              <div className={`relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden glass-card flex items-center justify-center ${idx % 2 !== 0 ? 'md:order-1' : ''} group-hover:border-[var(--neon-blue)] transition-colors duration-700`}>
                 <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,168,255,0.05)] to-[rgba(0,229,255,0.05)]"></div>
                 
                 {/* Decorative abstract elements based on service type can go here, using simple CSS shapes */}
                 <div className="relative w-full h-full flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full border border-[var(--border)] group-hover:border-[var(--neon-cyan)] animate-[spin_15s_linear_infinite] transition-colors duration-700"></div>
                    <div className="w-32 h-32 rounded-full border border-[var(--border)] group-hover:border-[var(--neon-blue)] absolute animate-[spin_10s_linear_infinite_reverse] transition-colors duration-700"></div>
                    <div className="w-16 h-16 bg-[var(--surface-light)] rounded-lg absolute rotate-45 border border-[var(--border)] group-hover:border-[var(--neon-cyan)] group-hover:shadow-[0_0_20px_var(--neon-cyan)] transition-all duration-700"></div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

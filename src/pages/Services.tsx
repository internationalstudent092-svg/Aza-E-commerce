import { motion } from 'motion/react';
import { services } from '../data/services';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

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
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-6 block">Capabilities</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            Services That Turn Ideas <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Into Digital Products.</span>
          </h1>
          <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
            From high-performance web applications to immersive 3D experiences, we provide end-to-end digital solutions designed for modern businesses.
          </p>
        </motion.div>
      </section>

      {/* Services List */}
      <section className="w-full max-w-5xl px-6 md:px-12">
        <div className="flex flex-col space-y-12 md:space-y-24">
          {services.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="grid md:grid-cols-2 gap-12 md:gap-24 items-center"
            >
              <div className={`flex flex-col ${idx % 2 !== 0 ? 'md:order-2' : ''}`}>
                <span className="text-6xl md:text-8xl font-black text-white/5 mb-4">{service.id}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{service.title}</h2>
                <p className="text-lg text-zinc-400 mb-8 leading-relaxed font-light">{service.description}</p>
                
                <div className="space-y-4 mb-10">
                  <h4 className="text-sm font-semibold tracking-widest text-white uppercase mb-4">Includes:</h4>
                  {service.includes.map((item, i) => (
                    <div key={i} className="flex items-center space-x-3 text-zinc-300">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <Link to="/contact" className="inline-flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors group w-fit pb-1 border-b border-white/20 hover:border-cyan-400">
                  <span className="font-semibold uppercase tracking-widest text-sm">Request Service</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
              
              <div className={`relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden glow-box flex items-center justify-center ${idx % 2 !== 0 ? 'md:order-1' : ''}`}>
                 <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10"></div>
                 {/* Decorative abstract elements based on service type can go here, using simple CSS shapes */}
                 <div className="w-32 h-32 rounded-full border border-white/20 animate-[spin_10s_linear_infinite]"></div>
                 <div className="w-16 h-16 rounded-full border border-cyan-400/50 absolute animate-[spin_5s_linear_infinite_reverse]"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

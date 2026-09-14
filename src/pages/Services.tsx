import { motion } from 'motion/react';
import { services } from '../data/services';
import { CheckCircle2 } from 'lucide-react';
import AnimatedButton from '../components/AnimatedButton';
import DetailsPanel from '../components/DetailsPanel';

export default function Services() {
  return <div className="w-full flex flex-col items-center pb-40">
    <section className="relative w-full pt-48 pb-28 px-6 md:px-12 flex flex-col items-center text-center">
      <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.8}} className="max-w-4xl">
        <span className="text-[var(--neon-cyan)] text-sm font-semibold tracking-widest uppercase mb-6 block">Capabilities</span>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">Services That Turn Ideas<br/><span className="text-transparent bg-clip-text bg-[var(--neon-gradient)]">Into Digital Products.</span></h1>
        <p className="text-xl text-[var(--text-secondary)] font-light max-w-2xl mx-auto leading-relaxed">From high-performance web applications to immersive 3D experiences, we provide end-to-end digital solutions designed for modern businesses.</p>
      </motion.div>
    </section>
    <section className="w-full max-w-5xl px-6 md:px-12">
      <div className="flex flex-col gap-12 md:gap-20">
        {services.map((service,idx)=><motion.article key={service.id} initial={{opacity:0,y:35}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-80px'}} transition={{duration:.6}} className="glass-card p-7 md:p-10 group">
          <div className="grid md:grid-cols-[1fr_280px] gap-10 items-center">
            <div>
              <span className="text-6xl md:text-8xl font-black text-white/5 font-mono">{service.id}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4 group-hover:text-[var(--neon-cyan)] transition-colors">{service.title}</h2>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl">{service.description}</p>
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">{service.includes.slice(0,2).map(item=><span key={item} className="text-sm text-white/75">• {item}</span>)}</div>
              <DetailsPanel>
                <div className="grid md:grid-cols-2 gap-8">
                  <div><h4 className="text-white font-semibold mb-4">Complete service scope</h4><div className="space-y-3">{service.includes.map(item=><div key={item} className="flex gap-3"><CheckCircle2 className="w-4 h-4 text-[var(--neon-cyan)] shrink-0 mt-1"/><span>{item}</span></div>)}</div></div>
                  <div><h4 className="text-white font-semibold mb-3">How it helps</h4><p className="leading-relaxed">A focused, performance-minded implementation built around your goals, existing stack, user experience and long-term maintainability. The service can be scoped from a targeted improvement to a complete delivery.</p></div>
                </div>
                <div className="mt-7"><AnimatedButton to="/contact" variant="outline" showArrow>Request This Service</AnimatedButton></div>
              </DetailsPanel>
            </div>
            <div className="hidden md:flex aspect-square rounded-2xl bg-[rgba(5,15,30,.25)] border border-[var(--border)] items-center justify-center">
              <div className="w-36 h-36 rounded-full border border-[rgba(103,232,255,.22)] shadow-[0_0_30px_rgba(0,217,255,.08)]"/><div className="absolute w-20 h-20 rounded-full border border-[rgba(103,232,255,.3)]"/>
            </div>
          </div>
        </motion.article>)}
      </div>
    </section>
  </div>;
}

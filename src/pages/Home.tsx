import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, CheckCircle2, Users, BriefcaseBusiness, GraduationCap, Star, PlayCircle, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { services } from '../data/services';
import AnimatedButton from '../components/AnimatedButton';
import DetailsPanel from '../components/DetailsPanel';

const stats = [
  { value: '100+', label: 'Happy Clients', icon: Users },
  { value: '50+', label: 'Projects Completed', icon: BriefcaseBusiness },
  { value: '10+', label: 'Courses Available', icon: GraduationCap },
  { value: '4.9/5', label: 'Client Satisfaction', icon: Star },
];

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 900], [0, 80]);

  return <div className="w-full flex flex-col items-center">
    <section className="relative w-full min-h-screen overflow-hidden flex items-center px-6 md:px-12 pt-28 pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_48%,rgba(0,217,255,.12),transparent_32%),radial-gradient(circle_at_10%_75%,rgba(0,140,255,.09),transparent_30%),linear-gradient(135deg,#020711_0%,#031322_48%,#02060d_100%)]" />
      <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(103,232,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(103,232,255,.035)_1px,transparent_1px)] bg-[size:70px_70px]" />
      <motion.div style={{ y: y1 }} className="relative z-10 max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-[.9fr_1.1fr] gap-10 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -35 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8 }}>
            <div className="inline-flex items-center gap-2 mb-7 px-4 py-2 rounded-full border border-[var(--border-highlight)] bg-[rgba(0,217,255,.07)] backdrop-blur-md text-xs font-semibold text-zinc-200">
              <span className="w-2 h-2 rounded-full bg-[var(--neon-cyan)] shadow-[0_0_10px_var(--neon-cyan)]" />
              Welcome to Aza E-Commerce Agency
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.03] tracking-tight">Your Success<br/><span className="text-transparent bg-clip-text bg-[var(--neon-gradient)]">Our Mission</span></h1>
            <p className="text-base md:text-lg text-[var(--text-secondary)] mt-7 mb-9 max-w-xl leading-relaxed">We help businesses grow in the digital world with professional e-commerce solutions, expert training and creative development services.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <AnimatedButton to="/services" variant="primary">Explore Our Services</AnimatedButton>
              <Link to="/blog" className="inline-flex items-center justify-center gap-3 rounded-full border border-[var(--border-highlight)] bg-[rgba(5,15,30,.45)] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-[var(--neon-cyan)] hover:bg-[rgba(0,217,255,.08)] hover:shadow-[0_0_22px_rgba(0,217,255,.16)]">Watch Video <PlayCircle className="w-4 h-4 text-[var(--neon-cyan)]" /></Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 35, scale: .96 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 1, delay: .15 }} className="relative min-h-[420px] flex items-center justify-center">
            <div className="absolute w-[75%] h-[70%] rounded-full bg-[rgba(0,217,255,.13)] blur-[90px]" />
            <div className="relative w-[92%] max-w-[650px] rounded-[28px] border border-[rgba(103,232,255,.38)] bg-[linear-gradient(145deg,rgba(12,31,49,.88),rgba(2,10,20,.92))] p-3 shadow-[0_0_50px_rgba(0,217,255,.13)] rotate-[1deg]">
              <div className="rounded-[20px] border border-[rgba(103,232,255,.22)] bg-[#020811] aspect-[16/10] overflow-hidden relative">
                <div className="absolute inset-x-0 top-0 h-1 bg-[var(--neon-gradient)] opacity-80" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(0,217,255,.16),transparent_25%),radial-gradient(circle_at_25%_75%,rgba(0,140,255,.1),transparent_30%)]" />
                <div className="absolute left-[9%] top-[13%] w-[42%] h-[62%] flex flex-col justify-center z-10">
                  <span className="text-[8px] uppercase tracking-[.22em] text-[var(--neon-cyan)]">AZA DIGITAL</span>
                  <span className="mt-3 text-2xl md:text-4xl font-black text-white leading-tight">E-Commerce<br/><span className="text-[var(--neon-cyan)]">Solutions</span></span>
                  <span className="mt-3 text-[10px] md:text-xs text-[var(--text-secondary)] leading-relaxed">Strategy • Design • Growth</span>
                </div>
                <div className="absolute right-[9%] top-[15%] w-[38%] h-[68%] rounded-2xl border border-[rgba(103,232,255,.3)] bg-[rgba(8,20,33,.75)] flex items-center justify-center shadow-[0_0_35px_rgba(0,217,255,.12)]">
                  <img src="/aza-logo.svg" alt="AZA E-Commerce Agency" className="w-[62%] aspect-square rounded-full object-cover shadow-[0_0_25px_rgba(0,217,255,.18)]" />
                </div>
              </div>
              <div className="mx-[10%] h-4 rounded-b-2xl bg-gradient-to-b from-[#263746] to-[#050b11] border-x border-b border-[rgba(103,232,255,.22)]" />
              <div className="absolute -bottom-7 left-[5%] right-[5%] h-5 rounded-full bg-[rgba(0,217,255,.13)] blur-md" />
            </div>
          </motion.div>
        </div>

        <div className="mt-12 md:mt-16 rounded-2xl border border-[rgba(103,232,255,.28)] bg-[rgba(5,15,30,.45)] backdrop-blur-xl px-4 md:px-8 py-5 shadow-[0_0_30px_rgba(0,217,255,.07)]">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[rgba(103,232,255,.14)]">
            {stats.map(({ value, label, icon: Icon }) => <div key={label} className="flex items-center justify-center gap-3 md:gap-4 px-3 py-2 first:pl-0 last:pr-0">
              <div className="w-10 h-10 rounded-full border border-[rgba(103,232,255,.32)] bg-[rgba(0,217,255,.08)] flex items-center justify-center text-[var(--neon-cyan)]"><Icon className="w-4 h-4" /></div>
              <div><div className="text-lg md:text-xl font-bold text-white">{value}</div><div className="text-[9px] md:text-xs text-[var(--text-secondary)]">{label}</div></div>
            </div>)}
          </div>
        </div>
        <div className="flex justify-center mt-8 text-[var(--neon-cyan)]"><ChevronDown className="w-5 h-5 animate-bounce" /></div>
      </motion.div>
    </section>

    <section className="w-full py-36 px-6 md:px-12 border-y border-[var(--border)] relative"><div className="max-w-7xl mx-auto"><div className="mb-16"><span className="text-[var(--neon-cyan)] text-sm font-semibold tracking-widest uppercase">Capabilities</span><h2 className="text-4xl md:text-5xl font-bold text-white mt-4">A focused toolkit for<br/>digital growth.</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">{services.map((service,idx)=><motion.article key={service.id} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:idx*.05}} className="glass-card p-7 group"><span className="text-sm text-[var(--text-muted)] font-mono">{service.id}</span><h3 className="text-xl font-bold text-white mt-5 group-hover:text-[var(--neon-cyan)] transition-colors">{service.title}</h3><p className="text-[var(--text-secondary)] leading-relaxed mt-3">{service.description}</p><DetailsPanel><div className="space-y-3"><h4 className="text-white font-semibold">Included</h4>{service.includes.map(item=><div key={item} className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--neon-cyan)] mt-1"/><span>{item}</span></div>)}<Link to="/contact" className="inline-flex items-center gap-2 mt-3 text-white hover:text-[var(--neon-cyan)] font-semibold">REQUEST SERVICE <ArrowRight className="w-4 h-4"/></Link></div></DetailsPanel></motion.article>)}</div></div></section>
    <section className="w-full py-36 px-6 md:px-12"><div className="max-w-7xl mx-auto"><div className="flex justify-between items-end mb-16"><div><span className="text-[var(--neon-cyan)] text-sm font-semibold tracking-widest uppercase">Selected Work</span><h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Recent projects.</h2></div><Link to="/projects" className="hidden md:flex items-center gap-2 text-[var(--text-secondary)] hover:text-white">All projects <ArrowRight className="w-4 h-4"/></Link></div><div className="grid md:grid-cols-2 gap-10">{projects.map((project,idx)=><motion.article key={project.id} initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="group"><div className="relative aspect-[16/10] rounded-3xl overflow-hidden glass-card"><img src={project.image} alt={project.title} loading="lazy" className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"/></div><div className="pt-6"><span className="text-xs text-[var(--neon-cyan)] uppercase tracking-widest">{project.category}</span><h3 className="text-2xl font-bold text-white mt-2">{project.title}</h3><p className="text-[var(--text-secondary)] mt-2">{project.description}</p><DetailsPanel><p className="leading-relaxed">Explore the implementation, technology choices and product focus behind this project. The experience was shaped around performance, usability and a strong visual system.</p><div className="flex flex-wrap gap-2 mt-5">{project.technologies.map(t=><span key={t} className="px-3 py-1 rounded-full bg-[var(--surface-light)] border border-[var(--border)] text-xs">{t}</span>)}</div></DetailsPanel></div></motion.article>)}</div><div className="mt-20 text-center"><AnimatedButton to="/projects" variant="outline">View All Projects</AnimatedButton></div></div></section>
    <section className="w-full py-40 px-6 md:px-12 border-t border-[var(--border)]"><div className="max-w-4xl mx-auto text-center"><h2 className="text-5xl md:text-7xl font-black text-white mb-8">READY TO START<br/>YOUR NEXT PROJECT?</h2><p className="text-xl text-[var(--text-secondary)] mb-12 font-light">Have an idea, project, business or learning goal? Let's turn it into something real.</p><AnimatedButton to="/contact" variant="primary">Let's Build Together</AnimatedButton></div></section>
  </div>;
}

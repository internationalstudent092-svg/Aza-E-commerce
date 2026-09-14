import { motion } from 'motion/react';
import { siteConfig } from '../data/config';
import { Mail, MapPin, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import AnimatedButton from '../components/AnimatedButton';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

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
          <span className="text-[var(--neon-cyan)] text-sm font-semibold tracking-widest uppercase mb-6 block">Contact</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            LET'S WORK <br/>
            <span className="text-transparent bg-clip-text bg-[var(--neon-gradient)]">TOGETHER.</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] font-light max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Looking to partner with a senior developer? Fill out the form below and I'll get back to you within 24 hours.
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="w-full max-w-7xl px-6 md:px-12">
        <div className="grid md:grid-cols-5 gap-16 md:gap-24">
          
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 flex flex-col space-y-12"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="flex flex-col space-y-8">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 rounded-full bg-[var(--surface-light)] border border-[var(--border)] flex items-center justify-center group-hover:border-[var(--neon-cyan)] group-hover:shadow-[0_0_15px_rgba(0,168,255,0.2)] transition-all">
                    <Mail className="w-5 h-5 text-[var(--neon-cyan)]" />
                  </div>
                  <div className="pt-1">
                    <span className="block text-xs font-semibold text-[var(--text-muted)] tracking-widest uppercase mb-1">Email</span>
                    <a href={`mailto:${siteConfig.email}`} className="text-lg text-white hover:text-[var(--neon-cyan)] transition-colors">{siteConfig.email}</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 rounded-full bg-[var(--surface-light)] border border-[var(--border)] flex items-center justify-center group-hover:border-[var(--neon-blue)] group-hover:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all">
                    <Phone className="w-5 h-5 text-[var(--neon-blue)]" />
                  </div>
                  <div className="pt-1">
                    <span className="block text-xs font-semibold text-[var(--text-muted)] tracking-widest uppercase mb-1">Phone</span>
                    <a href={`tel:${siteConfig.phone}`} className="text-lg text-white hover:text-[var(--neon-blue)] transition-colors">{siteConfig.phone}</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 rounded-full bg-[var(--surface-light)] border border-[var(--border)] flex items-center justify-center group-hover:border-[var(--neon-cyan)] group-hover:shadow-[0_0_15px_rgba(0,168,255,0.2)] transition-all">
                    <MapPin className="w-5 h-5 text-[var(--neon-cyan)]" />
                  </div>
                  <div className="pt-1">
                    <span className="block text-xs font-semibold text-[var(--text-muted)] tracking-widest uppercase mb-1">Location</span>
                    <span className="text-lg text-white">{siteConfig.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-[var(--border)]">
              <h3 className="text-xl font-bold text-white mb-6">Socials</h3>
              <div className="flex space-x-6">
                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--neon-cyan)] transition-colors uppercase tracking-widest text-sm font-semibold">LinkedIn</a>
                <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--neon-cyan)] transition-colors uppercase tracking-widest text-sm font-semibold">GitHub</a>
                <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--neon-cyan)] transition-colors uppercase tracking-widest text-sm font-semibold">Twitter</a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-3"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
              {formState === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center relative z-10"
                >
                  <div className="w-24 h-24 rounded-full bg-[rgba(0,168,255,0.1)] border border-[var(--neon-cyan)] flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(0,168,255,0.2)]">
                    <CheckCircle2 className="w-12 h-12 text-[var(--neon-cyan)]" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Message Sent</h3>
                  <p className="text-[var(--text-secondary)] font-light mb-8 max-w-sm">Thank you for reaching out. I'll get back to you shortly.</p>
                  <AnimatedButton variant="outline" onClick={() => setFormState('idle')} showArrow={false}>
                    Send Another Message
                  </AnimatedButton>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col space-y-8 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col space-y-3">
                      <label htmlFor="name" className="text-xs font-semibold tracking-widest text-[var(--text-muted)] uppercase">Name</label>
                      <input required type="text" id="name" className="w-full bg-transparent border-b border-[var(--border)] focus:border-[var(--neon-cyan)] text-white py-3 outline-none transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="flex flex-col space-y-3">
                      <label htmlFor="email" className="text-xs font-semibold tracking-widest text-[var(--text-muted)] uppercase">Email</label>
                      <input required type="email" id="email" className="w-full bg-transparent border-b border-[var(--border)] focus:border-[var(--neon-cyan)] text-white py-3 outline-none transition-colors" placeholder="john@example.com" />
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-3">
                    <label htmlFor="service" className="text-xs font-semibold tracking-widest text-[var(--text-muted)] uppercase">Service Interested In</label>
                    <select id="service" className="w-full bg-transparent border-b border-[var(--border)] focus:border-[var(--neon-cyan)] text-white py-3 outline-none transition-colors appearance-none cursor-pointer rounded-none">
                      <option className="bg-[#0a0a0e] text-white">Web Development</option>
                      <option className="bg-[#0a0a0e] text-white">eCommerce</option>
                      <option className="bg-[#0a0a0e] text-white">UI/UX Design</option>
                      <option className="bg-[#0a0a0e] text-white">Consulting</option>
                    </select>
                  </div>

                  <div className="flex flex-col space-y-3">
                    <label htmlFor="message" className="text-xs font-semibold tracking-widest text-[var(--text-muted)] uppercase">Message</label>
                    <textarea required id="message" rows={4} className="w-full bg-transparent border-b border-[var(--border)] focus:border-[var(--neon-cyan)] text-white py-3 outline-none transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <AnimatedButton variant="primary" showArrow={!formState}>
                       {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                    </AnimatedButton>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

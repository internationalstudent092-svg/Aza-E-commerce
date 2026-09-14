import { motion } from 'motion/react';
import { siteConfig } from '../data/config';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import { useState } from 'react';

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
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-6 block">Contact</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            LET'S WORK <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">TOGETHER.</span>
          </h1>
          <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
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
              <div className="flex flex-col space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-cyan-400 mt-1" />
                  <div>
                    <span className="block text-sm font-semibold text-zinc-500 tracking-widest uppercase mb-1">Email</span>
                    <a href={`mailto:${siteConfig.email}`} className="text-lg text-white hover:text-cyan-400 transition-colors">{siteConfig.email}</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-cyan-400 mt-1" />
                  <div>
                    <span className="block text-sm font-semibold text-zinc-500 tracking-widest uppercase mb-1">Phone</span>
                    <a href={`tel:${siteConfig.phone}`} className="text-lg text-white hover:text-cyan-400 transition-colors">{siteConfig.phone}</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-cyan-400 mt-1" />
                  <div>
                    <span className="block text-sm font-semibold text-zinc-500 tracking-widest uppercase mb-1">Location</span>
                    <span className="text-lg text-white">{siteConfig.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Socials</h3>
              <div className="flex space-x-6">
                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-cyan-400 transition-colors">LinkedIn</a>
                <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-cyan-400 transition-colors">GitHub</a>
                <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-cyan-400 transition-colors">Twitter</a>
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
            <div className="glow-box rounded-3xl p-8 md:p-12">
              {formState === 'success' ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center mb-6">
                    <div className="w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Message Sent</h3>
                  <p className="text-zinc-400">Thank you for reaching out. I'll get back to you shortly.</p>
                  <button onClick={() => setFormState('idle')} className="mt-8 px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-white">Send Another Message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="name" className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">Name</label>
                      <input required type="text" id="name" className="w-full bg-transparent border-b border-white/20 focus:border-cyan-400 text-white py-3 outline-none transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="email" className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">Email</label>
                      <input required type="email" id="email" className="w-full bg-transparent border-b border-white/20 focus:border-cyan-400 text-white py-3 outline-none transition-colors" placeholder="john@example.com" />
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="service" className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">Service Interested In</label>
                    <select id="service" className="w-full bg-transparent border-b border-white/20 focus:border-cyan-400 text-white py-3 outline-none transition-colors appearance-none cursor-pointer">
                      <option className="bg-[#0a0a0e] text-white">Web Development</option>
                      <option className="bg-[#0a0a0e] text-white">eCommerce</option>
                      <option className="bg-[#0a0a0e] text-white">UI/UX Design</option>
                      <option className="bg-[#0a0a0e] text-white">Consulting</option>
                    </select>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label htmlFor="message" className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">Message</label>
                    <textarea required id="message" rows={4} className="w-full bg-transparent border-b border-white/20 focus:border-cyan-400 text-white py-3 outline-none transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formState === 'submitting'}
                    className="mt-8 flex items-center justify-center space-x-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-cyan-400 transition-all group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span>{formState === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                    {!formState && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

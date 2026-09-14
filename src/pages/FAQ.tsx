import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "What services do you provide?",
    answer: "I specialize in end-to-end web development, eCommerce solutions (Shopify headless), UI/UX design, and creative interactive development using WebGL and GSAP."
  },
  {
    question: "How does the process work?",
    answer: "Our process is divided into four phases: Discovery (understanding your goals), Planning (architecture & design), Building (development), and Launch (testing & deployment). We maintain close communication throughout."
  },
  {
    question: "How long does a project take?",
    answer: "Project timelines vary based on complexity. A standard marketing website might take 3-4 weeks, while a complex headless eCommerce platform can take 8-12 weeks."
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes, I work with clients globally. Remote collaboration is seamless through tools like Slack, Zoom, and linear project management."
  },
  {
    question: "What technologies do you use?",
    answer: "My primary stack includes React, Next.js, TypeScript, Node.js, Tailwind CSS, Framer Motion, and Three.js. I select the best tool for each specific project's needs."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-6 block">FAQ</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            QUESTIONS BEFORE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">WE START?</span>
          </h1>
        </motion.div>
      </section>

      {/* Accordion */}
      <section className="w-full max-w-4xl px-6 md:px-12">
        <div className="flex flex-col space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-white/5 transition-colors"
              >
                <h3 className="text-lg md:text-xl font-bold text-white pr-8">{faq.question}</h3>
                {openIndex === idx ? (
                  <Minus className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                ) : (
                  <Plus className="w-6 h-6 text-white flex-shrink-0" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 md:px-8 pb-8 text-zinc-400 leading-relaxed font-light">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-zinc-400 mb-6">Still have questions?</p>
          <Link to="/contact" className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-cyan-400 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] group">
            <span>Contact Me</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}

import { motion } from 'motion/react';
import { ArrowRight, Clock } from 'lucide-react';
import AnimatedButton from '../components/AnimatedButton';

const posts = [
  {
    id: 1,
    title: "The Future of Headless eCommerce with Next.js",
    category: "eCommerce",
    date: "Sep 12, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    excerpt: "Exploring how headless architectures are transforming online retail by providing unmatched performance and infinite customization."
  },
  {
    id: 2,
    title: "Mastering Framer Motion for WebGL Interfaces",
    category: "Web Development",
    date: "Aug 28, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    excerpt: "A deep dive into connecting React state with Three.js canvases using Framer Motion to create seamless, 60fps animations."
  },
  {
    id: 3,
    title: "Design Systems: From Figma to Tailwind",
    category: "UI/UX Design",
    date: "Jul 15, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
    excerpt: "How to perfectly translate your design tokens from Figma into a robust, scalable Tailwind configuration for large teams."
  },
  {
    id: 4,
    title: "Why Core Web Vitals Actually Matter in 2026",
    category: "Performance",
    date: "Jun 02, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
    excerpt: "Analyzing the direct correlation between LCP, CLS, INP metrics and conversion rates for high-traffic platforms."
  }
];

export default function Blog() {
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
          <span className="text-[var(--neon-cyan)] text-sm font-semibold tracking-widest uppercase mb-6 block">Insights & Resources</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            Thoughts on <br/>
            <span className="text-transparent bg-clip-text bg-[var(--neon-gradient)]">Design & Code.</span>
          </h1>
        </motion.div>
      </section>

      {/* Grid */}
      <section className="w-full max-w-7xl px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {posts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="group flex flex-col"
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden mb-8 glow-box cursor-pointer glass-card">
                <div className="absolute inset-0 bg-black/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-[var(--surface)] backdrop-blur-md border border-[var(--border)] text-white text-xs font-semibold shadow-lg">
                  {post.category}
                </div>
              </div>
              
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4 text-xs font-semibold text-[var(--text-muted)] tracking-widest uppercase">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-[var(--border)]"></span>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3 text-[var(--neon-cyan)]" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[var(--neon-cyan)] transition-colors cursor-pointer leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-[var(--text-secondary)] leading-relaxed font-light mb-4">
                  {post.excerpt}
                </p>
                
                <div className="pt-2">
                  <AnimatedButton to="#" variant="outline">
                    Read Article
                  </AnimatedButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

import { motion } from 'motion/react';
import { ArrowRight, Clock } from 'lucide-react';

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
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-6 block">Insights & Resources</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            Thoughts on <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Design & Code.</span>
          </h1>
        </motion.div>
      </section>

      {/* Grid */}
      <section className="w-full max-w-7xl px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12">
          {posts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="group flex flex-col"
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 glow-box cursor-pointer">
                <div className="absolute inset-0 bg-black/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-semibold">
                  {post.category}
                </div>
              </div>
              
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4 text-xs font-semibold text-zinc-500 tracking-widest uppercase">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors cursor-pointer">
                  {post.title}
                </h3>
                
                <p className="text-zinc-400 leading-relaxed font-light">
                  {post.excerpt}
                </p>
                
                <button className="inline-flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors w-fit pt-4 pb-1 border-b border-transparent hover:border-cyan-400 group-hover:text-cyan-400">
                  <span className="font-semibold uppercase tracking-widest text-sm">Read Article</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

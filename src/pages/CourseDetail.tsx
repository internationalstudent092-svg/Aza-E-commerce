import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { courses } from '../data/courses';
import { ArrowLeft, Clock, BarChart, BookOpen, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import AnimatedButton from '../components/AnimatedButton';

export default function CourseDetail() {
  const { slug } = useParams<{ slug: string }>();
  const course = courses.find((c) => c.slug === slug);
  const [openAccordion, setOpenAccordion] = useState<string | null>("01");

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Course not found</h1>
        <AnimatedButton to="/courses" variant="outline">Back to Courses</AnimatedButton>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center pb-32">
      {/* Hero */}
      <section className="relative w-full pt-32 pb-20 px-6 md:px-12 flex flex-col items-center">
        <div className="max-w-4xl w-full">
          <Link to="/courses" className="inline-flex items-center text-[var(--text-secondary)] hover:text-[var(--neon-cyan)] transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-semibold tracking-widest uppercase">Back to Courses</span>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-[var(--surface-light)] border border-[var(--border)] text-[var(--neon-cyan)] text-xs font-semibold tracking-widest uppercase">{course.category}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              {course.title}
            </h1>
            
            <p className="text-xl text-[var(--text-secondary)] font-light leading-relaxed mb-8">
              {course.longDescription || course.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-10 text-[var(--text-secondary)]">
              <div className="flex items-center gap-2">
                <BarChart className="w-5 h-5 text-[var(--neon-cyan)]" />
                <span>{course.difficulty}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[var(--neon-cyan)]" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[var(--neon-cyan)]" />
                <span>{course.lessons} Lessons</span>
              </div>
            </div>

            <AnimatedButton variant="primary" className="w-full sm:w-auto">
              Enroll Now - {course.price}
            </AnimatedButton>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full max-w-4xl px-6 md:px-12 space-y-24">
        
        {/* Learning Outcomes */}
        {course.learningOutcomes && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="glow-box p-8 md:p-12"
          >
            <h2 className="text-2xl font-bold mb-8">What You'll Learn</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {course.learningOutcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--neon-cyan)] shrink-0" />
                  <span className="text-[var(--text-secondary)] leading-relaxed">{outcome}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Curriculum */}
        {course.curriculum && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl font-bold mb-8">Course Curriculum</h2>
            <div className="space-y-4">
              {course.curriculum.map((item) => (
                <div key={item.module} className="glass-card overflow-hidden">
                  <button 
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-[var(--surface-light)] transition-colors"
                    onClick={() => setOpenAccordion(openAccordion === item.module ? null : item.module)}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[var(--text-muted)] font-mono text-sm">{item.module}</span>
                      <span className="font-semibold">{item.title}</span>
                    </div>
                    <div className="flex items-center gap-4 text-[var(--text-secondary)]">
                      <span className="text-sm">{item.lessons} lessons</span>
                      {openAccordion === item.module ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {openAccordion === item.module && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-[var(--border)] text-[var(--text-secondary)]">
                          <p>Detailed breakdown of {item.title} will be provided upon enrollment.</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Requirements & Audience */}
        <div className="grid md:grid-cols-2 gap-8">
          {course.requirements && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass-card p-8"
            >
              <h3 className="text-xl font-bold mb-6">Requirements</h3>
              <ul className="space-y-4">
                {course.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[var(--text-secondary)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--neon-cyan)] mt-2 shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {course.audience && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass-card p-8"
            >
              <h3 className="text-xl font-bold mb-6">Who is this for?</h3>
              <ul className="space-y-4">
                {course.audience.map((aud, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[var(--text-secondary)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--neon-blue)] mt-2 shrink-0" />
                    <span>{aud}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center pt-12 border-t border-[var(--border)]"
        >
          <h2 className="text-3xl font-bold mb-8">Ready to Level Up?</h2>
          <AnimatedButton variant="primary">
            Start Learning Now
          </AnimatedButton>
        </motion.div>

      </section>
    </div>
  );
}

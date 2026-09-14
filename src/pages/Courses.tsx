import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { courses } from '../data/courses';
import { ArrowRight, BookOpen, Clock, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedButton from '../components/AnimatedButton';

export default function Courses() {
  const [visibleCount, setVisibleCount] = useState(3);
  const totalCourses = courses.length;

  const handleViewMore = () => {
    if (visibleCount < totalCourses) {
      setVisibleCount(totalCourses);
    } else {
      setVisibleCount(3);
    }
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
          <span className="text-[var(--neon-cyan)] text-sm font-semibold tracking-widest uppercase mb-6 block">Education</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
             LEARN. BUILD. <br/>
            <span className="text-transparent bg-clip-text bg-[var(--neon-gradient)]">LEVEL UP.</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] font-light max-w-2xl mx-auto leading-relaxed">
            Practical courses designed to help you build real-world digital skills. Elevate your engineering and design capabilities.
          </p>
        </motion.div>
      </section>

      {/* Courses Grid */}
      <section className="w-full max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {courses.slice(0, visibleCount).map((course, idx) => (
               <motion.div 
                 layout
                 key={course.id}
                 initial={{ opacity: 0, y: 40, scale: 0.95 }}
                 animate={{ opacity: 1, y: 0, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                 transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                 className="group flex flex-col glow-box rounded-3xl overflow-hidden hover:border-[var(--neon-blue)] transition-colors h-full"
               >
                 <Link to={`/courses/${course.slug}`} className="flex flex-col h-full">
                   <div className="relative h-64 overflow-hidden shrink-0">
                     <img 
                       src={course.image} 
                       alt={course.title} 
                       loading="lazy"
                       className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
                     />
                     <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[var(--surface)] backdrop-blur-md border border-[var(--border)] text-white font-bold text-sm shadow-lg">
                       {course.price}
                     </div>
                     <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[rgba(0,168,255,0.2)] backdrop-blur-md border border-[var(--neon-blue)] text-white font-semibold text-xs tracking-widest uppercase shadow-lg">
                       {course.category || 'Course'}
                     </div>
                   </div>
                   
                   <div className="p-8 flex flex-col flex-grow">
                     <div className="flex items-center space-x-4 mb-6 text-xs text-[var(--text-secondary)]">
                       <div className="flex items-center space-x-1">
                         <BarChart className="w-4 h-4 text-[var(--neon-cyan)]" />
                         <span>{course.difficulty}</span>
                       </div>
                       <div className="flex items-center space-x-1">
                         <Clock className="w-4 h-4 text-[var(--neon-cyan)]" />
                         <span>{course.duration}</span>
                       </div>
                     </div>
                     
                     <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[var(--neon-cyan)] transition-colors">{course.title}</h3>
                     <p className="text-[var(--text-secondary)] leading-relaxed font-light mb-8 flex-grow">{course.description}</p>
                     
                     <div className="flex flex-wrap gap-2 mb-8">
                       {course.skills.slice(0,3).map(skill => (
                         <span key={skill} className="px-3 py-1 rounded-full bg-[var(--surface-light)] border border-[var(--border)] text-[var(--text-secondary)] text-xs">{skill}</span>
                       ))}
                       {course.skills.length > 3 && (
                         <span className="px-3 py-1 rounded-full bg-[var(--surface-light)] border border-[var(--border)] text-[var(--text-secondary)] text-xs">+{course.skills.length - 3}</span>
                       )}
                     </div>
                     
                     <div className="w-full py-4 border border-[var(--border)] group-hover:border-[var(--neon-blue)] group-hover:bg-[rgba(0,168,255,0.1)] text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 mt-auto">
                       <span>View Details</span>
                       <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                     </div>
                   </div>
                 </Link>
               </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {totalCourses > 3 && (
          <div className="mt-16 flex justify-center">
            <AnimatedButton 
              variant="outline" 
              onClick={handleViewMore}
              showArrow={false}
            >
              {visibleCount < totalCourses ? 'View More Courses ↓' : 'Show Less ↑'}
            </AnimatedButton>
          </div>
        )}
      </section>
    </div>
  );
}

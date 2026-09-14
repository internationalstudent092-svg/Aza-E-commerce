import { motion } from 'motion/react';
import { courses } from '../data/courses';
import { ArrowRight, BookOpen, Clock, BarChart } from 'lucide-react';

export default function Courses() {
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
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-6 block">Education</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
             LEARN. BUILD. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">LEVEL UP.</span>
          </h1>
          <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
            Practical courses designed to help you build real-world digital skills. Elevate your engineering and design capabilities.
          </p>
        </motion.div>
      </section>

      {/* Courses Grid */}
      <section className="w-full max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
             <motion.div 
               key={course.id}
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.7, delay: idx * 0.1 }}
               className="group flex flex-col glow-box rounded-3xl overflow-hidden hover:border-cyan-500/30 transition-colors"
             >
               <div className="relative h-64 overflow-hidden">
                 <img 
                   src={course.image} 
                   alt={course.title} 
                   className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
                 />
                 <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white font-bold">
                   {course.price}
                 </div>
               </div>
               
               <div className="p-8 flex flex-col flex-grow">
                 <div className="flex items-center space-x-4 mb-6 text-xs text-zinc-400">
                   <div className="flex items-center space-x-1">
                     <BarChart className="w-4 h-4 text-cyan-400" />
                     <span>{course.difficulty}</span>
                   </div>
                   <div className="flex items-center space-x-1">
                     <Clock className="w-4 h-4 text-cyan-400" />
                     <span>{course.duration}</span>
                   </div>
                 </div>
                 
                 <h3 className="text-2xl font-bold text-white mb-4">{course.title}</h3>
                 <p className="text-zinc-400 leading-relaxed font-light mb-8 flex-grow">{course.description}</p>
                 
                 <div className="flex flex-wrap gap-2 mb-8">
                   {course.skills.map(skill => (
                     <span key={skill} className="px-3 py-1 rounded-full bg-white/5 text-zinc-300 text-xs">{skill}</span>
                   ))}
                 </div>
                 
                 <button className="w-full py-4 bg-white text-black font-semibold rounded-xl hover:bg-cyan-400 transition-colors flex items-center justify-center space-x-2">
                   <span>View Course</span>
                   <ArrowRight className="w-4 h-4" />
                 </button>
               </div>
             </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

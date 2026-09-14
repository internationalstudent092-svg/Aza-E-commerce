import { ReactNode, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowDown, ArrowUp } from 'lucide-react';

interface DetailsPanelProps { children: ReactNode; label?: string; closeLabel?: string; }

export default function DetailsPanel({ children, label = 'VIEW MORE', closeLabel = 'SHOW LESS' }: DetailsPanelProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-6 relative z-20">
      <button type="button" aria-expanded={open} onClick={() => setOpen(v => !v)} className="inline-flex items-center gap-2 rounded-full border border-[var(--border-highlight)] bg-[rgba(0,168,255,0.06)] px-5 py-2.5 text-xs font-bold tracking-[0.14em] text-white transition-all duration-300 hover:border-[var(--neon-cyan)] hover:bg-[rgba(0,168,255,0.12)] hover:shadow-[0_0_20px_rgba(0,229,255,0.16)]">
        <span>{open ? closeLabel : `${label} →`}</span>{open ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
      </button>
      <AnimatePresence initial={false}>
        {open && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28, ease: 'easeOut' }} className="overflow-hidden">
          <div className="mt-5 border-t border-[rgba(0,229,255,0.14)] pt-5 text-[var(--text-secondary)]">{children}</div>
        </motion.div>}
      </AnimatePresence>
    </div>
  );
}

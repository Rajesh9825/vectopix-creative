import { motion } from "framer-motion";

/** Pen Tool SVG with animated bezier path drawing */
export const PenToolElement = ({ className = "" }: { className?: string }) => (
  <div className={className}>
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Pen tool icon */}
      <motion.path
        d="M40 10L50 50L40 70L30 50L40 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
      />
      <motion.circle cx="40" cy="10" r="3" fill="currentColor" 
        initial={{ scale: 0 }} animate={{ scale: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
      />
    </svg>
    {/* Animated bezier curve being drawn */}
    <svg className="absolute top-full left-0" width="120" height="50" viewBox="0 0 120 50" fill="none">
      <motion.path
        d="M0 40 C20 40 20 10 40 10 C60 10 60 40 80 40 C100 40 100 10 120 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
      />
    </svg>
  </div>
);

/** Pencil drawing animation */
export const PencilElement = ({ className = "" }: { className?: string }) => (
  <div className={className}>
    <svg width="60" height="100" viewBox="0 0 60 100" fill="none">
      {/* Pencil body */}
      <motion.g
        animate={{ rotate: [-5, 5, -5], y: [0, -3, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x="22" y="10" width="16" height="55" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <polygon points="22,65 38,65 30,85" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <line x1="22" y1="20" x2="38" y2="20" stroke="currentColor" strokeWidth="1" />
      </motion.g>
    </svg>
    {/* Drawing line */}
    <svg className="absolute bottom-0 left-8" width="80" height="30" viewBox="0 0 80 30" fill="none">
      <motion.path
        d="M0 20 Q10 5 20 15 Q30 25 40 10 Q50 0 60 18 Q70 28 80 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.5, 0.8, 1] }}
      />
    </svg>
  </div>
);

/** Play button with pulse click animation */
export const PlayButtonElement = ({ className = "" }: { className?: string }) => (
  <div className={className}>
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
      <motion.circle
        cx="30" cy="30" r="25"
        stroke="currentColor" strokeWidth="2" fill="none"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      {/* Pulse ring on "click" */}
      <motion.circle
        cx="30" cy="30" r="25"
        stroke="currentColor" strokeWidth="1" fill="none"
        initial={{ scale: 1, opacity: 0.6 }}
        animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
      />
      {/* Play triangle */}
      <motion.polygon
        points="24,18 24,42 44,30"
        fill="currentColor"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 0.9, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </svg>
  </div>
);

/** Brush with stroke animation */
export const BrushElement = ({ className = "" }: { className?: string }) => (
  <div className={className}>
    <svg width="70" height="90" viewBox="0 0 70 90" fill="none">
      <motion.g
        animate={{ rotate: [-8, 8, -8] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Handle */}
        <rect x="28" y="5" width="14" height="45" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        {/* Bristles */}
        <path d="M25 50 Q35 80 45 50" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <line x1="30" y1="50" x2="28" y2="68" stroke="currentColor" strokeWidth="1" />
        <line x1="35" y1="50" x2="35" y2="72" stroke="currentColor" strokeWidth="1" />
        <line x1="40" y1="50" x2="42" y2="68" stroke="currentColor" strokeWidth="1" />
      </motion.g>
    </svg>
    {/* Brush stroke */}
    <svg className="absolute bottom-0 left-10" width="100" height="20" viewBox="0 0 100 20" fill="none">
      <motion.path
        d="M0 10 Q25 2 50 12 Q75 22 100 8"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: [0, 1], opacity: [0, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
      />
    </svg>
  </div>
);

/** Film cut / scissors on film strip */
export const FilmCutElement = ({ className = "" }: { className?: string }) => (
  <div className={className}>
    <svg width="100" height="50" viewBox="0 0 100 50" fill="none">
      {/* Film strip */}
      <rect x="0" y="10" width="100" height="30" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
      {/* Film perforations */}
      {[10, 25, 40, 55, 70, 85].map((x) => (
        <rect key={x} x={x} y="14" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1" fill="none" />
      ))}
      {[10, 25, 40, 55, 70, 85].map((x) => (
        <rect key={`b${x}`} x={x} y="30" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1" fill="none" />
      ))}
      {/* Scissors cut line */}
      <motion.line
        x1="50" y1="5" x2="50" y2="45"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="4 3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
      />
    </svg>
  </div>
);

/** Color palette */
export const ColorPaletteElement = ({ className = "" }: { className?: string }) => (
  <div className={className}>
    <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
      <motion.circle cx="35" cy="35" r="28" stroke="currentColor" strokeWidth="1.5" fill="none"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.circle cx="35" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" fill="none"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0 }}
      />
      <motion.circle cx="55" cy="28" r="5" stroke="currentColor" strokeWidth="1.5" fill="none"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
      <motion.circle cx="50" cy="52" r="5" stroke="currentColor" strokeWidth="1.5" fill="none"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      />
      <motion.circle cx="20" cy="52" r="5" stroke="currentColor" strokeWidth="1.5" fill="none"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
      />
      <motion.circle cx="15" cy="28" r="5" stroke="currentColor" strokeWidth="1.5" fill="none"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 2 }}
      />
    </svg>
  </div>
);

import { motion, useReducedMotion } from "framer-motion";

/**
 * Professional outline-style design tool elements inspired by
 * Photoshop, Illustrator, and After Effects.
 * 
 * Style: stroke-only, 1.5–2px, near-black, 15–25% opacity, minimal.
 */

/* ───────────────────── 1. PEN TOOL (Main Element) ───────────────────── */
export const PenToolElement = ({ className = "" }: { className?: string }) => {
  const reduced = useReducedMotion();

  return (
    <div className={`${className} relative`}>
      {/* Pen nib icon */}
      <svg width="52" height="72" viewBox="0 0 52 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Nib body */}
        <motion.path
          d="M26 2L40 38L36 42H16L12 38L26 2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={reduced ? {} : { pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        {/* Nib slit */}
        <motion.line
          x1="26" y1="28" x2="26" y2="42"
          stroke="currentColor" strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={reduced ? {} : { pathLength: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        />
        {/* Nib circle detail */}
        <circle cx="26" cy="26" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        {/* Body rectangle below */}
        <rect x="16" y="42" width="20" height="22" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <line x1="16" y1="48" x2="36" y2="48" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      </svg>

      {/* Bézier path being drawn — smooth curve */}
      <svg className="absolute -bottom-14 -left-6" width="160" height="60" viewBox="0 0 160 60" fill="none">
        <motion.path
          d="M10 50 C30 50 30 10 60 10 C90 10 90 50 120 50 C135 50 145 30 150 10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={reduced ? {} : { pathLength: 1 }}
          transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, repeatDelay: 4 }}
        />
        {/* Anchor points */}
        {[
          { cx: 10, cy: 50 },
          { cx: 60, cy: 10 },
          { cx: 120, cy: 50 },
          { cx: 150, cy: 10 },
        ].map((pt, i) => (
          <motion.rect
            key={i}
            x={pt.cx - 3} y={pt.cy - 3} width="6" height="6"
            stroke="currentColor" strokeWidth="1.5" fill="none"
            initial={{ opacity: 0 }}
            animate={reduced ? {} : { opacity: [0, 1] }}
            transition={{ delay: 1.5 * i, duration: 0.3 }}
          />
        ))}
        {/* Handle lines */}
        <motion.line x1="60" y1="10" x2="40" y2="10" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2"
          initial={{ opacity: 0 }} animate={reduced ? {} : { opacity: 0.5 }} transition={{ delay: 2 }} />
        <motion.line x1="60" y1="10" x2="80" y2="10" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2"
          initial={{ opacity: 0 }} animate={reduced ? {} : { opacity: 0.5 }} transition={{ delay: 2 }} />
        <circle cx="40" cy="10" r="2.5" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
        <circle cx="80" cy="10" r="2.5" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
      </svg>
    </div>
  );
};

/* ───────────────────── 2. BRUSH TOOL ───────────────────── */
export const BrushElement = ({ className = "" }: { className?: string }) => {
  const reduced = useReducedMotion();

  return (
    <div className={`${className} relative`}>
      <svg width="44" height="70" viewBox="0 0 44 70" fill="none">
        {/* Handle */}
        <rect x="16" y="0" width="12" height="36" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        {/* Ferrule */}
        <rect x="14" y="36" width="16" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
        {/* Bristle tip */}
        <path d="M14 42 Q22 68 30 42" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
      {/* One soft curved stroke */}
      <svg className="absolute -bottom-6 left-6" width="100" height="24" viewBox="0 0 100 24" fill="none">
        <motion.path
          d="M0 18 Q25 4 50 14 Q75 24 100 8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={reduced ? {} : { pathLength: 1, opacity: 0.35 }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatDelay: 6 }}
        />
      </svg>
    </div>
  );
};

/* ───────────────────── 3. PENCIL TOOL ───────────────────── */
export const PencilElement = ({ className = "" }: { className?: string }) => {
  const reduced = useReducedMotion();

  return (
    <div className={`${className} relative`}>
      <svg width="40" height="64" viewBox="0 0 40 64" fill="none">
        {/* Pencil body */}
        <rect x="13" y="8" width="14" height="38" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
        {/* Eraser cap */}
        <rect x="15" y="2" width="10" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        {/* Tip */}
        <polygon points="13,46 27,46 20,60" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      </svg>
      {/* Small abstract freehand line */}
      <svg className="absolute -bottom-4 left-4" width="70" height="16" viewBox="0 0 70 16" fill="none">
        <motion.path
          d="M0 12 Q8 2 16 10 Q24 16 32 6 Q40 0 50 10 Q58 14 70 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={reduced ? {} : { pathLength: [0, 1, 1, 0], opacity: [0, 0.3, 0.3, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.4, 0.8, 1], repeatDelay: 4 }}
        />
      </svg>
    </div>
  );
};

/* ───────────────────── 4. SELECTION TOOL (Cursor Arrow) ───────────────────── */
export const SelectionToolElement = ({ className = "" }: { className?: string }) => {
  const reduced = useReducedMotion();

  return (
    <div className={`${className} relative`}>
      {/* Cursor arrow */}
      <svg width="36" height="50" viewBox="0 0 36 50" fill="none">
        <motion.path
          d="M6 2L6 38L14 30L22 44L26 42L18 28L28 28L6 2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      {/* Selection bounding box that appears and fades */}
      <svg className="absolute top-6 left-8" width="50" height="40" viewBox="0 0 50 40" fill="none">
        <motion.rect
          x="2" y="2" width="46" height="36" rx="1"
          stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" fill="none"
          initial={{ opacity: 0 }}
          animate={reduced ? {} : { opacity: [0, 0.4, 0.4, 0] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.2, 0.7, 1], repeatDelay: 5 }}
        />
        {/* Corner anchor points */}
        {[[2, 2], [48, 2], [2, 38], [48, 38]].map(([x, y], i) => (
          <motion.rect
            key={i}
            x={x - 3} y={y - 3} width="6" height="6"
            stroke="currentColor" strokeWidth="1" fill="none"
            initial={{ opacity: 0 }}
            animate={reduced ? {} : { opacity: [0, 0.5, 0.5, 0] }}
            transition={{ duration: 4, repeat: Infinity, times: [0, 0.2, 0.7, 1], repeatDelay: 5 }}
          />
        ))}
      </svg>
    </div>
  );
};

/* ───────────────────── 5. TYPE TOOL (T) ───────────────────── */
export const TypeToolElement = ({ className = "" }: { className?: string }) => {
  const reduced = useReducedMotion();

  return (
    <div className={className}>
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
        {/* Large T */}
        <motion.path
          d="M10 8H40M25 8V42"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        {/* Serifs */}
        <line x1="18" y1="42" x2="32" y2="42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        {/* Blinking cursor */}
        <motion.line
          x1="38" y1="14" x2="38" y2="34"
          stroke="currentColor" strokeWidth="1.5"
          initial={{ opacity: 0 }}
          animate={reduced ? {} : { opacity: [0, 0.6, 0.6, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, times: [0, 0.1, 0.5, 0.6] }}
        />
      </svg>
    </div>
  );
};

/* ───────────────────── 6. COLOR PALETTE (kept minimal) ───────────────────── */
export const ColorPaletteElement = ({ className = "" }: { className?: string }) => (
  <div className={className}>
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
      <circle cx="25" cy="25" r="20" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="25" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="38" cy="20" r="3.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="35" cy="36" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="15" cy="36" r="3.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="20" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  </div>
);

/* ───────────────────── 7. FILM CUT ───────────────────── */
export const FilmCutElement = ({ className = "" }: { className?: string }) => (
  <div className={className}>
    <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
      <rect x="0" y="4" width="80" height="32" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      {[8, 20, 32, 44, 56, 68].map((x) => (
        <rect key={x} x={x} y="8" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1" fill="none" />
      ))}
      {[8, 20, 32, 44, 56, 68].map((x) => (
        <rect key={`b${x}`} x={x} y="27" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1" fill="none" />
      ))}
    </svg>
  </div>
);

/* ───────────────────── 8. PLAY BUTTON ───────────────────── */
export const PlayButtonElement = ({ className = "" }: { className?: string }) => {
  const reduced = useReducedMotion();

  return (
    <div className={className}>
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="18" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <polygon points="17,13 17,31 33,22" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        {/* Click pulse */}
        <motion.circle
          cx="22" cy="22" r="18"
          stroke="currentColor" strokeWidth="1" fill="none"
          initial={{ scale: 1, opacity: 0 }}
          animate={reduced ? {} : { scale: [1, 1.4], opacity: [0.4, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
        />
      </svg>
    </div>
  );
};

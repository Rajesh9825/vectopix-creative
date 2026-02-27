import { motion, useReducedMotion } from "framer-motion";

/**
 * Pen Tool — main animated element.
 * Draws 4 Bézier variations sequentially: smooth curve, cusp, closed circle, open curve.
 * Slow 8s cycle, low opacity, stroke-only.
 */
export const PenToolElement = ({ className = "" }: { className?: string }) => {
  const reduce = useReducedMotion();
  const dur = reduce ? 0 : 8;

  return (
    <div className={`${className}`}>
      <svg width="220" height="200" viewBox="0 0 220 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Pen nib icon */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <path
            d="M170 18l-4 14-6-6 10-8z"
            stroke="currentColor" strokeWidth="1.5" fill="none"
          />
          <line x1="166" y1="32" x2="156" y2="42" stroke="currentColor" strokeWidth="1.5" />
          {/* Pen nib detail */}
          <path d="M156 42l-3 8 5-5-2-3z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </motion.g>

        {/* Anchor points — appear sequentially */}
        {[
          { cx: 20, cy: 160, delay: 0.5 },
          { cx: 70, cy: 60, delay: 2 },
          { cx: 130, cy: 140, delay: 3.5 },
          { cx: 200, cy: 50, delay: 5 },
        ].map((pt, i) => (
          <motion.rect
            key={i}
            x={pt.cx - 3} y={pt.cy - 3} width="6" height="6"
            stroke="currentColor" strokeWidth="1.5" fill="none"
            initial={{ opacity: 0, scale: 0 }}
            animate={reduce ? { opacity: 0.6 } : { opacity: [0, 0.8, 0.4], scale: [0, 1.2, 1] }}
            transition={{ duration: 0.6, delay: pt.delay, repeat: reduce ? 0 : Infinity, repeatDelay: dur }}
          />
        ))}

        {/* Path 1: Smooth symmetric curve */}
        <motion.path
          d="M20 160 C45 60 95 60 70 60"
          stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={reduce ? { opacity: 0.3 } : { pathLength: [0, 1], opacity: [0, 0.35, 0.2] }}
          transition={{ duration: 2, delay: 0.8, repeat: Infinity, repeatDelay: dur - 2 }}
        />

        {/* Path 2: Corner cusp */}
        <motion.path
          d="M70 60 L130 140"
          stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={reduce ? { opacity: 0.3 } : { pathLength: [0, 1], opacity: [0, 0.35, 0.2] }}
          transition={{ duration: 1.5, delay: 3, repeat: Infinity, repeatDelay: dur - 1.5 }}
        />

        {/* Path 3: Closed circle path */}
        <motion.circle
          cx="155" cy="110" r="18"
          stroke="currentColor" strokeWidth="1.5" fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={reduce ? { opacity: 0.25 } : { pathLength: [0, 1], opacity: [0, 0.3, 0.15] }}
          transition={{ duration: 2, delay: 4.5, repeat: Infinity, repeatDelay: dur - 2 }}
        />

        {/* Path 4: Open curve */}
        <motion.path
          d="M130 140 C160 180 190 100 200 50"
          stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={reduce ? { opacity: 0.3 } : { pathLength: [0, 1], opacity: [0, 0.35, 0.2] }}
          transition={{ duration: 2, delay: 5.5, repeat: Infinity, repeatDelay: dur - 2 }}
        />

        {/* Bézier handles — brief appearance */}
        <motion.line
          x1="20" y1="160" x2="45" y2="60"
          stroke="currentColor" strokeWidth="1" strokeDasharray="3 3"
          initial={{ opacity: 0 }}
          animate={reduce ? {} : { opacity: [0, 0.25, 0] }}
          transition={{ duration: 2, delay: 0.8, repeat: Infinity, repeatDelay: dur - 2 }}
        />
        <motion.line
          x1="70" y1="60" x2="95" y2="60"
          stroke="currentColor" strokeWidth="1" strokeDasharray="3 3"
          initial={{ opacity: 0 }}
          animate={reduce ? {} : { opacity: [0, 0.25, 0] }}
          transition={{ duration: 2, delay: 1.5, repeat: Infinity, repeatDelay: dur - 2 }}
        />
      </svg>
    </div>
  );
};

/**
 * Brush Tool — draws one soft curved stroke, then stops.
 */
export const BrushElement = ({ className = "" }: { className?: string }) => {
  const reduce = useReducedMotion();

  return (
    <div className={className}>
      <svg width="140" height="80" viewBox="0 0 140 80" fill="none">
        {/* Brush icon */}
        <g opacity="0.7">
          <rect x="8" y="20" width="8" height="28" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M8 48 Q12 62 16 48" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </g>
        {/* Single brush stroke */}
        <motion.path
          d="M24 50 Q50 30 75 45 Q100 60 130 35"
          stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={reduce ? { opacity: 0.2 } : { pathLength: [0, 1, 1], opacity: [0, 0.25, 0.15] }}
          transition={{ duration: 3, delay: 2, repeat: Infinity, repeatDelay: 10 }}
        />
      </svg>
    </div>
  );
};

/**
 * Pencil Tool — draws a minimal freehand underline curve.
 */
export const PencilElement = ({ className = "" }: { className?: string }) => {
  const reduce = useReducedMotion();

  return (
    <div className={className}>
      <svg width="100" height="50" viewBox="0 0 100 50" fill="none">
        {/* Pencil icon */}
        <g opacity="0.6">
          <line x1="8" y1="40" x2="28" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M6 42l2-2 2 2-4 4z" stroke="currentColor" strokeWidth="1" fill="none" />
          <line x1="18" y1="25" x2="22" y2="21" stroke="currentColor" strokeWidth="1" />
        </g>
        {/* Freehand line */}
        <motion.path
          d="M32 38 Q48 32 60 36 Q72 40 88 34"
          stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={reduce ? { opacity: 0.2 } : { pathLength: [0, 1, 1], opacity: [0, 0.2, 0.12] }}
          transition={{ duration: 2.5, delay: 4, repeat: Infinity, repeatDelay: 12 }}
        />
      </svg>
    </div>
  );
};

/**
 * Selection Tool — cursor arrow selects a shape, bounding box appears, then fades.
 */
export const SelectionToolElement = ({ className = "" }: { className?: string }) => {
  const reduce = useReducedMotion();

  return (
    <div className={className}>
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
        {/* Faint rectangle shape */}
        <rect x="25" y="25" width="40" height="40" rx="4" stroke="currentColor" strokeWidth="1" opacity="0.15" fill="none" />

        {/* Selection bounding box — fades in/out */}
        <motion.rect
          x="22" y="22" width="46" height="46" rx="1"
          stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" fill="none"
          initial={{ opacity: 0 }}
          animate={reduce ? {} : { opacity: [0, 0.35, 0.35, 0] }}
          transition={{ duration: 4, delay: 6, repeat: Infinity, repeatDelay: 10, times: [0, 0.15, 0.7, 1] }}
        />

        {/* Corner anchor points */}
        {[
          [22, 22], [68, 22], [22, 68], [68, 68],
          [45, 22], [45, 68], [22, 45], [68, 45],
        ].map(([cx, cy], i) => (
          <motion.rect
            key={i}
            x={cx - 2} y={cy - 2} width="4" height="4"
            fill="currentColor"
            initial={{ opacity: 0 }}
            animate={reduce ? {} : { opacity: [0, 0.4, 0.4, 0] }}
            transition={{ duration: 4, delay: 6.2, repeat: Infinity, repeatDelay: 10, times: [0, 0.15, 0.7, 1] }}
          />
        ))}

        {/* Cursor arrow */}
        <motion.g
          initial={{ opacity: 0, x: -10, y: -10 }}
          animate={reduce ? { opacity: 0.3 } : { opacity: [0, 0.5, 0.5, 0], x: [-10, 0, 0, 5], y: [-10, 0, 0, 5] }}
          transition={{ duration: 4, delay: 5.5, repeat: Infinity, repeatDelay: 10, times: [0, 0.2, 0.7, 1] }}
        >
          <path d="M12 12l5 16 3-6 6-3-14-7z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </motion.g>
      </svg>
    </div>
  );
};

/**
 * Type Tool — blinking cursor next to "T".
 */
export const TypeToolElement = ({ className = "" }: { className?: string }) => {
  const reduce = useReducedMotion();

  return (
    <div className={className}>
      <svg width="60" height="50" viewBox="0 0 60 50" fill="none">
        {/* T character */}
        <text
          x="10" y="35"
          fontFamily="serif"
          fontSize="30"
          fontWeight="300"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        >
          T
        </text>
        {/* Blinking cursor */}
        <motion.line
          x1="38" y1="12" x2="38" y2="38"
          stroke="currentColor" strokeWidth="1.5"
          initial={{ opacity: 0 }}
          animate={reduce ? { opacity: 0.3 } : { opacity: [0, 0.5, 0] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
      </svg>
    </div>
  );
};

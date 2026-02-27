import { motion, useReducedMotion } from "framer-motion";

/**
 * Pen Tool — main animated element.
 * Draws 4 Bézier variations sequentially.
 */
export const PenToolElement = ({ className = "" }: { className?: string }) => {
  const reduce = useReducedMotion();
  const dur = reduce ? 0 : 8;

  return (
    <div className={className}>
      <svg width="220" height="200" viewBox="0 0 220 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <path d="M170 18l-4 14-6-6 10-8z" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <line x1="166" y1="32" x2="156" y2="42" stroke="currentColor" strokeWidth="1.5" />
          <path d="M156 42l-3 8 5-5-2-3z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </motion.g>

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

        <motion.path
          d="M20 160 C45 60 95 60 70 60"
          stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={reduce ? { opacity: 0.3 } : { pathLength: [0, 1], opacity: [0, 0.35, 0.2] }}
          transition={{ duration: 2, delay: 0.8, repeat: Infinity, repeatDelay: dur - 2 }}
        />
        <motion.path
          d="M70 60 L130 140"
          stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={reduce ? { opacity: 0.3 } : { pathLength: [0, 1], opacity: [0, 0.35, 0.2] }}
          transition={{ duration: 1.5, delay: 3, repeat: Infinity, repeatDelay: dur - 1.5 }}
        />
        <motion.circle
          cx="155" cy="110" r="18"
          stroke="currentColor" strokeWidth="1.5" fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={reduce ? { opacity: 0.25 } : { pathLength: [0, 1], opacity: [0, 0.3, 0.15] }}
          transition={{ duration: 2, delay: 4.5, repeat: Infinity, repeatDelay: dur - 2 }}
        />
        <motion.path
          d="M130 140 C160 180 190 100 200 50"
          stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={reduce ? { opacity: 0.3 } : { pathLength: [0, 1], opacity: [0, 0.35, 0.2] }}
          transition={{ duration: 2, delay: 5.5, repeat: Infinity, repeatDelay: dur - 2 }}
        />

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
 * Brush Tool — draws one soft curved stroke.
 */
export const BrushElement = ({ className = "" }: { className?: string }) => {
  const reduce = useReducedMotion();
  return (
    <div className={className}>
      <svg width="140" height="80" viewBox="0 0 140 80" fill="none">
        <g opacity="0.7">
          <rect x="8" y="20" width="8" height="28" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M8 48 Q12 62 16 48" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </g>
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
 * Pencil Tool — draws a minimal freehand curve.
 */
export const PencilElement = ({ className = "" }: { className?: string }) => {
  const reduce = useReducedMotion();
  return (
    <div className={className}>
      <svg width="100" height="50" viewBox="0 0 100 50" fill="none">
        <g opacity="0.6">
          <line x1="8" y1="40" x2="28" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M6 42l2-2 2 2-4 4z" stroke="currentColor" strokeWidth="1" fill="none" />
          <line x1="18" y1="25" x2="22" y2="21" stroke="currentColor" strokeWidth="1" />
        </g>
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
 * Selection Tool — cursor arrow selects a shape.
 */
export const SelectionToolElement = ({ className = "" }: { className?: string }) => {
  const reduce = useReducedMotion();
  return (
    <div className={className}>
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
        <rect x="25" y="25" width="40" height="40" rx="4" stroke="currentColor" strokeWidth="1" opacity="0.15" fill="none" />
        <motion.rect
          x="22" y="22" width="46" height="46" rx="1"
          stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" fill="none"
          initial={{ opacity: 0 }}
          animate={reduce ? {} : { opacity: [0, 0.35, 0.35, 0] }}
          transition={{ duration: 4, delay: 6, repeat: Infinity, repeatDelay: 10, times: [0, 0.15, 0.7, 1] }}
        />
        {[[22, 22], [68, 22], [22, 68], [68, 68], [45, 22], [45, 68], [22, 45], [68, 45]].map(([cx, cy], i) => (
          <motion.rect
            key={i}
            x={cx - 2} y={cy - 2} width="4" height="4"
            fill="currentColor"
            initial={{ opacity: 0 }}
            animate={reduce ? {} : { opacity: [0, 0.4, 0.4, 0] }}
            transition={{ duration: 4, delay: 6.2, repeat: Infinity, repeatDelay: 10, times: [0, 0.15, 0.7, 1] }}
          />
        ))}
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
        <text x="10" y="35" fontFamily="serif" fontSize="30" fontWeight="300" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5">T</text>
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

/**
 * Eyedropper Tool — Photoshop color picker, samples a color dot.
 */
export const EyedropperElement = ({ className = "" }: { className?: string }) => {
  const reduce = useReducedMotion();
  return (
    <div className={className}>
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        {/* Eyedropper body */}
        <g opacity="0.6">
          <path d="M55 10l10 10-5 5-10-10 5-5z" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <line x1="50" y1="25" x2="30" y2="45" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M30 45l-4 12 12-4-8-8z" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="26" cy="57" r="2" stroke="currentColor" strokeWidth="1" fill="none" />
        </g>
        {/* Color sample dot */}
        <motion.circle
          cx="26" cy="57" r="4"
          stroke="currentColor" strokeWidth="1.5" fill="none"
          initial={{ opacity: 0, scale: 0 }}
          animate={reduce ? { opacity: 0.3 } : { opacity: [0, 0.4, 0.4, 0], scale: [0, 1.3, 1, 0.8] }}
          transition={{ duration: 3, delay: 3, repeat: Infinity, repeatDelay: 8, times: [0, 0.3, 0.7, 1] }}
        />
      </svg>
    </div>
  );
};

/**
 * Gradient Tool — shows a gradient bar being drawn.
 */
export const GradientToolElement = ({ className = "" }: { className?: string }) => {
  const reduce = useReducedMotion();
  return (
    <div className={className}>
      <svg width="120" height="50" viewBox="0 0 120 50" fill="none">
        {/* Gradient bar outline */}
        <rect x="10" y="15" width="100" height="20" rx="3" stroke="currentColor" strokeWidth="1" opacity="0.2" fill="none" />
        {/* Animated gradient fill line */}
        <motion.line
          x1="12" y1="25" x2="108" y2="25"
          stroke="currentColor" strokeWidth="16" strokeLinecap="round"
          opacity="0.08"
          initial={{ pathLength: 0 }}
          animate={reduce ? { pathLength: 1 } : { pathLength: [0, 1, 1, 0] }}
          transition={{ duration: 5, delay: 1, repeat: Infinity, repeatDelay: 8, times: [0, 0.4, 0.8, 1] }}
        />
        {/* Start/end markers */}
        <motion.circle cx="15" cy="25" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"
          initial={{ opacity: 0 }}
          animate={reduce ? { opacity: 0.3 } : { opacity: [0, 0.5, 0.5, 0] }}
          transition={{ duration: 5, delay: 1, repeat: Infinity, repeatDelay: 8 }}
        />
        <motion.circle cx="105" cy="25" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"
          initial={{ opacity: 0 }}
          animate={reduce ? { opacity: 0.3 } : { opacity: [0, 0, 0.5, 0] }}
          transition={{ duration: 5, delay: 1, repeat: Infinity, repeatDelay: 8, times: [0, 0.35, 0.5, 1] }}
        />
      </svg>
    </div>
  );
};

/**
 * After Effects Keyframe Diamond — pulses like a timeline keyframe.
 */
export const KeyframeElement = ({ className = "" }: { className?: string }) => {
  const reduce = useReducedMotion();
  return (
    <div className={className}>
      <svg width="100" height="60" viewBox="0 0 100 60" fill="none">
        {/* Timeline bar */}
        <line x1="5" y1="30" x2="95" y2="30" stroke="currentColor" strokeWidth="1" opacity="0.15" />
        {/* Keyframe diamonds */}
        {[20, 50, 80].map((x, i) => (
          <motion.g key={i}>
            <motion.rect
              x={x - 5} y={25} width="10" height="10"
              stroke="currentColor" strokeWidth="1.5" fill="none"
              style={{ transform: `rotate(45deg)`, transformOrigin: `${x}px 30px` }}
              initial={{ opacity: 0, scale: 0 }}
              animate={reduce ? { opacity: 0.3 } : { opacity: [0, 0.5, 0.3], scale: [0, 1.2, 1] }}
              transition={{ duration: 0.8, delay: 2 + i * 1.2, repeat: Infinity, repeatDelay: 10 }}
            />
          </motion.g>
        ))}
        {/* Playhead */}
        <motion.line
          x1="20" y1="15" x2="20" y2="45"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
          initial={{ opacity: 0 }}
          animate={reduce ? { opacity: 0.2 } : { opacity: [0, 0.4, 0.4, 0.4, 0], x: [0, 0, 30, 60, 60] }}
          transition={{ duration: 6, delay: 2, repeat: Infinity, repeatDelay: 8, times: [0, 0.1, 0.4, 0.8, 1] }}
        />
      </svg>
    </div>
  );
};

/**
 * Layers Panel — stacked rectangles representing layers.
 */
export const LayersElement = ({ className = "" }: { className?: string }) => {
  const reduce = useReducedMotion();
  return (
    <div className={className}>
      <svg width="70" height="80" viewBox="0 0 70 80" fill="none">
        {[0, 1, 2].map((i) => (
          <motion.rect
            key={i}
            x={10 + i * 3} y={10 + i * 20} width="45" height="16" rx="3"
            stroke="currentColor" strokeWidth="1.5" fill="none"
            initial={{ opacity: 0, x: -10 }}
            animate={reduce ? { opacity: 0.25 } : { opacity: [0, 0.3, 0.2], x: [-10, 0, 0] }}
            transition={{ duration: 1, delay: 5 + i * 0.4, repeat: Infinity, repeatDelay: 12 }}
          />
        ))}
        {/* Eye icon on first layer */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={reduce ? { opacity: 0.2 } : { opacity: [0, 0.35, 0] }}
          transition={{ duration: 2, delay: 7, repeat: Infinity, repeatDelay: 12 }}
        >
          <ellipse cx="60" cy="18" rx="5" ry="3" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="60" cy="18" r="1.5" stroke="currentColor" strokeWidth="1" fill="none" />
        </motion.g>
      </svg>
    </div>
  );
};

/**
 * Film/Scissors — video editing scissors cutting film strip.
 */
export const FilmCutElement = ({ className = "" }: { className?: string }) => {
  const reduce = useReducedMotion();
  return (
    <div className={className}>
      <svg width="100" height="60" viewBox="0 0 100 60" fill="none">
        {/* Film strip */}
        <rect x="5" y="15" width="90" height="30" rx="2" stroke="currentColor" strokeWidth="1" opacity="0.2" fill="none" />
        {/* Perforations */}
        {[15, 30, 45, 60, 75].map((x, i) => (
          <rect key={i} x={x} y="18" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="0.8" opacity="0.15" fill="none" />
        ))}
        {[15, 30, 45, 60, 75].map((x, i) => (
          <rect key={i} x={x} y="37" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="0.8" opacity="0.15" fill="none" />
        ))}
        {/* Scissors */}
        <motion.g
          initial={{ opacity: 0, x: -20 }}
          animate={reduce ? { opacity: 0.3 } : { opacity: [0, 0.4, 0.4, 0], x: [-20, 45, 45, 45] }}
          transition={{ duration: 4, delay: 4, repeat: Infinity, repeatDelay: 10, times: [0, 0.5, 0.8, 1] }}
        >
          <circle cx="45" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="45" cy="48" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <line x1="45" y1="16" x2="45" y2="44" stroke="currentColor" strokeWidth="1.5" />
        </motion.g>
        {/* Cut line */}
        <motion.line
          x1="50" y1="10" x2="50" y2="50"
          stroke="currentColor" strokeWidth="1" strokeDasharray="3 2"
          initial={{ opacity: 0 }}
          animate={reduce ? {} : { opacity: [0, 0, 0.3, 0] }}
          transition={{ duration: 4, delay: 4, repeat: Infinity, repeatDelay: 10, times: [0, 0.45, 0.6, 1] }}
        />
      </svg>
    </div>
  );
};

/**
 * Play Button — video/motion play triangle with pulse.
 */
export const PlayButtonElement = ({ className = "" }: { className?: string }) => {
  const reduce = useReducedMotion();
  return (
    <div className={className}>
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="22" stroke="currentColor" strokeWidth="1.5" opacity="0.25" fill="none" />
        <motion.circle
          cx="30" cy="30" r="22"
          stroke="currentColor" strokeWidth="1.5" fill="none"
          initial={{ opacity: 0, scale: 1 }}
          animate={reduce ? { opacity: 0.2 } : { opacity: [0.3, 0, 0], scale: [1, 1.4, 1.4] }}
          transition={{ duration: 2, delay: 3, repeat: Infinity, repeatDelay: 6 }}
        />
        <motion.path
          d="M24 18l18 12-18 12V18z"
          stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round"
          initial={{ opacity: 0.3 }}
          animate={reduce ? {} : { opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 2, delay: 3, repeat: Infinity, repeatDelay: 6 }}
        />
      </svg>
    </div>
  );
};

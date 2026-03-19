"use client";

import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "fade";

interface Props {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
}

const variants: Record<Direction, Variants> = {
  up:    { hidden: { opacity: 0, y: 40 },  visible: { opacity: 1, y: 0 } },
  down:  { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: 60 },  visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } },
  fade:  { hidden: { opacity: 0 },         visible: { opacity: 1 } },
};

export default function AnimateIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.55,
  className,
}: Props) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={variants[direction]}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

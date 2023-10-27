// components/Badges.tsx
"use client";
import React from "react";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import RSBadge from "./RSBadge";
import DSBadge from "./DSBadge";

interface BadgeProps {
  isActivated: boolean;
}

export default function Badge({ isActivated }: BadgeProps) {
  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait">
        {!isActivated ? (
          <m.div
            key="RS"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={fadeVariants}
          >
            <RSBadge />
          </m.div>
        ) : (
          <m.div
            key="DS"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={fadeVariants}
          >
            <DSBadge />
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}
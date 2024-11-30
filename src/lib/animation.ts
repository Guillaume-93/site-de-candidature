export const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.645, 0.045, 0.355, 1.0] }
  },
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.645, 0.045, 0.355, 1.0] }
  },
  fadeInDown: {
    initial: { opacity: 0, y: -20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.645, 0.045, 0.355, 1.0] }
  },
  fadeInRight: {
    initial: { opacity: 0, x: 20 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.645, 0.045, 0.355, 1.0] }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: {
      duration: 0.8,
      ease: [0.645, 0.045, 0.355, 1.0],
      scale: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  },
  slideInLeft: {
    initial: { opacity: 0, x: -20 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.645, 0.045, 0.355, 1.0] }
  },
  slideInRight: {
    initial: { opacity: 0, x: 20 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.645, 0.045, 0.355, 1.0] }
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100
    }
  },
  tap: {
    scale: 0.95
  },
  stagger: {
    container: {
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true },
      variants: {
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.1 }
        }
      }
    },
    item: {
      variants: {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.645, 0.045, 0.355, 1.0]
          }
        }
      }
    }
  },
  springProps: {
    type: "spring",
    damping: 20,
    stiffness: 100
  }
};

export const springProps = {
  type: "spring",
  damping: 20,
  stiffness: 100
} as const;
export const featureVariants = {
  offscreen: {
    scale: 0.5,
  },
  onscreen: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 2,
    },
  },
};

export const featureVariantsAbout = {
  offscreen: {
    scale: 0.5,
  },
  onscreen: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 2,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export const container = (delay = 0) => ({
  offscreen: {
    opacity: 0,
    y: 20,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 2,
      delay,
    },
  },
});

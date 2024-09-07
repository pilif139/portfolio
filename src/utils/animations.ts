export const popUp = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  duration: 0.7,
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { type: "spring", stiffness: 260, damping: 20 },
  duration: 0.7,
};

export const slideIn = {
  initial: { y: -150 },
  animate: { y: 0 },
};

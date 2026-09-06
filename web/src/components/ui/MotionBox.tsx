import { motion, type HTMLMotionProps } from "framer-motion";

type Animation = HTMLMotionProps<"div">;

export const ANIMATIONS = {
  fadeIn: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
  },
  slideUp: {
    initial: { y: 12 },
    whileInView: { y: 0 },
  },
  startFromTop: {
    initial: { y: -80, scale: 0.5 },
    animate: { y: 0, scale: 1 },
    transition: { duration: 0.4 },
  },
  scaleUp: {
    initial: { scale: 0.97 },
    whileInView: { scale: 1 },
  },
  shakeHover: {
    whileHover: {
      rotate: [0, -5, 0, 5, 0],
      transition: { duration: 0.4, ease: (t: number) => Math.round(t) },
    },
  },
  startFromLeft: {
    initial: { x: -80, scale: 0.5 },
    animate: { x: 0, scale: 1 },
    transition: { duration: 0.4 },
  },
} satisfies Record<string, Animation>;

type AnimationKey = keyof typeof ANIMATIONS;

const DEFAULT_ANIMATION: AnimationKey[] = ["fadeIn", "slideUp", "scaleUp"];

type MotionBoxProps = HTMLMotionProps<"div"> & {
  delay?: number;
  animation?: AnimationKey | AnimationKey[];
};

function mergeAnimations(animations: Animation[]): Animation {
  const merged = {
    initial: Object.assign({}, ...animations.map((a) => a.initial)),
    whileInView: Object.assign({}, ...animations.map((a) => a.whileInView)),
    animate: Object.assign({}, ...animations.map((a) => a.animate)),
    whileHover: Object.assign({}, ...animations.map((a) => a.whileHover)),
  };
  return Object.fromEntries(
    Object.entries(merged).filter(([, v]) => v && Object.keys(v).length),
  ) as Animation;
}

export default function MotionBox({
  children,
  delay = 0,
  animation = DEFAULT_ANIMATION,
  ...props
}: MotionBoxProps) {
  const keys = Array.isArray(animation) ? animation : [animation];
  const merged = mergeAnimations(keys.map((key) => ANIMATIONS[key]));

  return (
    <motion.div
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      {...merged}
      {...props}
    >
      {children}
    </motion.div>
  );
}

import { motion, type HTMLMotionProps } from "framer-motion";

type MotionBoxProps = HTMLMotionProps<"div"> & {
  delay?: number;
  shake?: boolean;
};

export default function MotionBox({ children, delay = 0, shake = false, ...props }: MotionBoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={shake ? { rotate: [0, -5, 0, 5, 0], transition: { duration: 0.4, ease: (t: number) => Math.round(t) } } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
}

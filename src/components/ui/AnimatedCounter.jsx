import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const AnimatedCounter = ({ endValue }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const controls = animate(count, endValue, {
      duration: 2,
      ease: "easeOut",
      onComplete: () => {
        console.log("Animation completed");
      },
    });

    return controls.stop;
  }, [endValue]);

  return (
    <motion.div className="text-6xl text-blue-600 font-bold">
      {rounded}
    </motion.div>
  );
};

export default AnimatedCounter;

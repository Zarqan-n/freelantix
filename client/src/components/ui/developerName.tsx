import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function DeveloperName() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const letters = 'Zarqan'.split('');
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start(i => ({
        opacity: 1,
        rotateX: [0, 360, 0],
        transition: {
          delay: i * 0.15,
          duration: 2.8,
          ease: 'easeInOut',
        },
      }));

      const interval = setInterval(() => {
        controls.start(i => ({
          rotateX: [0, 360, 0],
          transition: {
            delay: i * 0.1,
            duration: 2.5,
            ease: 'easeInOut',
          },
        }));
      }, 6000);

      return () => clearInterval(interval);
    }
  }, [inView, controls]);

  return (
    <div
      ref={ref}
      className="flex flex-col pt-8 items-center justify-center min-h-[10vh] bg-transparent text-white perspective-[1200px] px-4"
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="text-lg md:text-xl mb-2 text-gray-800 tracking-wide"
      >
        Developed By
      </motion.p>

      <div
        className="flex space-x-1 text-3xl md:text-5xl font-semibold tracking-wider"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {letters.map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            initial={{ opacity: 0, rotateX: 0 }}
            animate={controls}
            className="text-[#5CB338] drop-shadow-lg"
          >
            {char}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

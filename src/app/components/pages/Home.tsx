import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function Home() {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['SCALE', 'SECURE', 'TRANSFORM', 'AUTOMATE'];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="min-h-dvh flex items-center px-6 md:pl-32 md:pr-16 relative bg-white py-20 md:py-0">


      {/* Soft center focus vignette */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-transparent via-transparent to-black/30" />
      
      <div className="max-w-3xl relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-[var(--galaxy-blue)] mb-8 leading-none heading">
            We Build.<br />We Innovate.<br />We Deliver.
          </h1>

          {/* Animated Words */}
          <div className="mb-12 h-12 md:h-16">
            <motion.div
              key={currentWord}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold text-black"
              style={{
                textShadow: 'none',
              }}
            >
              {words[currentWord]}
            </motion.div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:flex md:flex-wrap gap-8 md:gap-16 mt-16">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[var(--galaxy-blue)] mb-2 leading-none">50+</div>
              <div className="text-xs md:text-base text-[var(--muted-galaxy-blue)] font-medium uppercase tracking-wider">Projects</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[var(--galaxy-blue)] mb-2 leading-none">20+</div>
              <div className="text-xs md:text-base text-[var(--muted-galaxy-blue)] font-medium uppercase tracking-wider">Clients</div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="text-4xl md:text-5xl font-bold text-[var(--galaxy-blue)] mb-2 leading-none">99%</div>
              <div className="text-xs md:text-base text-[var(--muted-galaxy-blue)] font-medium uppercase tracking-wider">Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
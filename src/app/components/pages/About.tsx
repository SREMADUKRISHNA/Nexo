import { motion } from 'motion/react';
import Hyperspeed from '../Hyperspeed';
import { hyperspeedPresets } from '../hyperspeedPresets';

export function About() {
  return (
    <div style={{ position: 'relative', overflow: 'visible' }}>
      <Hyperspeed effectOptions={hyperspeedPresets.three} />
      <div className="min-h-dvh flex items-center justify-center py-20 md:py-24 px-6 md:px-32" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center w-full max-w-4xl"
        >
          {/* Header */}
          <div className="mb-8 md:mb-16">
            <div className="text-center mb-6">
              <h1 className="text-5xl md:text-7xl text-[var(--galaxy-blue)] font-bold heading leading-none">AT</h1>
              <h1 className="text-5xl md:text-7xl text-[var(--galaxy-blue)] font-bold heading leading-none mt-2">NEXORIX TECHLAB</h1>
            </div>
            <p className="text-xl md:text-2xl text-black font-bold text-center mt-6 md:mt-8 max-w-3xl mx-auto leading-relaxed">
              we don’t adapt to the future — we engineer it with AI at the core.
            </p>
            <div className="mt-8 space-y-6 md:space-y-4">
              <p className="text-base md:text-xl text-black max-w-3xl mx-auto text-justify md:text-center leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Nexorix Techlab is a forward-thinking technology company focused on building intelligent, secure, and scalable digital solutions. We create products that help businesses move beyond traditional systems and confidently step into the next era of technology.
              </p>
              <p className="text-base md:text-xl text-black max-w-3xl mx-auto text-justify md:text-center leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                With a strong foundation in artificial intelligence, automation, and modern software engineering, we turn complex challenges into smart, data-driven solutions. Every product we build is designed for long-term impact, adaptability, and performance in a rapidly evolving digital landscape.
              </p>
              <p className="text-lg md:text-2xl text-black mt-4 max-w-3xl mx-auto text-center font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>
                Innovation is not an option — it is our standard.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
import { motion } from 'motion/react';
import Hyperspeed from '../Hyperspeed';
import { hyperspeedPresets } from '../hyperspeedPresets';

export function About() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <Hyperspeed effectOptions={hyperspeedPresets.three} />
      <div className="min-h-screen flex items-center justify-center py-12 md:py-24 px-6 md:px-32" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Header */}
          <div className="mb-8 md:mb-16">
            <div className="text-center mb-4">
              <h1 className="text-4xl md:text-7xl text-[var(--galaxy-blue)] font-bold heading">AT</h1>
              <h1 className="text-4xl md:text-7xl text-[var(--galaxy-blue)] font-bold heading">NEXORIX TECHLAB</h1>
            </div>
            <p className="text-lg md:text-2xl text-black font-bold text-center mt-4 md:mt-6 max-w-3xl mx-auto">
              we don’t adapt to the future — we engineer it with AI at the core.
            </p>
            <div className="text-center space-y-4">
              <p className="text-base md:text-2xl text-black mt-2 max-w-3xl mx-auto" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Nexorix Techlab is a forward-thinking technology company focused on building intelligent, secure, and scalable digital solutions. We create products that help businesses move beyond traditional systems and confidently step into the next era of technology.
              </p>
              <p className="text-base md:text-2xl text-black mt-2 max-w-3xl mx-auto" style={{ fontFamily: "'Poppins', sans-serif" }}>
                With a strong foundation in artificial intelligence, automation, and modern software engineering, we turn complex challenges into smart, data-driven solutions. Every product we build is designed for long-term impact, adaptability, and performance in a rapidly evolving digital landscape.
              </p>
              <p className="text-base md:text-2xl text-black mt-2 max-w-3xl mx-auto" style={{ fontFamily: "'Poppins', sans-serif" }}>
                <strong>At Nexorix Techlab, innovation is not an option — it is our standard.</strong>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
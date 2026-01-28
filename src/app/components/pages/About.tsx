import { motion } from 'motion/react';

export function About() {
  return (
    <div className="min-h-screen py-24 px-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-6xl text-black font-bold text-center mb-4">AT NEXORIX</h1>
          <p className="text-xl text-black font-bold text-center mt-6 max-w-3xl mx-auto">
            we don’t adapt to the future — we engineer it with AI at the core.
          </p>
          <div className="text-center">
            <p className="text-xl text-slate-600 mt-2 max-w-3xl mx-auto" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Nexorix Techlab is a forward-thinking technology company focused on building intelligent, secure, and scalable digital solutions. We create products that help businesses move beyond traditional systems and confidently step into the next era of technology.
            </p>
            <p className="text-xl text-slate-600 mt-2 max-w-3xl mx-auto" style={{ fontFamily: "'Poppins', sans-serif" }}>
              With a strong foundation in artificial intelligence, automation, and modern software engineering, we turn complex challenges into smart, data-driven solutions. Every product we build is designed for long-term impact, adaptability, and performance in a rapidly evolving digital landscape.
            </p>
            <p className="text-xl text-slate-600 mt-2 max-w-3xl mx-auto" style={{ fontFamily: "'Poppins', sans-serif" }}>
              <strong>At Nexorix Techlab, innovation is not an option — it is our standard.</strong>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
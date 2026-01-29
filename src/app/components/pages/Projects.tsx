import { motion } from 'motion/react';

export function Projects() {
  return (
    <div className="min-h-screen py-24 px-32 flex items-center justify-between">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-1/2 pr-8"
      >
        {/* Header */}
        <div className="mb-16 text-left">
          <h1 className="text-6xl font-bold text-[var(--galaxy-blue)] mb-4 heading">PROJECTS</h1>
          <p className="text-xl text-black mt-6 max-w-3xl">
            The automated healthcare bot is designed to mitigate hospital backlogs by managing high volumes of patient inquiries and appointment scheduling in a fully automated manner. By streamlining routine interactions, the solution reduces operational delays, lowers administrative burden, and improves overall efficiency within healthcare systems.
          </p>
        </div>
      </motion.div>

      {/* New div for the image */}
      <div className="w-1/2 flex justify-center items-center">
        <img src="/bot.png" alt="Bot" className="max-w-full h-auto" />
      </div>
    </div>
  );
}

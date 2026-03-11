import { motion } from 'motion/react';

export function Projects() {
  return (
    <div className="min-h-dvh py-20 md:py-24 px-6 md:px-32 flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2 md:pr-8 flex flex-col items-center md:items-start"
      >
        {/* Header */}
        <div className="mb-6 md:mb-16 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-[var(--galaxy-blue)] mb-6 heading leading-none">PROJECTS</h1>
          <p className="text-base md:text-xl text-black mt-4 max-w-2xl text-justify md:text-left leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
            The automated healthcare bot is designed to mitigate hospital backlogs by managing high volumes of patient inquiries and appointment scheduling in a fully automated manner. By streamlining routine interactions, the solution reduces operational delays, lowers administrative burden, and improves overall efficiency within healthcare systems.
          </p>
        </div>
      </motion.div>

      {/* New div for the image */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <motion.img 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          src="/bot.png" 
          alt="Bot" 
          className="w-full max-w-[280px] sm:max-w-sm md:max-w-md h-auto object-contain drop-shadow-2xl" 
        />
      </div>
    </div>
  );
}

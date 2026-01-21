import { motion } from 'motion/react';

export function ThreeDBackground() {
  return (
    <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none overflow-hidden">
      {/* Soft vignette overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-white/50 to-white" />
      
      {/* 3D Abstract Elements */}
      <div className="absolute inset-0 flex items-center justify-end pr-20">
        {/* Large Sphere with blur */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute top-1/4 right-32"
          style={{ filter: 'blur(1px)' }}
        >
          <div className="w-64 h-64 rounded-full bg-gradient-to-br from-indigo-400/20 to-violet-500/20 shadow-2xl relative">
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-white/40 to-transparent" />
            <div className="absolute inset-0 rounded-full shadow-inner" style={{ 
              boxShadow: 'inset -20px -20px 60px rgba(99, 102, 241, 0.15), inset 20px 20px 60px rgba(255, 255, 255, 0.1)' 
            }} />
          </div>
        </motion.div>

        {/* Medium Ring */}
        <motion.div
          initial={{ x: 150, opacity: 0, rotate: 0 }}
          animate={{ x: 0, opacity: 1, rotate: 45 }}
          transition={{ duration: 1.4, delay: 0.4 }}
          className="absolute top-1/2 right-20"
          style={{ filter: 'blur(0.5px)' }}
        >
          <div className="w-48 h-48 rounded-full border-8 border-cyan-400/20 shadow-xl relative">
            <div className="absolute inset-0 rounded-full" style={{
              background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, transparent 100%)',
              boxShadow: '-10px -10px 30px rgba(6, 182, 212, 0.1), 10px 10px 30px rgba(99, 102, 241, 0.05)'
            }} />
          </div>
        </motion.div>

        {/* Small Blob Top */}
        <motion.div
          initial={{ y: -50, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute top-20 right-64"
          style={{ filter: 'blur(0.5px)' }}
        >
          <div className="w-32 h-32 bg-gradient-to-br from-violet-400/15 to-indigo-500/15 shadow-lg"
            style={{
              borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
              boxShadow: '-8px -8px 20px rgba(139, 92, 246, 0.1), 8px 8px 20px rgba(99, 102, 241, 0.05)'
            }}
          />
        </motion.div>

        {/* Layered Block */}
        <motion.div
          initial={{ x: 100, y: 50, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1.3, delay: 0.5 }}
          className="absolute bottom-32 right-48"
          style={{ filter: 'blur(1px)' }}
        >
          <div className="relative">
            <div className="w-40 h-40 bg-gradient-to-br from-indigo-300/10 to-violet-400/10 rounded-3xl shadow-xl transform rotate-12"
              style={{
                boxShadow: '-15px -15px 40px rgba(99, 102, 241, 0.08), 15px 15px 40px rgba(139, 92, 246, 0.08)'
              }}
            />
            <div className="absolute top-4 left-4 w-40 h-40 bg-gradient-to-br from-cyan-300/10 to-teal-400/10 rounded-3xl shadow-lg transform -rotate-6"
              style={{
                boxShadow: '-10px -10px 30px rgba(6, 182, 212, 0.06), 10px 10px 30px rgba(20, 184, 166, 0.06)'
              }}
            />
          </div>
        </motion.div>

        {/* Small sphere bottom */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.7 }}
          className="absolute bottom-1/4 right-96"
          style={{ filter: 'blur(1.5px)' }}
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-400/15 to-cyan-500/15 shadow-lg"
            style={{
              boxShadow: 'inset -8px -8px 20px rgba(6, 182, 212, 0.1), inset 8px 8px 20px rgba(255, 255, 255, 0.05)'
            }}
          />
        </motion.div>

        {/* Floating ring small */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="absolute top-1/3 right-10"
          style={{ filter: 'blur(0.5px)' }}
        >
          <div className="w-20 h-20 rounded-full border-4 border-indigo-400/15 shadow-md" />
        </motion.div>

        {/* Abstract curved shape */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute top-1/2 right-56 -mt-20"
          style={{ filter: 'blur(1px)' }}
        >
          <div className="w-56 h-56 bg-gradient-to-br from-violet-400/10 to-indigo-500/10 shadow-xl"
            style={{
              borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
              boxShadow: '-12px -12px 35px rgba(139, 92, 246, 0.08), 12px 12px 35px rgba(99, 102, 241, 0.08)'
            }}
          />
        </motion.div>
      </div>

      {/* Depth of field gradient fade */}
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/80" />
    </div>
  );
}

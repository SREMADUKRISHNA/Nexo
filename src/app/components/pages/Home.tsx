import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { ThreeDBackground } from '@/app/components/ThreeDBackground';

export function Home() {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['SCALE', 'SECURE', 'TRANSFORM', 'AUTOMATE'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center pl-32 pr-16 relative bg-white overflow-hidden">
      {/* 3D Background Elements */}
      <ThreeDBackground />
      
      {/* Soft center focus vignette */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-transparent via-transparent to-white/30" />
      
      <div className="max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Main Heading */}
          <h1 className="text-6xl font-bold text-slate-900 mb-6 leading-tight">
            We Build. We Innovate. We Deliver.
          </h1>

          {/* Animated Words */}
          <div className="mb-12">
            <motion.div
              key={currentWord}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent"
              style={{
                textShadow: '0 0 30px rgba(251, 191, 36, 0.3)',
              }}
            >
              {words[currentWord]}
            </motion.div>
          </div>

          {/* Stats */}
          <div className="flex gap-12 mt-16">
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-1">50+</div>
              <div className="text-sm text-slate-500">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-1">20+</div>
              <div className="text-sm text-slate-500">Global Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-1">99%</div>
              <div className="text-sm text-slate-500">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
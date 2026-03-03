import { motion } from "framer-motion";
import { Button } from "../ui/button";
import PixelBlast from "../PixelBlast"; // Import the PixelBlast component
import { useState } from "react";

export function Contact() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center text-center p-4 relative"> {/* Added relative positioning */}
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
        <PixelBlast
          variant="square"
          pixelSize={3}
          color="#2803a0"
          patternScale={5.25}
          patternDensity={0.75}
          pixelSizeJitter={0}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.75}
          edgeFade={0.08}
          transparent
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto z-10 relative" // Added relative and z-10 for content to be above background
      >
        <h1 className="text-7xl md:text-9xl font-bold text-[var(--galaxy-blue)] mb-6 futuristic-heading">
          Let’s Build What’s Next
        </h1>
        <p className="text-xl md:text-2xl text-[var(--soft-white)] max-w-2xl mx-auto mb-8">
          Have an idea, a challenge, or a vision that needs execution?
          We collaborate with thinkers, builders, and innovators to turn bold ideas into real solutions.
          Drop us a message—this is where progress begins.
        </p>
        <Button
          variant="outline"
          className="bg-transparent border-[var(--galaxy-blue)] text-white hover:bg-[var(--galaxy-blue)]/10 hover:shadow-glow-blue rounded-lg px-8 py-3 text-lg transition-all duration-300"
          onClick={() => setShowMessage(true)}
        >
          Get in Touch
        </Button>

        {showMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="mt-8 bg-gradient-to-br from-[var(--galaxy-blue)]/30 via-[var(--galaxy-blue)]/20 to-transparent border-2 border-[var(--galaxy-blue)] rounded-2xl p-8 backdrop-blur-md shadow-[0_0_30px_rgba(40,3,160,0.4)] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--galaxy-blue)]/10 to-transparent animate-pulse" />
            <div className="relative z-10">
              <p className="text-white text-2xl font-bold mb-6 tracking-wide">Contact Nexorix Techlab</p>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3 text-[var(--soft-white)] text-lg">
                  <span className="text-[var(--galaxy-blue)] font-semibold">📱</span>
                  <span>8220411848</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-[var(--soft-white)] text-lg">
                  <span className="text-[var(--galaxy-blue)] font-semibold">✉️</span>
                  <span>nexorixtechlabs@gmail.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-16 z-10 relative" // Added relative and z-10 for content to be above background
      >
        <h2 className="text-xl text-[var(--muted-galaxy-blue)] mb-4">Stay Connected</h2>
        <div className="flex space-x-6">
          <a
            href="https://www.instagram.com/nexorixtechlabs?igsh=MWU5eGdqZ25nODIybQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[var(--galaxy-blue)] hover:shadow-glow-blue transition-all duration-300"
          >
            Instagram
          </a>
          <span className="text-[var(--muted-galaxy-blue)]">·</span>
          <a
            href="https://x.com/NEXORIXTECHLABS"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[var(--galaxy-blue)] hover:shadow-glow-blue transition-all duration-300"
          >
            X (Twitter)
          </a>
          <span className="text-[var(--muted-galaxy-blue)]">·</span>
          <a
            href="https://www.linkedin.com/in/nexorix-tech-labs-8183783aa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[var(--galaxy-blue)] hover:shadow-glow-blue transition-all duration-300"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
    </div>
  );
}
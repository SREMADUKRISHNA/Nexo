import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

export function Team() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);
  const [rotation, setRotation] = useState(0);

  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'Chief Executive Officer',
      bio: 'Visionary leader with 15+ years in tech innovation. Former VP at leading Silicon Valley firms.',
      linkedin: '#',
      github: '#',
      email: 'sarah@nexorix.tech',
      initials: 'SC',
      color: 'from-indigo-500 to-violet-600',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Chief Technology Officer',
      bio: 'Full-stack architect passionate about scalable systems. PhD in Computer Science from MIT.',
      linkedin: '#',
      github: '#',
      email: 'marcus@nexorix.tech',
      initials: 'MR',
      color: 'from-teal-500 to-emerald-600',
    },
    {
      name: 'Aisha Patel',
      role: 'Head of Design',
      bio: 'Award-winning UX designer crafting intuitive experiences. Featured in Forbes 30 Under 30.',
      linkedin: '#',
      github: '#',
      email: 'aisha@nexorix.tech',
      initials: 'AP',
      color: 'from-violet-500 to-purple-600',
    },
    {
      name: 'James O\'Brien',
      role: 'Lead Engineer',
      bio: 'Performance optimization expert. Built systems serving millions of users globally.',
      linkedin: '#',
      github: '#',
      email: 'james@nexorix.tech',
      initials: 'JO',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      name: 'Elena Volkov',
      role: 'Head of AI Research',
      bio: 'Machine learning pioneer with multiple published papers. Ex-Google Brain researcher.',
      linkedin: '#',
      github: '#',
      email: 'elena@nexorix.tech',
      initials: 'EV',
      color: 'from-pink-500 to-rose-600',
    },
    {
      name: 'David Kim',
      role: 'Product Manager',
      bio: 'Strategic product thinker bridging tech and business. MBA from Stanford GSB.',
      linkedin: '#',
      github: '#',
      email: 'david@nexorix.tech',
      initials: 'DK',
      color: 'from-orange-500 to-amber-600',
    },
  ];

  const radius = 280;
  const centerX = 0;
  const centerY = 0;
  const angleStep = (2 * Math.PI) / teamMembers.length;

  return (
    <div className="min-h-screen py-24 px-32 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold text-slate-900 mb-4">Meet Our Team</h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full mx-auto" />
          <p className="text-xl text-slate-600 mt-6 max-w-2xl mx-auto">
            A diverse group of innovators, creators, and problem-solvers united by a passion for excellence.
          </p>
        </div>

        {/* Circular Animation */}
        <div className="relative h-[700px] flex items-center justify-center">
          {/* Center Circle with "Explore Now" */}
          <div className="absolute z-10">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <div className="text-white font-bold text-lg mb-1">Explore</div>
                <div className="text-white/70 text-sm">Our Team</div>
              </div>
            </div>
          </div>

          {/* Team Members in Circle */}
          {teamMembers.map((member, index) => {
            const angle = index * angleStep + rotation;
            const x = centerX + radius * Math.cos(angle - Math.PI / 2);
            const y = centerY + radius * Math.sin(angle - Math.PI / 2);

            return (
              <motion.div
                key={index}
                className="absolute cursor-pointer"
                style={{
                  left: '50%',
                  top: '50%',
                  x: x - 48,
                  y: y - 48,
                }}
                animate={{
                  x: x - 48,
                  y: y - 48,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 50,
                  damping: 15,
                }}
                onClick={() => setSelectedMember(selectedMember === index ? null : index)}
                whileHover={{ scale: 1.1 }}
              >
                <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center shadow-xl border-4 border-white hover:shadow-2xl transition-shadow duration-300`}>
                  <div className="text-white font-bold text-xl">
                    {member.initials}
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Rotation Controls */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-4">
            <button
              onClick={() => setRotation((prev) => prev - angleStep)}
              className="px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors duration-300 shadow-lg"
            >
              ← Previous
            </button>
            <button
              onClick={() => setRotation((prev) => prev + angleStep)}
              className="px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors duration-300 shadow-lg"
            >
              Next →
            </button>
          </div>
        </div>

        {/* Selected Member Card */}
        <AnimatePresence>
          {selectedMember !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-12 max-w-2xl mx-auto"
            >
              <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-2xl">
                <div className="flex items-start gap-6">
                  {/* Avatar */}
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${teamMembers[selectedMember].color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <div className="text-white font-bold text-2xl">
                      {teamMembers[selectedMember].initials}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-slate-900 mb-1">
                      {teamMembers[selectedMember].name}
                    </h3>
                    <div className="text-indigo-600 font-medium mb-4">
                      {teamMembers[selectedMember].role}
                    </div>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {teamMembers[selectedMember].bio}
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-3">
                      <a
                        href={teamMembers[selectedMember].linkedin}
                        className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-indigo-100 text-slate-600 hover:text-indigo-600 flex items-center justify-center transition-colors duration-300"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={teamMembers[selectedMember].github}
                        className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-indigo-100 text-slate-600 hover:text-indigo-600 flex items-center justify-center transition-colors duration-300"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={`mailto:${teamMembers[selectedMember].email}`}
                        className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-indigo-100 text-slate-600 hover:text-indigo-600 flex items-center justify-center transition-colors duration-300"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

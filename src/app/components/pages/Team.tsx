import { motion, AnimatePresence } from 'framer-motion';
import { Marquee } from './Marquee';
import ProfileCard from '../ui/ProfileCard';
import '../ui/ProfileCard.css';
import { useState } from 'react';
import { useIsMobile } from '../ui/use-mobile';

export function Team() {
  const [selectedMember, setSelectedMember] = useState(null);
  const isMobile = useIsMobile();

  const teamMembers = [
    {
      name: 'SREMADUKRISHNA V',
      role: 'FOUNDER & CEO',
      handle: 'sremadukrishna',
      status: 'Online',
      avatarUrl: '/MADHU.png',
      message: "I am Sremadukrishna V, CEO and Founder of NEXORIX TECHLAB, focused on building bold, intelligent solutions that solve real-world problems. I believe technology should create impact, not complexity. Driven by innovation, execution, and a builder's mindset, I turn ideas into scalable, future-ready products."
    },
    {
      name: 'MERSHIYA M',
      role: 'FOUNDER & CEO',
      handle: 'mershiyam',
      status: 'Online',
      avatarUrl: '/MERSHI.png',
      message: "As Co-Founder and CEO of NEXORIX TECHLAB, I lead with a vision to create technology that empowers and transforms. My focus is on building innovative solutions that bridge the gap between complex technology and user needs, ensuring every product we create makes a meaningful difference."
    },
    {
      name: 'PRIYANANTH',
      role: 'SENIOR TECHNICAL LEAD',
      handle: 'priyananth',
      status: 'Online',
      avatarUrl: '/ananth.png',
      message: "As Senior Technical Lead, I architect robust and scalable systems that power NEXORIX TECHLAB's vision. With a focus on clean code and efficient solutions, I ensure our technical foundation is solid, maintainable, and ready for the future."
    },
    {
      name: 'RAJHAVEL V S',
      role: 'SOFTWARE ENGINEER',
      handle: 'Raju',
      status: 'Online',
      avatarUrl: '/Raju.png',
      message: "As a Software Engineer at NEXORIX TECHLAB, I transform ideas into functional code. I'm passionate about solving complex problems with elegant solutions and continuously learning new technologies to deliver high-quality software."
    },
    {
        name: 'JEEVITHA U',
        role: 'CHIEF LEGAL OFFICER',
        handle: 'JEEVI',
        status: 'Online',
        avatarUrl: '/JEEVI.png',
        message: "As Chief Legal Officer, I ensure NEXORIX TECHLAB operates with integrity and compliance. I protect our innovations, navigate legal complexities, and build a foundation of trust that allows our team to innovate fearlessly."
    },
    {
      name: 'DIKSHITH S',
      role: 'SOFTWARE ENGINEER',
      handle: 'dikshiths',
      status: 'Online',
      avatarUrl: '/shitu.png',
      message: "As a Software Engineer, I bring creativity and precision to every line of code. I thrive on building features that enhance user experience and contribute to NEXORIX TECHLAB's mission of creating impactful technology solutions."
    },
    {
        name: 'RETHANYA',
        role: 'SOFTWARE DEVELOPER',
        handle: 'angelam',
        status: 'Online',
        avatarUrl: '/RETHU.png',
        message: "As a Software Developer at NEXORIX TECHLAB, I focus on writing clean, efficient code that brings our products to life. I'm dedicated to continuous improvement and delivering solutions that exceed expectations."
    },
    {
      name: 'JENIFA JEROMI J',
      role: 'SOFTWARE ENGINEER',
      handle: 'JENEFA',
      status: 'Do not disturb',
      avatarUrl: '/Jene.png',
      message: "As a Software Engineer, I combine technical expertise with problem-solving skills to build reliable and innovative solutions. I'm committed to excellence and contributing to NEXORIX TECHLAB's growth through quality engineering."
    },
    {
      name: 'ROHITH',
      role: 'DESIGN CONSULTANT',
      handle: 'rohithdesign',
      status: 'Away',
      avatarUrl: '/ROHIT.png',
      message: "As Design Consultant at NEXORIX TECHLAB, I craft intuitive and visually compelling experiences. I believe great design is invisible—it just works. My approach combines aesthetics with functionality to create products that users love and understand effortlessly."
    },
    {
      name: 'NANDHA GOPAL',
      role: 'R&D ENGINEER',
      handle: 'nandhagopal',
      status: 'Online',
      avatarUrl: '/NANDHA.png',
      message: "As an R&D Engineer at NEXORIX TECHLAB, I focus on research and development of innovative solutions. I explore emerging technologies and transform experimental concepts into practical applications that drive our products forward."
    },
  ];

  const topRow = teamMembers.slice(0, 5);
  const bottomRow = teamMembers.slice(5);

  const handleCardClick = (member) => {
    setSelectedMember(member);
  };

  return (
    <div className="min-h-screen py-12 md:py-24 px-4 sm:px-6 lg:px-8">
      <AnimatePresence mode="wait">
        {!selectedMember ? (
          <motion.div key="team-view">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-10 md:mb-20">
                <h1 className="text-4xl md:text-6xl font-bold text-[var(--galaxy-blue)] heading" style={{ fontFamily: 'Inter, sans-serif' }}>OUR TEAM</h1>
                <div className="w-16 md:w-24 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full mx-auto mt-4" />
              </div>
            </motion.div>
            <div className="space-y-4 md:space-y-8">
              <Marquee items={topRow} direction="left" onCardClick={handleCardClick} />
              <Marquee items={bottomRow} direction="right" onCardClick={handleCardClick} />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="member-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-32 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto"
          >
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: isMobile ? 1.1 : 1.5 }}
              transition={{ 
                duration: 0.6,
                ease: "easeOut"
              }}
              className="flex-shrink-0 w-full sm:w-auto lg:ml-12"
              onClick={() => setSelectedMember(null)}
              style={{ cursor: 'pointer' }}
            >
              <ProfileCard
                name={selectedMember.name}
                title={selectedMember.role}
                handle={selectedMember.handle}
                status={selectedMember.status}
                avatarUrl={selectedMember.avatarUrl}
                enableTilt={true}
                showUserInfo={true}
                onContactClick={() => console.log(`Contacting ${selectedMember.name}`)}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="pt-0 lg:pt-8 w-full lg:flex-1 z-10"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6" style={{ color: 'black', fontFamily: 'Inter, sans-serif' }}>
                Message from {selectedMember.role}
              </h2>
              <p className="text-xl sm:text-2xl lg:text-3xl leading-relaxed" style={{ color: 'black', fontFamily: 'Inter, sans-serif' }}>
                {selectedMember.message}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
import { motion } from 'framer-motion';
import ProfileCard from '../ui/ProfileCard';

export function Marquee({ items, direction = 'left' }) {
  const duplicatedItems = [...items, ...items, ...items, ...items];

  const marqueeVariants = {
    animate: {
      x: direction === 'left' ? ['0%', '-200%'] : ['-200%', '0%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 40,
          ease: 'linear',
        },
      },
    },
  };

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex"
        variants={marqueeVariants}
        animate="animate"
      >
        {duplicatedItems.map((member, index) => (
          <div key={index} className="flex-shrink-0 mx-4">
            <ProfileCard
              name={member.name}
              title={member.role}
              handle={member.handle}
              status={member.status}
              avatarUrl={member.avatarUrl}
              enableTilt={true}
              showUserInfo={true}
              onContactClick={() => console.log(`Contacting ${member.name}`)}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

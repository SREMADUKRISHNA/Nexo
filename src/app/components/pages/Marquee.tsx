import { motion } from 'framer-motion';
import ProfileCard from '../ui/ProfileCard';

export function Marquee({ items, direction = 'left', onCardClick }) {
  const duplicatedItems = [...items, ...items];
  
  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex"
        style={{ gap: '1.5rem' }}
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%']
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear"
          }
        }}
      >
        {duplicatedItems.map((member, index) => (
          <div key={index} className="flex-shrink-0" onClick={() => onCardClick?.(member)} style={{ cursor: 'pointer' }}>
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

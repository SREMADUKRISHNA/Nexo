import { motion } from 'motion/react';
import { Target, Lightbulb, Zap, Shield } from 'lucide-react';

export function About() {
  const cards = [
    {
      icon: Target,
      title: 'Our Vision',
      description: 'To be the catalyst for technological transformation, empowering businesses to thrive in the digital age through innovative solutions.',
      gradient: 'from-indigo-500 to-indigo-600',
      bgGradient: 'from-indigo-50 to-indigo-100',
    },
    {
      icon: Lightbulb,
      title: 'Our Mission',
      description: 'Delivering exceptional technology solutions that solve real-world problems with creativity, precision, and unwavering commitment to excellence.',
      gradient: 'from-violet-500 to-violet-600',
      bgGradient: 'from-violet-50 to-violet-100',
    },
    {
      icon: Zap,
      title: 'Core Values',
      description: 'Innovation, integrity, and impact drive everything we do. We believe in pushing boundaries while maintaining the highest ethical standards.',
      gradient: 'from-teal-500 to-teal-600',
      bgGradient: 'from-teal-50 to-teal-100',
    },
    {
      icon: Shield,
      title: 'What Sets Us Apart',
      description: 'A fusion of technical expertise, creative thinking, and strategic insight. We don\'t just build products—we craft experiences that matter.',
      gradient: 'from-slate-500 to-slate-600',
      bgGradient: 'from-slate-50 to-slate-100',
    },
  ];

  return (
    <div className="min-h-screen py-24 px-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-6xl font-bold mb-4" style={{ fontFamily: "'Inter', sans-serif", background: 'linear-gradient(to right, gold, red)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', filter: 'drop-shadow(0 0 5px gold) drop-shadow(0 0 15px red)', animation: 'glitter 1.5s infinite' }}>AT NEXORIX</h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full" />
          <p className="text-xl text-slate-600 mt-6 max-w-3xl" style={{ fontFamily: "'Inter', sans-serif" }}>
            we don’t adapt to the future — we engineer it with AI at the core.
          </p>
          <p className="text-xl text-slate-600 mt-2 max-w-3xl" style={{ fontFamily: "'Inter', sans-serif" }}>
            Nexorix Techlab is a forward-thinking technology company focused on building intelligent, secure, and scalable digital solutions. We create products that help businesses move beyond traditional systems and confidently step into the next era of technology.
          </p>
          <p className="text-xl text-slate-600 mt-2 max-w-3xl" style={{ fontFamily: "'Inter', sans-serif" }}>
            With a strong foundation in artificial intelligence, automation, and modern software engineering, we turn complex challenges into smart, data-driven solutions. Every product we build is designed for long-term impact, adaptability, and performance in a rapidly evolving digital landscape.
          </p>
          <p className="text-xl text-slate-600 mt-2 max-w-3xl" style={{ fontFamily: "'Inter', sans-serif" }}>
            At Nexorix Techlab, innovation is not an option — it is our standard.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.bgGradient} rounded-2xl blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-xl">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {card.description}
                  </p>

                  {/* Decorative Element */}
                  <div className={`absolute top-8 right-8 w-32 h-32 bg-gradient-to-br ${card.gradient} rounded-full blur-3xl opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

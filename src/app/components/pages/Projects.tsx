import { motion } from 'motion/react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'QuantumAI Platform',
      category: 'Artificial Intelligence',
      description: 'Next-generation AI-powered analytics platform helping enterprises make data-driven decisions at scale.',
      tags: ['Machine Learning', 'Cloud Computing', 'Analytics'],
      color: 'from-indigo-500 to-violet-600',
    },
    {
      title: 'SecureChain Network',
      category: 'Blockchain',
      description: 'Decentralized security infrastructure providing enterprise-grade protection for digital assets.',
      tags: ['Blockchain', 'Cybersecurity', 'Web3'],
      color: 'from-teal-500 to-emerald-600',
    },
    {
      title: 'CloudSync Enterprise',
      category: 'SaaS Solution',
      description: 'Unified collaboration platform seamlessly connecting teams across continents with real-time sync.',
      tags: ['Cloud', 'Collaboration', 'APIs'],
      color: 'from-violet-500 to-purple-600',
    },
    {
      title: 'MediConnect Hub',
      category: 'Healthcare Tech',
      description: 'Revolutionary telemedicine platform bridging the gap between patients and healthcare providers.',
      tags: ['Healthcare', 'Mobile', 'IoT'],
      color: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'EcoTrack System',
      category: 'Sustainability',
      description: 'Smart environmental monitoring solution helping organizations achieve carbon neutrality goals.',
      tags: ['IoT', 'Data Science', 'Green Tech'],
      color: 'from-green-500 to-teal-600',
    },
    {
      title: 'NexCommerce Platform',
      category: 'E-Commerce',
      description: 'Omnichannel retail solution powered by AI-driven personalization and advanced analytics.',
      tags: ['E-Commerce', 'AI', 'Mobile'],
      color: 'from-orange-500 to-red-600',
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
          <h1 className="text-6xl font-bold text-slate-900 mb-4">Our Projects</h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full" />
          <p className="text-xl text-slate-600 mt-6 max-w-3xl">
            Showcasing innovation through scalable solutions that drive real business results 
            and create lasting impact across industries.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 hover:border-slate-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 h-full flex flex-col">
                {/* Gradient Bar */}
                <div className={`h-1.5 w-16 rounded-full bg-gradient-to-r ${project.color} mb-6`} />

                {/* Category */}
                <div className="text-sm text-slate-500 mb-2 uppercase tracking-wide">
                  {project.category}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Link */}
                <button className="flex items-center gap-2 text-slate-700 hover:text-indigo-600 transition-colors duration-300 group/link">
                  <span className="text-sm font-medium">View Project</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                </button>

                {/* Decorative gradient */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${project.color} rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

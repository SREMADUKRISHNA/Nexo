import { motion } from 'framer-motion';
import { Marquee } from './Marquee';
import '../ui/ProfileCard.css';

export function Team() {
  const teamMembers = [
    {
      name: 'SREMADUKRISHNA V',
      role: 'FOUNDER & CEO',
      handle: 'sremadukrishna',
      status: 'Online',
      avatarUrl: '/MADHU.png',
    },
    {
      name: 'MERSHIYA M',
      role: 'FOUNDER & CEO',
      handle: 'mershiyam',
      status: 'Online',
      avatarUrl: '/MERSHI.png',
    },
    {
      name: 'ROHITH',
      role: 'DESIGN CONSULTANT',
      handle: 'rohithdesign',
      status: 'Away',
      avatarUrl: '/ROHIT.png',
    },
    {
      name: 'PRIYANANTH',
      role: 'Technical Lead & People Operation',
      handle: 'priyananth',
      status: 'Online',
      avatarUrl: '/ananth.png',
    },
    {
      name: 'RAJHAVEL V S',
      role: 'SOFTWARE ENGINEER',
      handle: 'Raju',
      status: 'Online',
      avatarUrl: '/Raju.png',
    },
    {
      name: 'JENFA JEROMI J',
      role: 'SOFTWARE ENGINEER',
      handle: 'JENEFA',
      status: 'Do not disturb',
      avatarUrl: '/Jene.png',
    },
    {
      name: 'DIKSHITH S',
      role: 'SOFTWARE ENGINEER',
      handle: 'dikshiths',
      status: 'Online',
      avatarUrl: '/shitu.png',
    },
    {
      name: 'Pam Beesly',
      role: 'Office Administrator',
      handle: 'pamb',
      status: 'Online',
      avatarUrl: 'https://i.pravatar.cc/300?u=pam',
    },
    {
      name: 'Dwight Schrute',
      role: 'Assistant to the Regional Manager',
      handle: 'dwights',
      status: 'Online',
      avatarUrl: 'https://i.pravatar.cc/300?u=dwight',
    },
    {
      name: 'Jim Halpert',
      role: 'Sales Representative',
      handle: 'jimh',
      status: 'Online',
      avatarUrl: 'https://i.pravatar.cc/300?u=jim',
    },
    {
        name: 'Angela Martin',
        role: 'Head of Accounting',
        handle: 'angelam',
        status: 'Online',
        avatarUrl: 'https://i.pravatar.cc/300?u=angela',
    },
    {
        name: 'Kevin Malone',
        role: 'Accountant',
        handle: 'kevinm',
        status: 'Online',
        avatarUrl: 'https://i.pravatar.cc/300?u=kevin',
    },
  ];

  const topRow = teamMembers.slice(0, 6);
  const bottomRow = teamMembers.slice(6, 12);

  return (
    <div className="min-h-screen py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold text-[var(--galaxy-blue)] heading">OUR TEAM</h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full mx-auto mt-4" />
        </div>
      </motion.div>
      <div className="space-y-8">
        <Marquee items={topRow} direction="left" />
        <Marquee items={bottomRow} direction="right" />
      </div>
    </div>
  );
}
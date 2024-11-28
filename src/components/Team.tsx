import { motion } from 'framer-motion';

const Team = () => {
  const teamMembers = [
    { name: 'John Doe', role: 'Founder & CEO', photo: '/john-doe.jpg', bio: 'Visionary leader with 20 years of industry experience.' },
    { name: 'Jane Smith', role: 'Co-founder & CTO', photo: '/jane-smith.jpg', bio: 'Tech innovator driving our cutting-edge solutions.' },
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Team
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <img src={member.photo} alt={member.name} className="w-48 h-48 rounded-full mb-4 object-cover" />
              <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
              <p className="text-red-600 mb-4">{member.role}</p>
              <p className="text-gray-600 text-center">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;


import { useEffect, useRef } from 'react';

const teamMembers = [
  {
    id: 1,
    name: 'Arif Prasetyo',
    role: 'Chief Everything',
    description:
      'Visionary leader with 15+ years in construction technology, driving innovation and strategic growth at Ekvator.',
    image: '/team1.png',
  },
  {
    id: 2,
    name: 'Laras Widyaningrum',
    role: 'Head of Operations',
    description:
      'Expert in large-scale logistics and fleet management, ensuring smooth operations across Ekvator\'s nationwide network.',
    image: '/team2.png',
  },
  {
    id: 3,
    name: 'Budi Santoso',
    role: 'Lead Equipment Engineer',
    description:
      'Specialist in heavy machinery with deep expertise in excavator and dozer mechanics, maintenance, and R&D.',
    image: '/team3.png',
  },
  {
    id: 4,
    name: 'Citra Amalia',
    role: 'Marketing & Brand Strategist',
    description:
      'Crafts Ekvator\'s voice with a focus on trust, clarity, and industrial excellence, bringing the brand closer to its customers.',
    image: '/team4.png',
  },
  {
    id: 5,
    name: 'Rizky Maulana',
    role: 'Sales Director',
    description:
      'Trusted advisor to construction firms and mining companies, delivering tailored equipment solutions and long-term partnerships.',
    image: '/team5.png',
  },
  {
    id: 6,
    name: 'Dewi Kartika',
    role: 'CS Manager',
    description:
      'Passionate about after-sales support, ensuring every client gets responsive service and optimal product performance.',
    image: '/team6.png',
  },
  {
    id: 7,
    name: 'Andika Siregar',
    role: 'IT Lead Manager',
    description:
      'Oversees digital platforms like Komtrax and autonomous systems, connecting hardware with powerful analytics.',
    image: '/team7.png',
  },
  {
    id: 8,
    name: 'Maya Hapsari',
    role: 'Finance Controller',
    description:
      'Maintains financial efficiency across operations with transparency and control, enabling sustainable growth.',
    image: '/team8.png',
  },
];

const Team = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <p className="section-title animate-on-scroll opacity-0">Our Team</p>
        <h2 className="section-subtitle animate-on-scroll opacity-0">Ekvator project experts</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="animate-on-scroll opacity-0 bg-[#242424] rounded-3xl p-8 card-hover"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="flex items-start gap-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <p className="text-[#e85d04] text-xs uppercase tracking-wider mb-1">
                    {member.role}
                  </p>
                  <h4 className="text-lg font-bold mb-3">{member.name}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

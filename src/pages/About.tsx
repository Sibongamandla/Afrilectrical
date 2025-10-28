import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Image } from '@heroui/react';
import { ScrollReveal, AnimatedCounter } from '../components/ui';
import { Icon } from '../components/ui';
import AccreditationsSection from '../components/AccreditationsSection';
import CallToActionSection from '../components/shared/CallToActionSection';

// Team data with enhanced information
const teamMembers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    expertise: 'Strategic Leadership',
    years: 15,
    location: 'Lagos, Nigeria',
    projects: 120,
    bio: 'Pioneering electrical infrastructure development across Africa with innovative leadership approaches.'
  },
  {
    id: 2,
    name: 'Michael Ndlovu',
    position: 'Chief Engineer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    expertise: 'Power Systems',
    years: 12,
    location: 'Cape Town, South Africa',
    projects: 89,
    bio: 'Expert in complex power distribution systems and renewable energy integration.'
  },
  {
    id: 3,
    name: 'Thabo Mbeki',
    position: 'Project Director',
    image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    expertise: 'Project Management',
    years: 10,
    location: 'Accra, Ghana',
    projects: 67,
    bio: 'Delivering complex infrastructure projects on time and within budget across multiple countries.'
  },
  {
    id: 4,
    name: 'Lerato Moloi',
    position: 'Technical Lead',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    expertise: 'Renewable Energy',
    years: 8,
    location: 'Nairobi, Kenya',
    projects: 45,
    bio: 'Specializing in sustainable energy solutions and smart grid technologies.'
  },
];

const stats = [
  { number: 500, label: 'Projects Completed', suffix: '+', description: 'Across 20 African countries' },
  { number: 15, label: 'Years Experience', suffix: '+', description: 'Building electrical infrastructure' },
  { number: 20, label: 'African Countries', suffix: '+', description: 'Where we operate' },
  { number: 150, label: 'Team Members', suffix: '+', description: 'Skilled professionals' },
];

const values = [
  {
    title: 'Innovation',
    description: 'We embrace cutting-edge technologies and creative solutions to solve complex electrical challenges.',
    icon: 'lightbulb'
  },
  {
    title: 'Reliability',
    description: 'Our commitment to quality ensures every project delivers consistent, dependable results.',
    icon: 'shield'
  },
  {
    title: 'Sustainability',
    description: 'We prioritize environmentally responsible practices in all our electrical infrastructure projects.',
    icon: 'leaf'
  },
  {
    title: 'Community',
    description: 'We build lasting partnerships with local communities to create meaningful, lasting impact.',
    icon: 'users'
  }
];

const About: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  // Auto-scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] min-h-screen bg-white">
      {/* Hero Section with Creative Typography */}
      <section className="pt-32 pb-24 px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                About Afrilectrical
              </motion.div>
              <motion.h1 
                className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.span
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  className="block"
                >
                  Powering Africa's
                </motion.span>
                <motion.span 
                  className="block text-4xl lg:text-5xl text-gray-600 font-light italic"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                >
                  electrical future
                </motion.span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                We are 500+ specialists across 7 countries, working across disciplines to lead projects from implementation to completion, transforming Africa's electrical infrastructure.
              </motion.p>
              <motion.div 
                className="flex items-center gap-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                {[
                  { value: "2005", label: "Founded" },
                  { value: "500+", label: "Projects" },
                  { value: "20+", label: "Countries" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 1.2 + index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
                <motion.div 
                  className="h-12 w-px bg-gray-300"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                />
                <motion.div 
                  className="h-12 w-px bg-gray-300"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                />
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 30, rotate: -5 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="overflow-hidden rounded-lg"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Electrical Infrastructure"
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30, rotate: 5 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  className="overflow-hidden rounded-lg mt-8"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Power Systems"
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                  />
                </motion.div>
              </div>
              <motion.div 
                className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.2,
                  type: "spring",
                  stiffness: 120
                }}
                whileHover={{ scale: 1.1, rotate: 3 }}
              >
                <div className="text-2xl font-bold text-gray-900">
                  <AnimatedCounter end={8} duration={2000} />
                </div>
                <div className="text-sm text-gray-600">Years Excellence</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story - Narrative Layout */}
      <ScrollReveal>
        <section className="py-24 px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                Our Journey
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Engineering Solutions for a Better Tomorrow
              </h2>
            </div>

            <div className="space-y-16">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <div className="text-6xl font-bold text-gray-200">01</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Foundation</h3>
                  <div className="text-sm text-gray-500 mb-4">2016 - 2018</div>
                </div>
                <div className="md:col-span-2">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    AFRILECTRICAL was founded in 2016 in Pietermaritzburg, KwaZulu-Natal, as a 100% black-owned consulting engineering firm. From day one, we focused on delivering professional electrical consulting services with a commitment to quality and community development.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <div className="text-6xl font-bold text-gray-200">02</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Growth</h3>
                  <div className="text-sm text-gray-500 mb-4">2018 - 2022</div>
                </div>
                <div className="md:col-span-2">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We expanded our services to include Civil & Structural Engineering, Mechanical Engineering, Town & Regional Planning, and Security Design & Installation. Our multidisciplinary approach allowed us to serve clients across various sectors throughout KwaZulu-Natal.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <div className="text-6xl font-bold text-gray-200">03</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
                  <div className="text-sm text-gray-500 mb-4">2022 - Present</div>
                </div>
                <div className="md:col-span-2">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Today, as a Level 1 BBBEE contributor, we continue to deliver innovative engineering solutions while maintaining our commitment to safety, quality, integrity, and community engagement. We're proud to contribute to South Africa's infrastructure development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Values Grid */}
      <ScrollReveal>
        <section className="py-24 px-8 lg:px-16 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                Our Values
              </div>
              <h2 className="text-4xl font-bold text-gray-900">
                What Drives Us Forward
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.15,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -15,
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  className="text-center group"
                >
                  <motion.div 
                    className="w-16 h-16 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-6 relative overflow-hidden"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                    initial={{ rotateY: -180 }}
                    animate={{ rotateY: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.15 + 0.3,
                      ease: "easeOut"
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.15 + 0.5,
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      <Icon name={value.icon as any} size={32} color="white" className="text-white" />
                    </motion.div>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-bold text-gray-900 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {value.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.6 }}
                  >
                    {value.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Team Section - Interactive Cards */}
      <ScrollReveal>
        <section className="py-24 px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                Leadership Team
              </div>
              <h2 className="text-4xl font-bold text-gray-900">
                Meet Our Experts
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 50, rotateY: -15 }}
                  animate={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.15,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -10,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="group cursor-pointer perspective-1000"
                  onClick={() => setSelectedMember(selectedMember === member.id ? null : member.id)}
                >
                  <motion.div 
                    className="relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="relative overflow-hidden rounded-lg"
                      whileHover={{ rotateX: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        className="w-full aspect-square object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                      />
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div 
                        className="absolute bottom-4 left-4 text-white"
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <motion.div 
                          className="text-sm font-medium"
                          initial={{ scale: 0.8 }}
                          whileHover={{ scale: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          Click to learn more
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                  >
                    <motion.h3 
                      className="text-xl font-bold text-gray-900 mb-1"
                      whileHover={{ color: "#374151" }}
                      transition={{ duration: 0.2 }}
                    >
                      {member.name}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-600 mb-2"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                    >
                      {member.position}
                    </motion.p>
                    <motion.div 
                      className="text-sm text-gray-500"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
                    >
                      {member.location}
                    </motion.div>
                  </motion.div>

                  {selectedMember === member.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, scale: 0.9 }}
                      animate={{ opacity: 1, height: 'auto', scale: 1 }}
                      exit={{ opacity: 0, height: 0, scale: 0.9 }}
                      transition={{ 
                        duration: 0.4,
                        ease: "easeOut"
                      }}
                      className="mt-4 p-4 bg-gray-50 rounded-lg overflow-hidden"
                    >
                      <motion.p 
                        className="text-gray-600 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      >
                        {member.bio}
                      </motion.p>
                      <motion.div 
                        className="grid grid-cols-2 gap-4 text-sm"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="font-medium text-gray-900">{member.years} years</div>
                          <div className="text-gray-500">Experience</div>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="font-medium text-gray-900">{member.projects}</div>
                          <div className="text-gray-500">Projects</div>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Statistics - Creative Display */}
      <ScrollReveal>
        <section className="py-24 px-8 lg:px-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">Our Impact by Numbers</h2>
              <p className="text-xl text-gray-300">
                Delivering professional engineering services across South Africa
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 50, scale: 0.5 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  className="text-center group relative"
                >
                  <motion.div 
                    className="relative"
                    initial={{ rotateY: -90 }}
                    animate={{ rotateY: 0 }}
                    transition={{ 
                      duration: 1, 
                      delay: index * 0.2 + 0.3,
                      ease: "easeOut"
                    }}
                  >
                    <motion.div 
                      className="text-5xl font-bold mb-2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: index * 0.2 + 0.5,
                        type: "spring",
                        stiffness: 100
                      }}
                    >
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}
                      >
                        <AnimatedCounter end={stat.number} duration={2000} />
                        {stat.suffix}
                      </motion.span>
                    </motion.div>
                    <motion.div 
                      className="text-xl font-medium mb-2"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                    >
                      {stat.label}
                    </motion.div>
                    <motion.div 
                      className="text-gray-400 text-sm"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
                    >
                      {stat.description}
                    </motion.div>
                    
                    {/* Enhanced decorative elements */}
                    <motion.div 
                      className="w-12 h-px bg-white mx-auto mt-4 group-hover:w-24 transition-all duration-300"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.2 + 1 }}
                    />
                    
                    {/* Animated background circle */}
                    <motion.div
                      className="absolute inset-0 -z-10 rounded-full bg-white/5"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1.2, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Floating particles effect */}
                    <motion.div
                      className="absolute top-0 right-0 w-2 h-2 bg-white/30 rounded-full"
                      animate={{ 
                        y: [-10, -20, -10],
                        opacity: [0.3, 0.7, 0.3]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    />
                    <motion.div
                      className="absolute bottom-4 left-4 w-1 h-1 bg-white/40 rounded-full"
                      animate={{ 
                        y: [10, 0, 10],
                        x: [0, 5, 0],
                        opacity: [0.2, 0.6, 0.2]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity,
                        delay: index * 0.7
                      }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Accreditations Section */}
      <ScrollReveal>
        <AccreditationsSection />
      </ScrollReveal>

      <CallToActionSection
        title="Ready to Work Together?"
        description="Join organizations across South Africa who trust us with their engineering and infrastructure needs."
        buttonText="Contact Our Team"
      />
    </div>
  );
};

export default About;
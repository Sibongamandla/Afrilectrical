import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Image } from '@heroui/react';
import { ScrollReveal, AnimatedCounter } from '../components/ui';
import { Icon } from '../components/ui';
import AccreditationsSection from '../components/AccreditationsSection';
import CallToActionSection from '../components/shared/CallToActionSection';

// Business expertise data based on company profile
const businessExpertise = [
  {
    id: 1,
    title: 'Project Management',
    description: 'We implement efficient project management methodologies to ensure timely completion, budget control, and effective resource allocation.',
    icon: 'settings'
  },
  {
    id: 2,
    title: 'Quality & Excellence',
    description: 'We strive for excellence in every project undertaken by delivering high-quality results that exceed client expectations.',
    icon: 'award'
  },
  {
    id: 3,
    title: 'Safety & Sustainability',
    description: 'We promote a culture of safety and sustainability, ensuring the well-being of employees, contractors, and stakeholders.',
    icon: 'shield'
  },
  {
    id: 4,
    title: 'Innovation',
    description: 'We embrace innovation and constantly seek ways to improve processes, techniques, and technologies in our engineering solutions.',
    icon: 'lightbulb'
  },
  {
    id: 5,
    title: 'Client Satisfaction',
    description: 'We prioritise client satisfaction by understanding their needs, requirements, and expectations to deliver tailored solutions.',
    icon: 'users'
  },
  {
    id: 6,
    title: 'Expertise & Knowledge',
    description: 'We develop and maintain a team of skilled professionals with expertise in consulting, electrical, and construction engineering.',
    icon: 'book'
  }
];

const stats = [
  { number: 8, label: 'Years Experience', suffix: '+', description: 'Delivering engineering excellence' },
  { number: 100, label: 'Black Owned', suffix: '%', description: 'Level 1 BBBEE contributor' },
  { number: 3, label: 'Office Locations', suffix: '', description: 'PMB, Johannesburg & Ulundi' },
  { number: 5, label: 'Service Areas', suffix: '', description: 'Multidisciplinary expertise' },
];

const values = [
  {
    title: 'Quality',
    description: 'We deliver high-quality engineering solutions that meet and exceed industry standards.',
    icon: 'award'
  },
  {
    title: 'Safety',
    description: 'We prioritize safety in all our operations, protecting employees, contractors, and communities.',
    icon: 'shield'
  },
  {
    title: 'Integrity',
    description: 'We conduct business with honesty, transparency, and ethical practices in all engagements.',
    icon: 'check'
  },
  {
    title: 'Innovation',
    description: 'We embrace cutting-edge technologies and creative solutions to solve complex engineering challenges.',
    icon: 'lightbulb'
  },
  {
    title: 'Collaboration',
    description: 'We work together with clients and partners to achieve shared goals and deliver exceptional results.',
    icon: 'users'
  },
  {
    title: 'Sustainability',
    description: 'We prioritize environmentally responsible practices in all our infrastructure projects.',
    icon: 'leaf'
  },
  {
    title: 'Client Focus',
    description: 'We put our clients first, understanding their needs and delivering tailored solutions.',
    icon: 'heart'
  },
  {
    title: 'Professionalism',
    description: 'We maintain the highest standards of professional conduct and service excellence.',
    icon: 'briefcase'
  }
];

const About: React.FC = () => {
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
                    src="/media/images/stakeholder_meeting_substation_site.jpg"
                    alt="AFRILECTRICAL Stakeholder Meeting"
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
                    src="/media/images/engineers_reviewing_plans_fieldwork.jpg"
                    alt="Engineers Reviewing Project Plans"
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

      {/* Video Showcase Section */}
      <ScrollReveal>
        <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
          {/* Video Background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/media/images/switchgear_testing_team_substation.jpg"
          >
            <source src="/media/images/substation_switchgear_inspection.mp4" type="video/mp4" />
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent" />

          {/* Content */}
          <div className="relative z-10 flex items-center h-full px-8 lg:px-16">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-sm font-medium text-white/80 uppercase tracking-wider mb-4">
                  Our Work in Action
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Powering Infrastructure Excellence
                </h2>
                <p className="text-lg text-white/90 leading-relaxed mb-8">
                  From substation commissioning to switchgear testing, our team delivers quality electrical engineering solutions across KwaZulu-Natal. Watch our skilled professionals at work.
                </p>
                <a
                  href="/projects"
                  className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
                >
                  View Our Projects
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </motion.div>
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

      {/* Business Expertise Section */}
      <ScrollReveal>
        <section className="py-24 px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                Why Choose Us
              </div>
              <h2 className="text-4xl font-bold text-gray-900">
                Our Business Expertise
              </h2>
              <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
                With over 8 years of experience, our team of skilled professionals delivers exceptional engineering solutions across KwaZulu-Natal and beyond.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {businessExpertise.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg hover:border-transparent transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gray-900 rounded-lg flex items-center justify-center mb-6">
                    <Icon name={item.icon as any} size={28} color="white" className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
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
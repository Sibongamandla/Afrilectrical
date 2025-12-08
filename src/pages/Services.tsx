import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Image } from '@heroui/react';
import { ScrollReveal } from '../components/ui';
import { Icon } from '../components/ui';
import CallToActionSection from '../components/shared/CallToActionSection';

// Services data based on company profile
const services = [
  {
    id: 1,
    title: 'Electrical Consulting',
    description: 'Professional electrical engineering consulting services including power system design, electrical infrastructure planning, substation design, and electrical network analysis for residential, commercial, and industrial projects.',
    icon: 'lightning',
    features: ['Power System Design', 'Substation Engineering', 'Network Analysis', 'Load Studies'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80'
  },
  {
    id: 2,
    title: 'Civil & Structural Engineering',
    description: 'Comprehensive civil and structural engineering solutions for infrastructure development, including site development, structural analysis, foundation design, and construction supervision.',
    icon: 'building',
    features: ['Structural Analysis', 'Foundation Design', 'Site Development', 'Construction Supervision'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80'
  },
  {
    id: 3,
    title: 'Mechanical Engineering',
    description: 'Expert mechanical engineering services covering HVAC systems, mechanical installations, equipment specification, and mechanical system optimization for various building types.',
    icon: 'gear',
    features: ['HVAC Systems', 'Mechanical Installations', 'Equipment Specification', 'System Optimization'],
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80'
  },
  {
    id: 4,
    title: 'Town & Regional Planning',
    description: 'Strategic town and regional planning services including land use planning, urban development, environmental impact assessments, and municipal infrastructure planning.',
    icon: 'globe',
    features: ['Land Use Planning', 'Urban Development', 'Environmental Assessment', 'Infrastructure Planning'],
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80'
  },
  {
    id: 5,
    title: 'Security Design & Installation',
    description: 'Integrated security system design and installation services including access control, CCTV surveillance, perimeter security, and security system integration for enhanced facility protection.',
    icon: 'shield',
    features: ['Access Control', 'CCTV Systems', 'Perimeter Security', 'System Integration'],
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80'
  }
];

const Services: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] min-h-screen bg-white">
      {/* Hero Section - Matching Projects/About style */}
      <section className="pt-32 pb-20 px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              What We Do
            </motion.div>
            <motion.h1
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="block"
              >
                Our Services
              </motion.span>
              <motion.span
                className="block text-4xl lg:text-5xl text-gray-600 font-light"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                engineering excellence
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              AFRILECTRICAL provides multidisciplinary engineering consulting services
              across KwaZulu-Natal, delivering professional solutions that meet the
              highest industry standards.
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {[
                { value: "5", label: "Service Areas" },
                { value: "8+", label: "Years Experience" },
                { value: "100%", label: "Black Owned" },
                { value: "Level 1", label: "BBBEE" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center group"
                  initial={{ scale: 0, rotateY: -90 }}
                  animate={{ scale: 1, rotateY: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 1.1 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  <motion.div
                    className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <ScrollReveal>
        <section className="py-24 px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-16">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Image */}
                  <motion.div
                    className={`relative overflow-hidden rounded-2xl ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 lg:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg">
                        <Icon name={service.icon as any} size={28} color="#111827" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                        Service {String(service.id).padStart(2, '0')}
                      </div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                        {service.title}
                      </h2>
                      <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        {service.description}
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-gray-900 rounded-full flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Why Choose Us */}
      <ScrollReveal>
        <section className="py-24 px-8 lg:px-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Why Choose Us
              </motion.div>
              <motion.h2
                className="text-4xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Why Choose AFRILECTRICAL
              </motion.h2>
              <motion.p
                className="text-xl text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                As a Level 1 BBBEE contributor and 100% black-owned company, we are
                committed to delivering excellence while contributing to community development.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: 'check', title: 'Quality Assured', description: 'High-quality engineering solutions meeting industry standards' },
                { icon: 'safety', title: 'Safety First', description: 'Prioritizing safety in all operations and project delivery' },
                { icon: 'people', title: 'Expert Team', description: 'Skilled professionals with multidisciplinary expertise' },
                { icon: 'globe', title: 'Local Focus', description: 'Serving KwaZulu-Natal with offices in PMB, Joburg & Ulundi' }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                    <Icon name={item.icon as any} size={32} color="white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Contact CTA */}
      <CallToActionSection
        title="Ready to Start Your Project?"
        description="Contact our team to discuss your engineering requirements and how we can help."
        buttonText="Get in Touch"
      />
    </div>
  );
};

export default Services;

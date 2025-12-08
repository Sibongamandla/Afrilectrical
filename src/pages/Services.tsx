import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
    features: ['Power System Design', 'Substation Engineering', 'Network Analysis', 'Load Studies']
  },
  {
    id: 2,
    title: 'Civil & Structural Engineering',
    description: 'Comprehensive civil and structural engineering solutions for infrastructure development, including site development, structural analysis, foundation design, and construction supervision.',
    icon: 'building',
    features: ['Structural Analysis', 'Foundation Design', 'Site Development', 'Construction Supervision']
  },
  {
    id: 3,
    title: 'Mechanical Engineering',
    description: 'Expert mechanical engineering services covering HVAC systems, mechanical installations, equipment specification, and mechanical system optimization for various building types.',
    icon: 'gear',
    features: ['HVAC Systems', 'Mechanical Installations', 'Equipment Specification', 'System Optimization']
  },
  {
    id: 4,
    title: 'Town & Regional Planning',
    description: 'Strategic town and regional planning services including land use planning, urban development, environmental impact assessments, and municipal infrastructure planning.',
    icon: 'globe',
    features: ['Land Use Planning', 'Urban Development', 'Environmental Assessment', 'Infrastructure Planning']
  },
  {
    id: 5,
    title: 'Security Design & Installation',
    description: 'Integrated security system design and installation services including access control, CCTV surveillance, perimeter security, and security system integration for enhanced facility protection.',
    icon: 'shield',
    features: ['Access Control', 'CCTV Systems', 'Perimeter Security', 'System Integration']
  }
];

const Services: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-8 lg:px-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
              What We Do
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AFRILECTRICAL provides multidisciplinary engineering consulting services
              across KwaZulu-Natal, delivering professional solutions that meet the
              highest industry standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <ScrollReveal>
        <section className="py-24 px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 rounded-2xl p-8 lg:p-12 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="grid lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 bg-gray-900 rounded-xl flex items-center justify-center">
                          <Icon name={service.icon as any} size={28} color="white" />
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                          {service.title}
                        </h2>
                      </div>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                        Key Services
                      </h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-gray-900 rounded-full" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Why Choose Us */}
      <ScrollReveal>
        <section className="py-24 px-8 lg:px-16 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose AFRILECTRICAL
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                As a Level 1 BBBEE contributor and 100% black-owned company, we are
                committed to delivering excellence while contributing to community development.
              </p>
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
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Icon name={item.icon as any} size={32} color="white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
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

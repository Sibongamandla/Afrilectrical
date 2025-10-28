import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Image, Chip } from '@heroui/react';
import { ScrollReveal } from '../components/ui';
import { Icon } from '../components/ui';
import CallToActionSection from '../components/shared/CallToActionSection';

// Enhanced building services data
const services = [
  {
    id: 1,
    icon: 'building',
    title: 'Commercial Buildings',
    description: 'Complete electrical design and installation for office buildings, retail centers, and mixed-use developments.',
    features: ['Smart lighting systems', 'Energy management', 'Fire safety integration', 'Access control'],
    projects: '150+'
  },
  {
    id: 2,
    icon: 'heart',
    title: 'Healthcare Facilities',
    description: 'Specialized electrical systems for hospitals, clinics, and medical centers with focus on reliability and safety.',
    features: ['Emergency power systems', 'Medical equipment support', 'Isolation requirements', 'Code compliance'],
    projects: '45+'
  },
  {
    id: 3,
    icon: 'book',
    title: 'Educational Institutions',
    description: 'Smart electrical solutions for schools, universities, and research facilities.',
    features: ['Smart classrooms', 'Campus-wide networks', 'Research lab power', 'Safety systems'],
    projects: '80+'
  },
  {
    id: 4,
    icon: 'map-pin',
    title: 'Hospitality',
    description: 'Energy-efficient electrical systems for hotels, resorts, and entertainment venues.',
    features: ['Guest room automation', 'Entertainment systems', 'Energy optimization', 'Mood lighting'],
    projects: '60+'
  },
  {
    id: 5,
    icon: 'cpu',
    title: 'Industrial Buildings',
    description: 'Robust electrical infrastructure for manufacturing plants, warehouses, and distribution centers.',
    features: ['Heavy machinery power', 'Automation systems', 'Safety compliance', 'Efficiency monitoring'],
    projects: '120+'
  },
  {
    id: 6,
    icon: 'home',
    title: 'Residential Complexes',
    description: 'Electrical design and installation for apartment buildings, condominiums, and residential developments.',
    features: ['Smart home integration', 'EV charging stations', 'Solar integration', 'Security systems'],
    projects: '200+'
  },
];

// Featured projects data
const projects = [
  {
    id: 1,
    title: 'Sandton City Tower',
    location: 'Johannesburg, South Africa',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Commercial',
    year: '2023',
    capacity: '50 MW',
    description: 'State-of-the-art commercial tower with integrated smart building systems'
  },
  {
    id: 2,
    title: 'Cape Town International Convention Centre',
    location: 'Cape Town, South Africa',
    image: 'https://images.unsplash.com/photo-1531973819741-e27a5ae2cc7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Convention',
    year: '2023',
    capacity: '35 MW',
    description: 'Large-scale convention facility with advanced audiovisual and power systems'
  },
  {
    id: 3,
    title: 'Durban Umhlanga Arch',
    location: 'Durban, South Africa',
    image: 'https://images.unsplash.com/photo-1577417006520-4bc9e3bca40e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Mixed-use',
    year: '2022',
    capacity: '40 MW',
    description: 'Iconic mixed-use development with sustainable electrical infrastructure'
  },
  {
    id: 4,
    title: 'Menlyn Maine Green Building',
    location: 'Pretoria, South Africa',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Green Building',
    year: '2023',
    capacity: '25 MW',
    description: 'LEED certified building with renewable energy integration'
  },
];

const Buildings: React.FC = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  // Auto-scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Building Electrical Solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <motion.div 
          className="relative z-10 text-center text-white max-w-4xl mx-auto px-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Chip className="mb-6 bg-white/20 text-white border-white/30">
              Building Solutions
            </Chip>
          </motion.div>
          <motion.h1 
            className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Electrical Excellence for
            <span className="block text-4xl lg:text-6xl font-light opacity-90">
              Modern Buildings
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl lg:text-2xl leading-relaxed opacity-90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Comprehensive electrical engineering services for commercial, industrial, and residential buildings across Africa
          </motion.p>
        </motion.div>
      </section>

      {/* Services Section */}
      <ScrollReveal>
        <section className="py-24 px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Building Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide end-to-end electrical engineering solutions for all types of buildings, from design and installation to maintenance and upgrades
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
                >
                  <Card className="h-full border border-gray-200 hover:shadow-lg transition-all duration-300">
                    <CardBody className="p-8">
                      <div className="w-16 h-16 bg-gray-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon name={service.icon as any} size={32} color="white" className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Projects completed</span>
                        <span className="font-bold text-gray-900">{service.projects}</span>
                      </div>

                      {selectedService === service.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.3 }}
                          className="mt-6 pt-6 border-t border-gray-200"
                        >
                          <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                          <div className="space-y-2">
                            {service.features.map((feature, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <Icon name="check" size={16} className="text-green-600" />
                                <span className="text-sm text-gray-600">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Projects Section */}
      <ScrollReveal>
        <section className="py-24 px-8 lg:px-16 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Featured Building Projects
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore some of our most innovative and impactful building electrical projects across Africa
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
                    <CardBody className="p-0">
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <Chip className="bg-white/90 text-gray-900">
                            {project.category}
                          </Chip>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-sm font-medium">Click to learn more</p>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {project.description}
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-500">Location</span>
                            <p className="font-medium text-gray-900">{project.location}</p>
                          </div>
                          <div>
                            <span className="text-gray-500">Capacity</span>
                            <p className="font-medium text-gray-900">{project.capacity}</p>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <CallToActionSection
        title="Ready to Start Your Building Project?"
        description="Our team of experienced electrical engineers is ready to help you design and implement the perfect electrical solution for your building project."
        buttonText="Contact Us Today"
      />
    </div>
  );
};

export default Buildings;
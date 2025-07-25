import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Image, Button, Chip } from '@heroui/react';
import { ScrollReveal } from '../components/ui';
import { Icon } from '../components/ui';

// Enhanced transportation services data
const services = [
  {
    id: 1,
    icon: 'train',
    title: 'Rail Electrification',
    description: 'Complete electrical systems for rail networks including traction power, signaling, and station infrastructure.',
    features: ['Traction power systems', 'Overhead catenary', 'Signaling systems', 'Station electrification'],
    projects: '65+',
    coverage: '2,500+ km'
  },
  {
    id: 2,
    icon: 'bus',
    title: 'Electric Bus Systems',
    description: 'Comprehensive solutions for electric bus fleets with charging infrastructure and power management.',
    features: ['Depot charging', 'Pantograph systems', 'Route optimization', 'Fleet management'],
    projects: '40+',
    coverage: '2,000+ buses'
  },
  {
    id: 3,
    icon: 'car',
    title: 'EV Charging Networks',
    description: 'Public and private electric vehicle charging infrastructure for sustainable mobility transition.',
    features: ['Fast charging', 'AC charging', 'Payment systems', 'Grid integration'],
    projects: '150+',
    coverage: '5,000+ stations'
  },
  {
    id: 4,
    icon: 'traffic-cone',
    title: 'Traffic Management',
    description: 'Intelligent traffic systems with electrical infrastructure for signals, sensors, and control networks.',
    features: ['Smart signals', 'Traffic sensors', 'Control centers', 'Communication networks'],
    projects: '200+',
    coverage: '50+ cities'
  },
  {
    id: 5,
    icon: 'building',
    title: 'Transport Hubs',
    description: 'Electrical infrastructure for multimodal transport terminals, stations, and interchanges.',
    features: ['Terminal systems', 'Passenger information', 'Security systems', 'Energy management'],
    projects: '80+',
    coverage: '100+ hubs'
  },
  {
    id: 6,
    icon: 'zap',
    title: 'Energy Management',
    description: 'Smart energy systems for transportation infrastructure optimizing consumption and renewable integration.',
    features: ['Load management', 'Renewable integration', 'Energy storage', 'Smart grids'],
    projects: '95+',
    coverage: 'Network-wide'
  },
];

// Featured transportation projects
const projects = [
  {
    id: 1,
    title: 'Light Rail Transit System',
    location: 'Addis Ababa, Ethiopia',
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Rail Transit',
    year: '2023',
    capacity: '60,000 passengers/hour',
    description: 'Complete electrical systems for 34km light rail network with 39 stations and modern traction power',
    impact: ['300K daily passengers', '70% emission reduction', '39 stations electrified', '24/7 operations']
  },
  {
    id: 2,
    title: 'Electric Bus Rapid Transit',
    location: 'Lagos, Nigeria',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Bus Transit',
    year: '2023',
    capacity: '500 buses',
    description: 'Africa\'s largest electric bus fleet with comprehensive charging infrastructure and depot systems',
    impact: ['500 electric buses', '2M+ passengers/month', '80% emission reduction', '1,500 jobs created']
  },
  {
    id: 3,
    title: 'National EV Charging Network',
    location: 'Rwanda',
    image: 'https://images.unsplash.com/photo-1562426509-5044a121aa49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'EV Infrastructure',
    year: '2022',
    capacity: '1,000 stations',
    description: 'Comprehensive nationwide electric vehicle charging network supporting sustainable transport policy',
    impact: ['1,000 charging stations', '100% renewable powered', '50% EV adoption target', 'Zero emission zones']
  },
  {
    id: 4,
    title: 'Smart Traffic Management System',
    location: 'Cape Town, South Africa',
    image: 'https://images.unsplash.com/photo-1573070798029-5cea6c3c0f3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Traffic Systems',
    year: '2023',
    capacity: '2,500 intersections',
    description: 'AI-powered traffic management system with adaptive signals and real-time optimization',
    impact: ['40% travel time reduction', '2,500 smart intersections', '25% emission reduction', 'Real-time monitoring']
  },
];

const TransportationAndMobility: React.FC = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

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
            src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Transportation and Mobility Solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
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
            <Chip className="mb-6 bg-orange-500/20 text-white border-orange-400/30">
              Transportation & Mobility
            </Chip>
          </motion.div>
          <motion.h1 
            className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Powering Africa's
            <span className="block text-4xl lg:text-6xl font-light opacity-90">
              Mobility Revolution
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl lg:text-2xl leading-relaxed opacity-90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Sustainable electrical infrastructure for rail, bus, and electric vehicle transportation systems
          </motion.p>
          
          <motion.div 
            className="mt-8 grid grid-cols-3 gap-8 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold">630+</div>
              <div className="text-sm opacity-80">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">2.5K km</div>
              <div className="text-sm opacity-80">Rail Lines</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">5K+</div>
              <div className="text-sm opacity-80">EV Stations</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <ScrollReveal>
        <section className="py-24 px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Transportation Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Electrifying Africa's transportation with rail, bus, and EV infrastructure solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50, rotateY: -15 }}
                  animate={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
                >
                  <Card className="h-full border border-gray-200 hover:shadow-xl transition-all duration-300">
                    <CardBody className="p-8">
                      <motion.div 
                        className="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center mb-6"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon name={service.icon as any} size={32} color="white" className="text-white" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                        <div>
                          <span className="text-gray-500">Projects</span>
                          <p className="font-bold text-gray-900">{service.projects}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">Coverage</span>
                          <p className="font-bold text-gray-900">{service.coverage}</p>
                        </div>
                      </div>

                      {selectedService === service.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.4 }}
                          className="pt-6 border-t border-gray-200"
                        >
                          <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                          <div className="space-y-2">
                            {service.features.map((feature, i) => (
                              <motion.div 
                                key={i} 
                                className="flex items-center gap-2"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: i * 0.1 }}
                              >
                                <Icon name="check" size={16} className="text-orange-600" />
                                <span className="text-sm text-gray-600">{feature}</span>
                              </motion.div>
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
                Featured Transportation Projects
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transforming African mobility with innovative transportation electrification projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40, rotateX: -10 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                >
                  <Card className="overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-500">
                    <CardBody className="p-0">
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4">
                          <Chip className="bg-orange-500 text-white">
                            {project.category}
                          </Chip>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Chip className="bg-white/90 text-gray-900">
                            {project.capacity}
                          </Chip>
                        </div>
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                        <motion.div 
                          className="absolute bottom-4 left-4 text-white"
                          initial={{ opacity: 0, y: 20 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-sm font-medium">Click to explore mobility impact</p>
                        </motion.div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {project.description}
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                          <div>
                            <span className="text-gray-500">Location</span>
                            <p className="font-medium text-gray-900">{project.location}</p>
                          </div>
                          <div>
                            <span className="text-gray-500">Year</span>
                            <p className="font-medium text-gray-900">{project.year}</p>
                          </div>
                        </div>

                        {selectedProject === project.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            transition={{ duration: 0.4 }}
                            className="pt-6 border-t border-gray-200"
                          >
                            <h4 className="font-semibold text-gray-900 mb-3">Transportation Impact:</h4>
                            <div className="space-y-2">
                              {project.impact.map((impact, i) => (
                                <motion.div 
                                  key={i} 
                                  className="flex items-center gap-2"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: i * 0.1 }}
                                >
                                  <Icon name="train" size={16} className="text-orange-600" />
                                  <span className="text-sm text-gray-600">{impact}</span>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <section className="py-24 px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Electrify Transportation?
            </h3>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Our transportation specialists are ready to help you build sustainable mobility infrastructure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="bordered"
                size="lg"
                className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-medium px-8 transition-all duration-300"
              >
                Transportation Planning
              </Button>
              <Button 
                variant="bordered"
                size="lg"
                className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-medium px-8 transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TransportationAndMobility;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Image, Button, Chip } from '@heroui/react';
import { ScrollReveal } from '../components/ui';
import { Icon } from '../components/ui';

// Enhanced sustainability services data
const services = [
  {
    id: 1,
    icon: 'leaf',
    title: 'Renewable Integration',
    description: 'Seamless integration of renewable energy sources into existing electrical infrastructure.',
    features: ['Solar integration', 'Wind power systems', 'Battery storage', 'Grid synchronization'],
    projects: '180+',
    impact: '45% CO2 reduction'
  },
  {
    id: 2,
    icon: 'zap',
    title: 'Energy Efficiency',
    description: 'Advanced energy optimization solutions to minimize waste and maximize performance.',
    features: ['Smart controls', 'LED lighting', 'Power factor correction', 'Load optimization'],
    projects: '250+',
    impact: '35% energy savings'
  },
  {
    id: 3,
    icon: 'recycle',
    title: 'Circular Economy',
    description: 'Waste reduction and material recovery programs for sustainable resource management.',
    features: ['Material recycling', 'Component refurbishment', 'Waste-to-energy', 'Lifecycle optimization'],
    projects: '120+',
    impact: '80% waste diverted'
  },
  {
    id: 4,
    icon: 'globe',
    title: 'Carbon Management',
    description: 'Comprehensive carbon footprint assessment and reduction strategies.',
    features: ['Carbon audits', 'Offset programs', 'Emissions tracking', 'Net-zero planning'],
    projects: '95+',
    impact: '50% emissions cut'
  },
  {
    id: 5,
    icon: 'droplet',
    title: 'Resource Conservation',
    description: 'Water and resource management systems for sustainable operations.',
    features: ['Water harvesting', 'Smart irrigation', 'Resource monitoring', 'Conservation automation'],
    projects: '85+',
    impact: '40% water savings'
  },
  {
    id: 6,
    icon: 'award',
    title: 'Green Certification',
    description: 'Support for achieving environmental certifications and compliance standards.',
    features: ['LEED support', 'Green Star', 'BREEAM compliance', 'ISO 14001'],
    projects: '65+',
    impact: '100% compliance'
  },
];

// Featured sustainability projects
const projects = [
  {
    id: 1,
    title: 'Solar Microgrid for Rural Communities',
    location: 'Northern Ghana',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Community Solar',
    year: '2023',
    capacity: '5 MW',
    description: 'Off-grid solar microgrid providing clean energy access to 15,000 rural residents',
    impact: ['15,000 people connected', '2,800 tons CO2 saved annually', '300 local jobs created', '24/7 clean power access']
  },
  {
    id: 2,
    title: 'Green Building Certification Program',
    location: 'Nairobi, Kenya',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Green Buildings',
    year: '2023',
    capacity: '20 buildings',
    description: 'Comprehensive sustainability upgrade for commercial building portfolio',
    impact: ['20 buildings certified', '60% energy reduction', 'LEED Gold achieved', '$2M annual savings']
  },
  {
    id: 3,
    title: 'Waste-to-Energy Recovery System',
    location: 'Lagos, Nigeria',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Waste-to-Energy',
    year: '2022',
    capacity: '25 MW',
    description: 'Converting municipal waste into clean electricity for urban grid supply',
    impact: ['500 tons waste/day processed', '25 MW clean energy', '1.2M tons CO2 avoided', '150 permanent jobs']
  },
  {
    id: 4,
    title: 'Smart Water Management System',
    location: 'Cape Town, South Africa',
    image: 'https://images.unsplash.com/photo-1544454045-4d70b39b899d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Water Conservation',
    year: '2023',
    capacity: 'City-wide',
    description: 'IoT-enabled water conservation system with real-time monitoring and optimization',
    impact: ['40% water savings', '500K residents served', 'Real-time monitoring', 'Drought resilience improved']
  },
];

const SustainabilityAndEnvironment: React.FC = () => {
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
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Sustainability and Environment Solutions"
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
            <Chip className="mb-6 bg-green-500/20 text-white border-green-400/30">
              Sustainability & Environment
            </Chip>
          </motion.div>
          <motion.h1 
            className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Building Africa's
            <span className="block text-4xl lg:text-6xl font-light opacity-90">
              Sustainable Future
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl lg:text-2xl leading-relaxed opacity-90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Environmental stewardship and sustainable electrical solutions for a greener tomorrow
          </motion.p>
          
          <motion.div 
            className="mt-8 grid grid-cols-3 gap-8 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold">775+</div>
              <div className="text-sm opacity-80">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">45%</div>
              <div className="text-sm opacity-80">CO2 Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">100K+</div>
              <div className="text-sm opacity-80">Trees Planted</div>
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
                Our Sustainability Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive environmental solutions for renewable energy, efficiency, and conservation
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
                        className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6"
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
                          <span className="text-gray-500">Impact</span>
                          <p className="font-bold text-gray-900">{service.impact}</p>
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
                                <Icon name="check" size={16} className="text-green-600" />
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
                Featured Sustainability Projects
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real-world environmental impact through innovative sustainable electrical solutions
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
                          <Chip className="bg-green-500 text-white">
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
                          <p className="text-sm font-medium">Click to explore environmental impact</p>
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
                            <h4 className="font-semibold text-gray-900 mb-3">Environmental Impact:</h4>
                            <div className="space-y-2">
                              {project.impact.map((impact, i) => (
                                <motion.div 
                                  key={i} 
                                  className="flex items-center gap-2"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: i * 0.1 }}
                                >
                                  <Icon name="leaf" size={16} className="text-green-600" />
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
              Ready to Go Green?
            </h3>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Partner with us to create sustainable electrical solutions that benefit your business and the planet
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="bordered"
                size="lg"
                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-medium px-8 transition-all duration-300"
              >
                Sustainability Assessment
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

export default SustainabilityAndEnvironment;
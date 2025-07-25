import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Image, Button, Chip } from '@heroui/react';
import { ScrollReveal } from '../components/ui';
import { Icon } from '../components/ui';

// Enhanced industrial services data
const services = [
  {
    id: 1,
    icon: 'cpu',
    title: 'Industrial Automation',
    description: 'Advanced automation solutions to optimize industrial processes and increase operational efficiency.',
    features: ['PLC programming', 'SCADA systems', 'HMI development', 'Process optimization'],
    projects: '300+',
    efficiency: '45% improvement'
  },
  {
    id: 2,
    icon: 'zap',
    title: 'Power Distribution',
    description: 'Reliable power distribution networks designed for heavy industrial loads and critical operations.',
    features: ['MV/LV distribution', 'Switchgear design', 'Power factor correction', 'Load management'],
    projects: '250+',
    efficiency: '30% energy savings'
  },
  {
    id: 3,
    icon: 'settings',
    title: 'Motor Control Systems',
    description: 'Sophisticated motor control solutions for industrial machinery and process equipment.',
    features: ['VFD installation', 'Motor protection', 'Soft starters', 'Energy optimization'],
    projects: '400+',
    efficiency: '25% cost reduction'
  },
  {
    id: 4,
    icon: 'shield',
    title: 'Safety Systems',
    description: 'Comprehensive electrical safety systems ensuring worker protection and regulatory compliance.',
    features: ['Emergency stops', 'Safety interlocks', 'Arc flash protection', 'Hazardous area wiring'],
    projects: '180+',
    efficiency: '99% safety record'
  },
  {
    id: 5,
    icon: 'trending-up',
    title: 'Energy Management',
    description: 'Smart energy management systems to monitor, control, and optimize industrial power consumption.',
    features: ['Energy monitoring', 'Demand response', 'Peak shaving', 'Efficiency analytics'],
    projects: '150+',
    efficiency: '35% cost savings'
  },
  {
    id: 6,
    icon: 'tool',
    title: 'Maintenance Services',
    description: 'Comprehensive maintenance and support services to ensure maximum uptime and reliability.',
    features: ['Preventive maintenance', 'Emergency response', 'System upgrades', 'Performance optimization'],
    projects: '500+',
    efficiency: '95% uptime'
  },
];

// Featured industrial projects
const projects = [
  {
    id: 1,
    title: 'Mining Complex Automation',
    location: 'Johannesburg, South Africa',
    image: 'https://images.unsplash.com/photo-1579202673506-ca3ce28943ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Mining Automation',
    year: '2023',
    capacity: '500 MW',
    description: 'Complete automation overhaul for major gold mining operation with integrated control systems',
    impact: ['40% productivity increase', '500 MW power capacity', '99.5% system reliability', '2,000 workers supported']
  },
  {
    id: 2,
    title: 'Manufacturing Plant Modernization',
    location: 'Nairobi, Kenya',
    image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Manufacturing',
    year: '2023',
    capacity: '200 MW',
    description: 'Smart factory transformation with IoT integration and advanced process control systems',
    impact: ['50% efficiency gain', '35% energy reduction', '200 MW installed capacity', 'Industry 4.0 ready']
  },
  {
    id: 3,
    title: 'Oil Refinery Electrical Upgrade',
    location: 'Lagos, Nigeria',
    image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Oil & Gas',
    year: '2022',
    capacity: '800 MW',
    description: 'Hazardous area electrical systems upgrade with international safety compliance',
    impact: ['100% safety compliance', '800 MW total capacity', 'Zero incidents record', 'IECEx certification']
  },
  {
    id: 4,
    title: 'Agricultural Processing Facility',
    location: 'Accra, Ghana',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Agriculture',
    year: '2023',
    capacity: '50 MW',
    description: 'Modern food processing facility with automated systems and energy-efficient operations',
    impact: ['300% processing capacity', '50 MW renewable integration', '60% water savings', '1,000 farmers supported']
  },
];

const Industry: React.FC = () => {
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
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Industrial Solutions"
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
            <Chip className="mb-6 bg-blue-500/20 text-white border-blue-400/30">
              Industry
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
              Industrial Future
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl lg:text-2xl leading-relaxed opacity-90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Advanced electrical automation and power systems for mining, manufacturing, and industrial operations
          </motion.p>
          
          <motion.div 
            className="mt-8 grid grid-cols-3 gap-8 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold">1,780+</div>
              <div className="text-sm opacity-80">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">2.5 GW</div>
              <div className="text-sm opacity-80">Capacity</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm opacity-80">Facilities</div>
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
                Our Industrial Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive electrical solutions for automation, power distribution, and industrial optimization
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
                        className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6"
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
                          <span className="text-gray-500">Efficiency</span>
                          <p className="font-bold text-gray-900">{service.efficiency}</p>
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
                                <Icon name="check" size={16} className="text-blue-600" />
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
                Featured Industrial Projects
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transforming African industry with cutting-edge electrical automation and power systems
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
                          <Chip className="bg-blue-500 text-white">
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
                          <p className="text-sm font-medium">Click to explore industrial impact</p>
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
                            <h4 className="font-semibold text-gray-900 mb-3">Industrial Impact:</h4>
                            <div className="space-y-2">
                              {project.impact.map((impact, i) => (
                                <motion.div 
                                  key={i} 
                                  className="flex items-center gap-2"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: i * 0.1 }}
                                >
                                  <Icon name="trending-up" size={16} className="text-blue-600" />
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
              Ready to Modernize Your Operations?
            </h3>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Our industrial automation specialists are ready to optimize your electrical systems for maximum efficiency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="bordered"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium px-8 transition-all duration-300"
              >
                Industrial Assessment
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

export default Industry;
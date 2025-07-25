import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Image, Button, Chip } from '@heroui/react';
import { ScrollReveal } from '../components/ui';
import { Icon } from '../components/ui';

// Enhanced urban planning services data
const services = [
  {
    id: 1,
    icon: 'map',
    title: 'Smart City Infrastructure',
    description: 'Integrated electrical systems for smart city initiatives with IoT networks and intelligent infrastructure.',
    features: ['IoT integration', 'Smart lighting', 'Energy management', 'Data networks'],
    projects: '75+',
    scope: 'City-wide'
  },
  {
    id: 2,
    icon: 'lightbulb',
    title: 'Urban Lighting Solutions',
    description: 'Energy-efficient lighting systems for streets, public spaces, and architectural illumination.',
    features: ['LED street lighting', 'Architectural lighting', 'Adaptive controls', 'Energy optimization'],
    projects: '200+',
    scope: 'District-wide'
  },
  {
    id: 3,
    icon: 'grid-3x3',
    title: 'Grid Modernization',
    description: 'Upgrading urban electrical grids with smart technologies for reliability and renewable integration.',
    features: ['Smart grids', 'Renewable integration', 'Load management', 'Fault detection'],
    projects: '120+',
    scope: 'Network-wide'
  },
  {
    id: 4,
    icon: 'traffic-cone',
    title: 'Traffic Management',
    description: 'Electrical infrastructure for intelligent traffic systems including signals and control networks.',
    features: ['Traffic signals', 'Sensor networks', 'Control systems', 'Communication links'],
    projects: '90+',
    scope: 'Corridor-wide'
  },
  {
    id: 5,
    icon: 'building',
    title: 'Building Electrification',
    description: 'Comprehensive electrical solutions for mixed-use developments and urban building complexes.',
    features: ['Building systems', 'Energy efficiency', 'Smart controls', 'Safety systems'],
    projects: '150+',
    scope: 'Building-wide'
  },
  {
    id: 6,
    icon: 'zap',
    title: 'Microgrid Development',
    description: 'Local energy networks to enhance urban resilience and support distributed generation.',
    features: ['Local generation', 'Energy storage', 'Grid integration', 'Resilience planning'],
    projects: '45+',
    scope: 'District-wide'
  },
];

// Featured urban planning projects
const projects = [
  {
    id: 1,
    title: 'New Capital Smart City',
    location: 'Egypt',
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Smart City',
    year: '2023',
    capacity: '2,000 MW',
    description: 'Comprehensive electrical infrastructure for new administrative capital with smart city technologies',
    impact: ['6.5M residents served', '100% renewable energy', 'Smart grid deployment', 'Zero-emission districts']
  },
  {
    id: 2,
    title: 'Urban Renewal District',
    location: 'Lagos, Nigeria',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Urban Renewal',
    year: '2022',
    capacity: '500 MW',
    description: 'Complete electrical system modernization for major urban district redevelopment',
    impact: ['1.2M people impacted', '80% efficiency improvement', 'Underground distribution', 'Smart lighting deployed']
  },
  {
    id: 3,
    title: 'Mixed-Use Development Complex',
    location: 'Nairobi, Kenya',
    image: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Mixed-Use',
    year: '2023',
    capacity: '300 MW',
    description: 'Integrated electrical systems for large-scale residential and commercial development',
    impact: ['50K residents housed', '5K jobs created', 'LEED Gold certification', 'Microgrid integration']
  },
  {
    id: 4,
    title: 'Green Corridor Initiative',
    location: 'Cape Town, South Africa',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Green Infrastructure',
    year: '2023',
    capacity: '150 MW',
    description: 'Sustainable transport corridor with electric vehicle infrastructure and smart systems',
    impact: ['25km corridor', '200 EV stations', '60% emission reduction', 'Smart traffic management']
  },
];

const UrbanPlanning: React.FC = () => {
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
            src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Urban Planning Solutions"
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
            <Chip className="mb-6 bg-purple-500/20 text-white border-purple-400/30">
              Urban Planning
            </Chip>
          </motion.div>
          <motion.h1 
            className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Electrifying Africa's
            <span className="block text-4xl lg:text-6xl font-light opacity-90">
              Urban Future
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl lg:text-2xl leading-relaxed opacity-90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Smart electrical infrastructure solutions for sustainable, resilient, and livable African cities
          </motion.p>
          
          <motion.div 
            className="mt-8 grid grid-cols-3 gap-8 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold">680+</div>
              <div className="text-sm opacity-80">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">25</div>
              <div className="text-sm opacity-80">Cities</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">8M+</div>
              <div className="text-sm opacity-80">People Served</div>
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
                Our Urban Planning Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Integrated electrical solutions for smart, sustainable, and resilient urban environments
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
                        className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6"
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
                          <span className="text-gray-500">Scope</span>
                          <p className="font-bold text-gray-900">{service.scope}</p>
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
                                <Icon name="check" size={16} className="text-purple-600" />
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
                Featured Urban Planning Projects
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transforming African cities with innovative electrical infrastructure and smart technologies
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
                          <Chip className="bg-purple-500 text-white">
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
                          <p className="text-sm font-medium">Click to explore urban impact</p>
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
                            <h4 className="font-semibold text-gray-900 mb-3">Urban Impact:</h4>
                            <div className="space-y-2">
                              {project.impact.map((impact, i) => (
                                <motion.div 
                                  key={i} 
                                  className="flex items-center gap-2"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: i * 0.1 }}
                                >
                                  <Icon name="map" size={16} className="text-purple-600" />
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
              Ready to Transform Your City?
            </h3>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Our urban planning specialists are ready to help you create smart, sustainable electrical infrastructure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="bordered"
                size="lg"
                className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-medium px-8 transition-all duration-300"
              >
                Urban Assessment
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

export default UrbanPlanning;
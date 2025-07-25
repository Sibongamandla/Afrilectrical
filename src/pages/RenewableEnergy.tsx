import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Image, Button, Chip } from '@heroui/react';
import { ScrollReveal } from '../components/ui';
import { Icon } from '../components/ui';
import CallToActionSection from '../components/shared/CallToActionSection';

// Enhanced renewable energy services data
const services = [
  {
    id: 1,
    icon: 'sun',
    title: 'Solar Power Systems',
    description: 'Complete solar energy solutions from residential rooftops to utility-scale solar farms across Africa.',
    features: ['Photovoltaic systems', 'Solar thermal', 'Battery storage', 'Grid integration'],
    projects: '200+',
    capacity: '2.5 GW'
  },
  {
    id: 2,
    icon: 'wind',
    title: 'Wind Energy',
    description: 'Wind farm development and maintenance with cutting-edge turbine technology and grid integration.',
    features: ['Wind farm design', 'Turbine installation', 'Grid connection', 'Performance monitoring'],
    projects: '85+',
    capacity: '1.8 GW'
  },
  {
    id: 3,
    icon: 'battery',
    title: 'Energy Storage',
    description: 'Advanced battery storage solutions ensuring reliable power from intermittent renewable sources.',
    features: ['Lithium-ion systems', 'Grid-scale storage', 'Smart controllers', 'Backup power'],
    projects: '120+',
    capacity: '500 MWh'
  },
  {
    id: 4,
    icon: 'zap',
    title: 'Hydroelectric Power',
    description: 'Small to medium-scale hydroelectric projects leveraging Africa\'s abundant water resources.',
    features: ['Micro-hydro systems', 'Run-of-river', 'Pumped storage', 'Environmental compliance'],
    projects: '60+',
    capacity: '800 MW'
  },
  {
    id: 5,
    icon: 'leaf',
    title: 'Biomass Energy',
    description: 'Sustainable biomass and biogas solutions converting organic waste into clean electricity.',
    features: ['Biogas plants', 'Waste-to-energy', 'Agricultural residues', 'Community systems'],
    projects: '40+',
    capacity: '300 MW'
  },
  {
    id: 6,
    icon: 'grid',
    title: 'Grid Integration',
    description: 'Smart grid solutions for seamless integration of renewable energy into existing power networks.',
    features: ['Smart inverters', 'Grid stability', 'Power quality', 'Monitoring systems'],
    projects: '150+',
    capacity: '3.2 GW'
  },
];

// Featured renewable energy projects
const projects = [
  {
    id: 1,
    title: 'Kalahari Solar Complex',
    location: 'Northern Cape, South Africa',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Solar',
    year: '2023',
    capacity: '300 MW',
    description: 'One of Africa\'s largest photovoltaic installations with integrated battery storage',
    impact: ['500K households powered', '2M tons CO2 saved annually', '1,200 local jobs created']
  },
  {
    id: 2,
    title: 'Eastern Cape Wind Farm',
    location: 'Eastern Cape, South Africa',
    image: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Wind',
    year: '2022',
    capacity: '140 MW',
    description: 'Coastal wind farm with 85 turbines providing clean energy to the grid',
    impact: ['200K households powered', '800K tons CO2 saved annually', '600 local jobs created']
  },
  {
    id: 3,
    title: 'Lake Kariba Floating Solar',
    location: 'Zimbabwe',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Floating Solar',
    year: '2023',
    capacity: '150 MW',
    description: 'Innovative floating solar installation on Africa\'s largest artificial lake',
    impact: ['300K households powered', '1.2M tons CO2 saved annually', '900 local jobs created']
  },
  {
    id: 4,
    title: 'Rwandan Biogas Network',
    location: 'Kigali, Rwanda',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Biomass',
    year: '2023',
    capacity: '50 MW',
    description: 'Community-scale biogas plants converting agricultural waste to electricity',
    impact: ['100K households powered', '300K tons CO2 saved annually', '2,000 local jobs created']
  },
];

const RenewableEnergy: React.FC = () => {
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
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Renewable Energy Solutions"
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
              Renewable Energy
            </Chip>
          </motion.div>
          <motion.h1 
            className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Powering Africa with
            <span className="block text-4xl lg:text-6xl font-light opacity-90">
              Clean Energy
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl lg:text-2xl leading-relaxed opacity-90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Sustainable renewable energy solutions harnessing Africa's abundant natural resources for a cleaner future
          </motion.p>
          
          <motion.div 
            className="mt-8 grid grid-cols-3 gap-8 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold">5.8 GW</div>
              <div className="text-sm opacity-80">Total Capacity</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">700+</div>
              <div className="text-sm opacity-80">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">3M+</div>
              <div className="text-sm opacity-80">Households</div>
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
                Our Renewable Energy Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive clean energy solutions from solar and wind to hydroelectric and biomass systems
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
                          <span className="text-gray-500">Capacity</span>
                          <p className="font-bold text-gray-900">{service.capacity}</p>
                        </div>
                      </div>

                      {selectedService === service.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.4 }}
                          className="pt-6 border-t border-gray-200"
                        >
                          <h4 className="font-semibold text-gray-900 mb-3">Key Technologies:</h4>
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
                Featured Renewable Energy Projects
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transforming Africa's energy landscape with innovative clean energy installations
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
                          <p className="text-sm font-medium">Click to explore impact</p>
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

      <CallToActionSection
        title="Ready to Go Green?"
        description="Join the renewable energy revolution and help us build a sustainable future for Africa."
        buttonText="Get Solar Quote"
        className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
      />
    </div>
  );
};

export default RenewableEnergy;
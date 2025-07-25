import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Image, Button, Chip } from '@heroui/react';
import { ScrollReveal } from '../components/ui';
import { Icon } from '../components/ui';

// Enhanced safety services data
const services = [
  {
    id: 1,
    icon: 'shield',
    title: 'Risk Assessment',
    description: 'Comprehensive evaluation of electrical hazards and potential risks in your facility or project environment.',
    features: ['Hazard identification', 'Risk quantification', 'Vulnerability analysis', 'Safety recommendations'],
    projects: '85+',
    compliance: '100%'
  },
  {
    id: 2,
    icon: 'search',
    title: 'Safety Audits',
    description: 'Thorough inspection and verification of electrical systems against international safety standards.',
    features: ['System inspections', 'Code compliance', 'Performance verification', 'Gap analysis'],
    projects: '120+',
    compliance: '100%'
  },
  {
    id: 3,
    icon: 'zap',
    title: 'Arc Flash Studies',
    description: 'Advanced analysis of arc flash hazards with detailed incident energy calculations and PPE requirements.',
    features: ['Energy calculations', 'PPE selection', 'Warning labels', 'Safety procedures'],
    projects: '60+',
    compliance: '100%'
  },
  {
    id: 4,
    icon: 'book',
    title: 'Safety Training',
    description: 'Customized training programs for electrical safety procedures, emergency response, and safe work practices.',
    features: ['OSHA training', 'Arc flash awareness', 'Lock-out procedures', 'Emergency response'],
    projects: '200+',
    compliance: '100%'
  },
  {
    id: 5,
    icon: 'file-text',
    title: 'Compliance Documentation',
    description: 'Development of comprehensive safety documentation to meet regulatory requirements and standards.',
    features: ['Safety manuals', 'Procedures', 'Work permits', 'Compliance reports'],
    projects: '150+',
    compliance: '100%'
  },
  {
    id: 6,
    icon: 'tool',
    title: 'Remediation Services',
    description: 'Implementation of corrective measures to address identified safety issues and minimize risks.',
    features: ['System upgrades', 'Safety installations', 'Process improvements', 'Monitoring systems'],
    projects: '95+',
    compliance: '100%'
  },
];

// Featured safety projects
const projects = [
  {
    id: 1,
    title: 'Mining Complex Safety Upgrade',
    location: 'Witwatersrand, South Africa',
    image: 'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Industrial Safety',
    year: '2023',
    scope: '2,500 workers',
    description: 'Comprehensive safety overhaul for major mining operation with focus on electrical hazard mitigation',
    impact: ['99.8% injury reduction', '100% code compliance', '2,500 workers trained', 'Zero safety incidents']
  },
  {
    id: 2,
    title: 'Hospital Electrical Safety Audit',
    location: 'Lagos, Nigeria',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Healthcare Safety',
    year: '2023',
    scope: '500-bed facility',
    description: 'Critical infrastructure safety assessment for major teaching hospital',
    impact: ['100% uptime maintained', '350 staff trained', 'ISO 14971 compliance', 'Emergency protocols updated']
  },
  {
    id: 3,
    title: 'Manufacturing Plant Arc Flash Study',
    location: 'Nairobi, Kenya',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Arc Flash Analysis',
    year: '2022',
    scope: '15MW facility',
    description: 'Detailed arc flash hazard analysis and mitigation strategy for automotive assembly plant',
    impact: ['85% incident energy reduction', '400 workers protected', 'NFPA 70E compliance', 'PPE requirements defined']
  },
  {
    id: 4,
    title: 'University Campus Safety Program',
    location: 'Cairo, Egypt',
    image: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Educational Safety',
    year: '2023',
    scope: '25,000 students',
    description: 'Campus-wide electrical safety assessment and training program implementation',
    impact: ['100% lab compliance', '500 staff trained', 'Emergency systems upgraded', 'Safety culture established']
  },
];

const RiskAndSafety: React.FC = () => {
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
            src="https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Risk and Safety Solutions"
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
            <Chip className="mb-6 bg-red-500/20 text-white border-red-400/30">
              Risk & Safety
            </Chip>
          </motion.div>
          <motion.h1 
            className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Protecting Lives with
            <span className="block text-4xl lg:text-6xl font-light opacity-90">
              Electrical Safety
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl lg:text-2xl leading-relaxed opacity-90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Comprehensive electrical safety solutions ensuring workplace protection and regulatory compliance across Africa
          </motion.p>
          
          <motion.div 
            className="mt-8 grid grid-cols-3 gap-8 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold">710+</div>
              <div className="text-sm opacity-80">Assessments</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm opacity-80">Compliance</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">5K+</div>
              <div className="text-sm opacity-80">Workers Trained</div>
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
                Our Safety Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive electrical safety solutions from risk assessment to training and compliance
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
                        className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mb-6"
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
                          <span className="text-gray-500">Compliance</span>
                          <p className="font-bold text-gray-900">{service.compliance}</p>
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
                                <Icon name="check" size={16} className="text-red-600" />
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
                Featured Safety Projects
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real-world safety implementations protecting workers and facilities across Africa
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
                          <Chip className="bg-red-500 text-white">
                            {project.category}
                          </Chip>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Chip className="bg-white/90 text-gray-900">
                            {project.scope}
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
                          <p className="text-sm font-medium">Click to explore safety impact</p>
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
                            <h4 className="font-semibold text-gray-900 mb-3">Safety Impact:</h4>
                            <div className="space-y-2">
                              {project.impact.map((impact, i) => (
                                <motion.div 
                                  key={i} 
                                  className="flex items-center gap-2"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: i * 0.1 }}
                                >
                                  <Icon name="shield" size={16} className="text-red-600" />
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
              Ready to Enhance Your Safety?
            </h3>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Our certified safety experts are ready to help you identify and mitigate electrical hazards
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="bordered"
                size="lg"
                className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-medium px-8 transition-all duration-300"
              >
                Safety Assessment
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

export default RiskAndSafety;
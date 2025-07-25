import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Image, Button } from '@heroui/react';
import { ScrollReveal } from '../components/ui';
import { Icon } from '../components/ui';

const businessExpertise = [
  {
    id: 1,
    title: 'Project Management',
    description: 'We implement efficient project management methodologies to ensure timely completion, budget control, and effective resource allocation.',
    icon: 'clipboard-list',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    services: [
      'Engineering Services Procurement',
      'Project and Construction management',
      'Construction monitoring',
      'Resource allocation optimization'
    ]
  },
  {
    id: 2,
    title: 'Client Satisfaction',
    description: 'We prioritise client satisfaction by understanding their needs, requirements, and expectations.',
    icon: 'users',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    services: [
      'Requirements analysis',
      'Regular client communication',
      'Feedback implementation',
      'Post-project support'
    ]
  },
  {
    id: 3,
    title: 'Quality and Excellence',
    description: 'We strive for excellence in every project undertaken by delivering high-quality results.',
    icon: 'award',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    services: [
      'Quality assurance protocols',
      'Industry standards compliance',
      'Continuous improvement',
      'Excellence in execution'
    ]
  },
  {
    id: 4,
    title: 'Safety and Sustainability',
    description: 'We promote a culture of safety by adopting and ensuring the well-being of employees, contractors, and stakeholders.',
    icon: 'shield',
    image: 'https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    services: [
      'Safety protocols implementation',
      'Environmental impact assessment',
      'Sustainable design practices',
      'Risk management'
    ]
  },
  {
    id: 5,
    title: 'Innovation',
    description: 'We embrace innovation and constantly seek ways to improve processes, techniques, and technologies.',
    icon: 'lightbulb',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    services: [
      'Latest technology adoption',
      'Process optimization',
      'Innovative solutions development',
      'Research and development'
    ]
  },
  {
    id: 6,
    title: 'Expertise and Knowledge',
    description: 'We develop and maintain a team of skilled professionals with expertise in consulting, electrical and construction.',
    icon: 'book-open',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    services: [
      'Continuous training programs',
      'Industry certifications',
      'Knowledge sharing',
      'Technical excellence'
    ]
  }
];

const BusinessExpertise: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
              Our Approach
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Business Expertise
              <span className="block text-4xl lg:text-5xl text-gray-600 font-light">
                that drives success
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our business expertise encompasses six key areas that ensure we deliver exceptional 
              results for every project we undertake across South Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Business Expertise Grid */}
      <ScrollReveal>
        <section className="py-20 px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {businessExpertise.map((expertise, index) => (
                <motion.div
                  key={expertise.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full border border-gray-200 hover:shadow-lg transition-all duration-300 group">
                    <CardBody className="p-0">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={expertise.image}
                          alt={expertise.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                            <Icon name={expertise.icon as any} size={24} className="text-gray-900" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {expertise.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {expertise.description}
                        </p>
                        
                        <div className="space-y-2">
                          {expertise.services.map((service, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                              <Icon name="check" size={16} className="text-green-600" />
                              <span>{service}</span>
                            </div>
                          ))}
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

      {/* CTA Section */}
      <section className="py-24 px-8 lg:px-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">
            Experience Our Expertise
          </h3>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let us bring our business expertise to your next project. Contact us to discuss 
            how we can help achieve your goals.
          </p>
          <Button 
            variant="bordered"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-gray-900 font-medium px-8 transition-all duration-300"
          >
            Get Started
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BusinessExpertise;
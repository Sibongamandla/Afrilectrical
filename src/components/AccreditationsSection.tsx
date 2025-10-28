import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody } from '@heroui/react';
import { Icon } from './ui';

const accreditations = [
  {
    id: 1,
    name: 'Engineering Council of South Africa',
    acronym: 'ECSA',
    description: 'Registered professional engineering practitioners',
    icon: 'award'
  },
  {
    id: 2,
    name: 'South African Council of Planners',
    acronym: 'SACPLAN',
    description: 'Registered town and regional planning professionals',
    icon: 'map'
  },
  {
    id: 3,
    name: 'South African Institute of Electrical Engineers',
    acronym: 'SAIEE',
    description: 'Member of the professional electrical engineering body',
    icon: 'zap'
  },
  {
    id: 4,
    name: 'South African Council of Architectural Profession',
    acronym: 'SACAP',
    description: 'Registered architectural professionals',
    icon: 'home'
  }
];

const AccreditationsSection: React.FC = () => {
  return (
    <section className="py-20 px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
            Professional Recognition
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Accreditations & Certifications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We obtain the relevant certifications and accreditations to demonstrate credibility, 
            professionalism, and adherence to industry standards.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {accreditations.map((accreditation, index) => (
            <motion.div
              key={accreditation.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border border-gray-200 hover:shadow-lg transition-all duration-300 group">
                <CardBody className="p-6 text-center">
                  <div className="w-16 h-16 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon name={accreditation.icon as any} size={32} color="white" className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {accreditation.acronym}
                  </h3>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    {accreditation.name}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {accreditation.description}
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Card className="border border-gray-900 bg-gray-900 text-white">
            <CardBody className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div>
                  <h3 className="text-3xl font-bold mb-2 text-white">Level 1 BBBEE Contributor</h3>
                  <p className="text-gray-300">
                    Proudly contributing to South Africa's economic transformation
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-5xl font-bold">100%</div>
                    <div className="text-sm text-gray-400">Black Owned</div>
                  </div>
                  <div className="w-px h-16 bg-gray-700" />
                  <div className="text-center">
                    <div className="text-5xl font-bold">1</div>
                    <div className="text-sm text-gray-400">BBBEE Level</div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AccreditationsSection;
import React from 'react';
import { Button, Card, CardBody, Chip, Image } from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from './ui';

const CallToActionHeroUI: React.FC = () => {
  const ctaFeatures = [
    {
      icon: 'users',
      title: 'Expert Team',
      description: '100+ engineers across Africa'
    },
    {
      icon: 'award',
      title: 'Proven Track Record',
      description: '500+ successful projects'
    },
    {
      icon: 'clock',
      title: 'Fast Delivery',
      description: 'On-time project completion'
    },
    {
      icon: 'shield',
      title: 'Quality Assured',
      description: 'ISO certified processes'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-primary-200 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-secondary-200 to-transparent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Chip color="primary" variant="flat" size="lg" className="mb-4">
                Ready to Get Started?
              </Chip>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Transform Your Infrastructure with
              <span className="block bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Africa's Leading Engineers
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Join hundreds of satisfied clients who trust Afrilectrical for their most critical 
              electrical engineering projects. From concept to completion, we deliver excellence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button
                color="primary"
                size="lg"
                className="text-white font-semibold px-8 py-6 text-lg"
                endContent={<Icon name="arrow-right" size={20} color="white" />}
              >
                Start Your Project
              </Button>
              <Button
                variant="bordered"
                color="primary"
                size="lg"
                className="font-semibold px-8 py-6 text-lg"
                startContent={<Icon name="phone" size={20} />}
              >
                Schedule Consultation
              </Button>
            </motion.div>

            {/* Feature List */}
            <motion.div
              className="grid sm:grid-cols-2 gap-4 pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {ctaFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-2 rounded-lg bg-primary-100 text-primary-600">
                    <Icon name={feature.icon as any} size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{feature.title}</p>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image Card */}
            <Card className="shadow-2xl border-0 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12"
                alt="Engineering team working on electrical infrastructure"
                className="w-full h-80 object-cover"
                removeWrapper
              />
              <CardBody className="p-8 bg-gradient-to-br from-white to-gray-50">
                <div className="text-center space-y-4">
                  <div className="flex justify-center items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse" />
                    <div className="w-3 h-3 bg-secondary-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <div className="w-3 h-3 bg-accent-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Ready When You Are
                  </h3>
                  <p className="text-gray-600">
                    Our team is standing by to discuss your next electrical engineering project.
                  </p>
                  <div className="flex justify-center items-center gap-6 pt-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary-600">24/7</p>
                      <p className="text-sm text-gray-500">Support</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-secondary-600">99%</p>
                      <p className="text-sm text-gray-500">Success Rate</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-accent-600">15+</p>
                      <p className="text-sm text-gray-500">Countries</p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white shadow-lg"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Icon name="lightning" size={32} color="white" />
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-secondary-500 to-primary-500 rounded-full flex items-center justify-center text-white shadow-lg"
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <Icon name="gear" size={24} color="white" />
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Trust Indicators */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 mb-6">Trusted by leading organizations across Africa</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Company logos would go here */}
            <div className="px-4 py-2 bg-gray-100 rounded-lg">
              <p className="text-gray-600 font-medium">ESKOM</p>
            </div>
            <div className="px-4 py-2 bg-gray-100 rounded-lg">
              <p className="text-gray-600 font-medium">KPLC</p>
            </div>
            <div className="px-4 py-2 bg-gray-100 rounded-lg">
              <p className="text-gray-600 font-medium">ECG Ghana</p>
            </div>
            <div className="px-4 py-2 bg-gray-100 rounded-lg">
              <p className="text-gray-600 font-medium">NERC Nigeria</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionHeroUI;
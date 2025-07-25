import React from 'react';
import { Button, Card, CardBody, Chip, Image } from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from './ui';

const HeroSectionHeroUI: React.FC = () => {
  const stats = [
    { label: 'Projects Completed', value: '500+', icon: 'award' },
    { label: 'Countries Served', value: '15+', icon: 'globe' },
    { label: 'Years Experience', value: '20+', icon: 'clock' },
    { label: 'Team Members', value: '100+', icon: 'users' },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13"
          alt="Electrical infrastructure"
          className="w-full h-full object-cover"
          removeWrapper
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white space-y-8"
          >
            {/* Chip Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Chip 
                color="primary" 
                variant="solid" 
                size="lg"
                className="mb-6"
              >
                Leading Electrical Engineering in Africa
              </Chip>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Powering
              <span className="block bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                Africa's Future
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Innovative electrical engineering solutions that drive sustainable development across the continent. 
              From renewable energy to smart infrastructure, we're building tomorrow's Africa today.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button
                color="primary"
                size="lg"
                className="text-white font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto"
                endContent={<Icon name="arrow-right" size={20} color="white" />}
              >
                Explore Our Projects
              </Button>
              <Button
                variant="bordered"
                size="lg"
                className="text-white border-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto"
                startContent={<Icon name="play" size={20} color="white" />}
              >
                Watch Our Story
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-8 sm:pt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  <Card className="bg-white/10 backdrop-blur-md border-0">
                    <CardBody className="p-3 sm:p-4 text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Icon name={stat.icon as any} size={24} className="text-primary-400" />
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-300">
                        {stat.label}
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 mt-12 lg:mt-0"
          >
            <div className="grid gap-6">
              {/* Feature Card 1 */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-0 hover:bg-white/20 transition-all">
                  <CardBody className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary-500/30 text-primary-300">
                        <Icon name="lightning" size={28} color="white" />
                      </div>
                      <div className="text-white">
                        <h3 className="text-xl font-bold mb-2">Renewable Energy</h3>
                        <p className="text-gray-300">
                          Solar, wind, and hybrid systems designed for African conditions
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>

              {/* Feature Card 2 */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-0 hover:bg-white/20 transition-all">
                  <CardBody className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-secondary-500/30 text-secondary-300">
                        <Icon name="grid" size={28} color="white" />
                      </div>
                      <div className="text-white">
                        <h3 className="text-xl font-bold mb-2">Smart Infrastructure</h3>
                        <p className="text-gray-300">
                          Intelligent power distribution and automation systems
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>

              {/* Feature Card 3 */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-0 hover:bg-white/20 transition-all">
                  <CardBody className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-accent-500/30 text-accent-300">
                        <Icon name="shield" size={28} color="white" />
                      </div>
                      <div className="text-white">
                        <h3 className="text-xl font-bold mb-2">Sustainable Solutions</h3>
                        <p className="text-gray-300">
                          Environmentally conscious engineering for lasting impact
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Action Button */}
      <motion.div
        className="fixed sm:absolute bottom-4 sm:bottom-8 right-4 sm:right-8 z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <Button
          isIconOnly
          color="primary"
          variant="shadow"
          size="lg"
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full shadow-lg"
        >
          <Icon name="phone" size={24} color="white" />
        </Button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-400">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Icon name="arrow" size={20} color="#9ca3af" className="text-gray-400 rotate-90" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSectionHeroUI;
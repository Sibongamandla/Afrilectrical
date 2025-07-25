import React from 'react';
import { Button, Card, CardBody, Divider, Input, Link } from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from './ui';

const FooterHeroUI: React.FC = () => {
  const footerLinks = {
    services: [
      'Power Distribution',
      'Renewable Energy',
      'Industrial Automation',
      'Smart Buildings',
      'Energy Storage',
      'Grid Modernization'
    ],
    company: [
      'About Us',
      'Our Team',
      'Careers',
      'News & Updates',
      'Case Studies',
      'Contact'
    ],
    resources: [
      'Documentation',
      'Technical Papers',
      'Industry Reports',
      'Webinars',
      'Support Center',
      'Training'
    ]
  };

  const socialLinks = [
    { icon: 'linkedin', href: '#', label: 'LinkedIn' },
    { icon: 'twitter', href: '#', label: 'Twitter' },
    { icon: 'facebook', href: '#', label: 'Facebook' },
    { icon: 'instagram', href: '#', label: 'Instagram' },
    { icon: 'youtube', href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-primary-500 to-secondary-500 border-0">
              <CardBody className="p-12 text-center">
                <h3 className="text-3xl font-bold mb-4 text-white">
                  Stay Updated with Industry Insights
                </h3>
                <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                  Get the latest updates on electrical engineering innovations, project highlights, and industry trends.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
                  <Input
                    placeholder="Enter your email"
                    variant="flat"
                    className="flex-1"
                    classNames={{
                      input: "text-gray-900",
                      inputWrapper: "bg-white border-0"
                    }}
                  />
                  <Button 
                    color="default" 
                    variant="solid" 
                    size="lg"
                    className="bg-white text-primary-600 font-semibold hover:bg-gray-100"
                    endContent={<Icon name="send" size={18} />}
                  >
                    Subscribe
                  </Button>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12">
          {/* Company Info */}
          <motion.div
            className="sm:col-span-2 lg:col-span-2 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-4">
                Afrilectrical
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                Leading electrical engineering firm driving sustainable development across Africa through innovative solutions, 
                renewable energy systems, and smart infrastructure.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Icon name="map-pin" size={20} className="text-primary-500" />
                <span className="text-gray-300">123 Innovation Drive, Cape Town, South Africa</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="phone" size={20} className="text-primary-500" />
                <span className="text-gray-300">+27 21 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="mail" size={20} className="text-primary-500" />
                <span className="text-gray-300">info@afrilectrical.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  isIconOnly
                  variant="flat"
                  className="bg-gray-800 hover:bg-primary-600 transition-colors"
                  as="a"
                  href={social.href}
                  aria-label={social.label}
                >
                  <Icon name={social.icon as any} size={20} />
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link}>
                  <Link 
                    href="#" 
                    className="text-gray-300 hover:text-primary-500 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <Link 
                    href="#" 
                    className="text-gray-300 hover:text-primary-500 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-white">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link}>
                  <Link 
                    href="#" 
                    className="text-gray-300 hover:text-primary-500 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      <Divider className="bg-gray-700" />

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-gray-400 text-center md:text-left">
            <p>&copy; 2024 Afrilectrical. All rights reserved.</p>
          </div>
          
          <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm justify-center md:justify-start">
            <Link href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterHeroUI;
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardBody, Button, Input, Textarea, Select, SelectItem, Image } from '@heroui/react';
import { ScrollReveal } from '../components/ui';
import { Icon } from '../components/ui';
import SimpleFooter from '../components/SimpleFooter';

// Enhanced office data with more details
const offices = [
  {
    id: 1,
    title: 'Pietermaritzburg',
    subtitle: 'Head Office',
    address: '27 Cascade Crescent, 3-ON Crescent Unit 19, Chasevalley, Pietermaritzburg 3201',
    phone: '+27 (0)33 347 0302',
    mobile: '+27 (0)83 714 2529',
    email: 'info@afrilectrical.co.za',
    hours: 'Mon-Fri: 8:00-17:00',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    specialties: ['Electrical Consulting', 'Project Management'],
    contactPerson: 'Nkosinathi Ndlela'
  },
  {
    id: 2,
    title: 'Johannesburg',
    subtitle: 'Branch Office',
    address: '4 Dornier Road, 1495',
    phone: '+27 11 049 9690',
    fax: '+27 (0)86 218 6524',
    mobile: '+27 (0)73 137 6778',
    email: 'afrilectrical@gmail.com',
    hours: 'Mon-Fri: 8:00-17:00',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    specialties: ['Civil Engineering', 'Structural Engineering'],
    contactPerson: 'Gundo Makhado'
  },
  {
    id: 3,
    title: 'Ulundi',
    subtitle: 'Branch Office',
    address: 'Ceza SP, P.O Box 188, 3866',
    mobile: '+27 (0)83 714 2529',
    email: 'info@afrilectrical.co.za',
    hours: 'Mon-Fri: 8:00-17:00',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    specialties: ['Town Planning', 'Rural Development'],
    contactPerson: 'Nkosinathi Ndlela'
  }
];

const contactMethods = [
  {
    icon: 'phone',
    title: 'Phone Support',
    description: 'Get immediate assistance from our technical experts',
    contact: '+27 (0)33 347 0302',
    hours: 'Mon-Fri: 8:00-17:00 SAST'
  },
  {
    icon: 'email',
    title: 'Email Us',
    description: 'Send detailed inquiries and receive comprehensive responses',
    contact: 'info@afrilectrical.co.za',
    hours: 'Response within 24 hours'
  },
  {
    icon: 'globe',
    title: 'Website',
    description: 'Visit our website for more information and resources',
    contact: 'www.afrilectrical.co.za',
    hours: 'Available 24/7'
  }
];

const subjects = [
  { key: 'general', label: 'General Inquiry' },
  { key: 'electrical', label: 'Electrical Consulting' },
  { key: 'civil', label: 'Civil & Structural Engineering' },
  { key: 'mechanical', label: 'Mechanical Engineering' },
  { key: 'planning', label: 'Town & Regional Planning' },
  { key: 'security', label: 'Security Design & Installation' },
  { key: 'quote', label: 'Request a Quote' },
  { key: 'support', label: 'Technical Support' }
];

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [selectedOffice, setSelectedOffice] = useState<number | null>(null);

  // Auto-scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      // Reset form after showing success message
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1500);
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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
              Get in Touch
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Let's Build the Future
              <span className="block text-4xl lg:text-5xl text-gray-600 font-light">
                together
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your electrical infrastructure? Our Level 1 BBBEE consulting engineering firm is here to discuss your project needs and provide innovative solutions across South Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <ScrollReveal>
        <section className="py-20 px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Choose Your Preferred Contact Method
              </h2>
              <p className="text-lg text-gray-600">
                Multiple ways to reach our expert team
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full border border-gray-200 hover:shadow-lg transition-all duration-300 group">
                    <CardBody className="p-8 text-center">
                      <div className="w-16 h-16 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon name={method.icon as any} size={32} color="white" className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{method.description}</p>
                      <div className="space-y-2">
                        <div className="font-medium text-gray-900">{method.contact}</div>
                        <div className="text-sm text-gray-500">{method.hours}</div>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Contact Form & Info */}
      <ScrollReveal>
        <section className="py-20 px-8 lg:px-16 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-16">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border border-gray-200 shadow-lg">
                  <CardBody className="p-8 lg:p-12">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        Send Us a Message
                      </h2>
                      <p className="text-gray-600 mb-8">
                        Fill out the form below and we'll get back to you within 24 hours.
                      </p>

                      <AnimatePresence mode="wait">
                        {formStatus === 'success' ? (
                          <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-center py-12"
                          >
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                              <Icon name="check" size={32} color="#16a34a" className="text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                            <p className="text-gray-600">Thank you for contacting us. We'll respond within 24 hours.</p>
                          </motion.div>
                        ) : (
                          <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                              <Input
                                label="Full Name"
                                placeholder="Enter your full name"
                                value={formData.name}
                                onChange={(e) => handleInputChange('name', e.target.value)}
                                required
                                classNames={{
                                  input: "text-gray-700",
                                  inputWrapper: "border-gray-300 hover:border-gray-900 bg-white"
                                }}
                              />
                              <Input
                                label="Email Address"
                                type="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                required
                                classNames={{
                                  input: "text-gray-700",
                                  inputWrapper: "border-gray-300 hover:border-gray-900 bg-white"
                                }}
                              />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                              <Input
                                label="Phone Number"
                                type="tel"
                                placeholder="Enter your phone number"
                                value={formData.phone}
                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                classNames={{
                                  input: "text-gray-700",
                                  inputWrapper: "border-gray-300 hover:border-gray-900 bg-white"
                                }}
                              />
                              <Select
                                label="Subject"
                                placeholder="Select inquiry type"
                                selectedKeys={formData.subject ? [formData.subject] : []}
                                onSelectionChange={(keys) => {
                                  const selected = Array.from(keys)[0] as string;
                                  handleInputChange('subject', selected);
                                }}
                                required
                                classNames={{
                                  trigger: "border-gray-300 hover:border-gray-900 bg-white",
                                  value: "text-gray-700"
                                }}
                              >
                                {subjects.map((subject) => (
                                  <SelectItem key={subject.key}>
                                    {subject.label}
                                  </SelectItem>
                                ))}
                              </Select>
                            </div>

                            <Textarea
                              label="Message"
                              placeholder="Tell us about your project or inquiry..."
                              value={formData.message}
                              onChange={(e) => handleInputChange('message', e.target.value)}
                              required
                              minRows={6}
                              classNames={{
                                input: "text-gray-700",
                                inputWrapper: "border-gray-300 hover:border-gray-900 bg-white"
                              }}
                            />

                            <Button
                              type="submit"
                              variant="bordered"
                              size="lg"
                              disabled={formStatus === 'submitting'}
                              className="w-full border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-medium transition-all duration-300"
                            >
                              {formStatus === 'submitting' ? 'Sending Message...' : 'Send Message'}
                            </Button>
                          </form>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </CardBody>
                </Card>
              </div>

              {/* Quick Contact Info */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Contact</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                        <Icon name="phone" size={20} color="white" className="text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Phone</div>
                        <div className="text-gray-600">+27 (0)33 347 0302</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                        <Icon name="email" size={20} color="white" className="text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Email</div>
                        <div className="text-gray-600">info@afrilectrical.co.za</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                        <Icon name="location" size={20} color="white" className="text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Head Office</div>
                        <div className="text-gray-600">27 Cascade Crescent<br />Chasevalley, Pietermaritzburg 3201</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Response Times */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Card className="border border-gray-200">
                    <CardBody className="p-6">
                      <h4 className="font-bold text-gray-900 mb-4">Response Times</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">General Inquiries</span>
                          <span className="font-medium text-gray-900">24 hours</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Project Quotes</span>
                          <span className="font-medium text-gray-900">48 hours</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Emergency Support</span>
                          <span className="font-medium text-gray-900">Immediate</span>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Office Locations */}
      <ScrollReveal>
        <section className="py-20 px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Office Locations
              </h2>
              <p className="text-lg text-gray-600">
                Find us across South Africa
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <motion.div
                  key={office.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedOffice(selectedOffice === office.id ? null : office.id)}
                >
                  <Card className="h-full overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
                    <CardBody className="p-0 flex flex-col">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={office.image}
                          alt={office.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 text-xs font-medium bg-white text-gray-900 rounded-full">
                            {office.subtitle}
                          </span>
                        </div>
                      </div>

                      <div className="p-6 flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
                          {office.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                          {office.address}
                        </p>

                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Icon name="phone" size={16} color="#9ca3af" className="text-gray-400" />
                            <span className="text-gray-600">{office.phone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Icon name="email" size={16} color="#9ca3af" className="text-gray-400" />
                            <span className="text-gray-600 text-xs">{office.email}</span>
                          </div>
                        </div>

                        {selectedOffice === office.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 pt-4 border-t border-gray-200"
                          >
                            <div className="text-sm">
                              {office.contactPerson && (
                                <div className="mb-3">
                                  <div className="font-medium text-gray-900">Contact Person:</div>
                                  <div className="text-gray-600">{office.contactPerson}</div>
                                </div>
                              )}
                              <div className="font-medium text-gray-900 mb-2">Specialties:</div>
                              <div className="flex flex-wrap gap-2">
                                {office.specialties.map((specialty) => (
                                  <span key={specialty} className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                                    {specialty}
                                  </span>
                                ))}
                              </div>
                              <div className="mt-3">
                                <div className="font-medium text-gray-900">Hours:</div>
                                <div className="text-gray-600">{office.hours}</div>
                              </div>
                              {office.fax && (
                                <div className="mt-2">
                                  <div className="font-medium text-gray-900">Fax:</div>
                                  <div className="text-gray-600">{office.fax}</div>
                                </div>
                              )}
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

      <SimpleFooter />
    </div>
  );
};

export default Contact;
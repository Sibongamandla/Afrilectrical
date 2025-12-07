import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Image, Button, Input } from '@heroui/react';
import { ScrollReveal } from '../components/ui';
import { Icon } from '../components/ui';
import CallToActionSection from '../components/shared/CallToActionSection';

// Enhanced project data with authentic AFRILECTRICAL projects
const projects = [
  {
    id: 1,
    title: 'KwaZulu-Natal Rural Electrification',
    subtitle: 'Rural Community Electrification',
    description: 'Comprehensive rural electrification project bringing reliable power to underserved communities across KwaZulu-Natal province.',
    fullDescription: 'This transformative project involved designing and implementing low, medium, and high voltage reticulation systems for 15 rural communities, including overhead lines and underground cable installations. The project focused on sustainable development and community empowerment through reliable electrical infrastructure.',
    category: 'Electrical Consulting',
    location: 'KwaZulu-Natal, South Africa',
    year: '2023',
    duration: '12 months',
    status: 'Completed',
    capacity: '25 MW',
    beneficiaries: '8,500 households',
    tags: ['Rural Electrification', 'Community Development', 'HV/MV/LV'],
    imageUrl: '/media/images/rural_electrification_powerlines_wide.jpg',
    featured: true,
    impact: [
      { metric: '15', label: 'Communities' },
      { metric: '8.5K', label: 'Households' },
      { metric: '100%', label: 'BBBEE Compliant' }
    ]
  },
  {
    id: 2,
    title: 'Pietermaritzburg Industrial Park',
    subtitle: 'Electrical Infrastructure Development',
    description: 'Complete electrical infrastructure design and installation for a new industrial development in Pietermaritzburg.',
    fullDescription: 'Comprehensive electrical consulting project involving high voltage reticulation, transformer installations, and industrial electrical systems for a 50-hectare industrial park. The project includes underground cable networks, switchgear installations, and backup power systems.',
    category: 'Electrical Consulting',
    location: 'Pietermaritzburg, KwaZulu-Natal',
    year: '2023',
    duration: '18 months',
    status: 'In Progress',
    capacity: '15 MW',
    beneficiaries: '25 businesses',
    tags: ['Industrial', 'HV Systems', 'Infrastructure'],
    imageUrl: '/media/images/switchgear_testing_team_substation.jpg',
    featured: false,
    impact: [
      { metric: '25', label: 'Businesses' },
      { metric: '500+', label: 'Jobs Created' },
      { metric: '100%', label: 'BBBEE Compliant' }
    ]
  },
  {
    id: 3,
    title: 'Durban Commercial Complex',
    subtitle: 'Smart Building Systems',
    description: 'Integrated electrical and security systems for a major commercial development in Durban.',
    fullDescription: 'Complete building services engineering including electrical reticulation, fire detection systems, security installations, and building management systems for a 20-story commercial complex. Features energy-efficient lighting, backup power systems, and advanced security integration.',
    category: 'Civil & Structural Engineering',
    location: 'Durban, KwaZulu-Natal',
    year: '2022',
    duration: '14 months',
    status: 'Completed',
    capacity: '8 MW',
    beneficiaries: '3,000 daily users',
    tags: ['Commercial', 'Building Systems', 'Security'],
    imageUrl: '/media/images/engineers_inspecting_siemens_switchgear.jpg',
    featured: false,
    impact: [
      { metric: '20', label: 'Floors' },
      { metric: '3K', label: 'Daily Users' },
      { metric: '30%', label: 'Energy Savings' }
    ]
  },
  {
    id: 4,
    title: 'Midlands Medical Centre',
    subtitle: 'Healthcare Electrical Systems',
    description: 'Critical electrical infrastructure for a private healthcare facility in the KwaZulu-Natal Midlands.',
    fullDescription: 'Design and installation of mission-critical electrical systems including emergency power supplies, medical gas systems, fire detection, and specialized lighting for surgical suites. Features redundant power systems and backup generators to ensure uninterrupted healthcare delivery.',
    category: 'Mechanical Engineering',
    location: 'Howick, KwaZulu-Natal',
    year: '2022',
    duration: '10 months',
    status: 'Completed',
    capacity: '3 MW',
    beneficiaries: '50,000 patients/year',
    tags: ['Healthcare', 'Emergency Power', 'Medical Systems'],
    imageUrl: '/media/images/switchgear_room_installation_inspection.jpg',
    featured: false,
    impact: [
      { metric: '99.9%', label: 'Uptime' },
      { metric: '50K', label: 'Patients/Year' },
      { metric: '24/7', label: 'Emergency Power' }
    ]
  },
  {
    id: 5,
    title: 'Hilton Residential Development',
    subtitle: 'Township Electrification Project',
    description: 'Comprehensive electrical infrastructure for a new residential township development near Pietermaritzburg.',
    fullDescription: 'Large-scale township electrification project involving street lighting, residential connections, transformer installations, and underground cable networks. The project includes sustainable energy solutions and smart metering systems for 800 residential units across multiple phases.',
    category: 'Town & Regional Planning',
    location: 'Hilton, KwaZulu-Natal',
    year: '2024',
    duration: '24 months',
    status: 'Planning',
    capacity: '5 MW',
    beneficiaries: '800 families',
    tags: ['Residential', 'Township', 'Smart Metering'],
    imageUrl: '/media/images/cable_installation_sunset_powerlines.jpg',
    featured: false,
    impact: [
      { metric: '800', label: 'Homes' },
      { metric: '2,400', label: 'Residents' },
      { metric: '100%', label: 'Smart Meters' }
    ]
  },
  {
    id: 6,
    title: 'Scottsville Security Upgrade',
    subtitle: 'Integrated Security Systems',
    description: 'Comprehensive security system installation for a mixed-use development in Scottsville, Pietermaritzburg.',
    fullDescription: 'Complete security infrastructure including CCTV surveillance, access control systems, perimeter detection, and integrated alarm systems. Features IP-based cameras, biometric access control, and 24/7 monitoring capabilities with mobile app integration.',
    category: 'Security Design & Installation',
    location: 'Scottsville, Pietermaritzburg',
    year: '2023',
    duration: '6 months',
    status: 'Completed',
    capacity: 'N/A',
    beneficiaries: '150 units',
    tags: ['CCTV', 'Access Control', 'Perimeter Security'],
    imageUrl: '/media/images/engineer_transformer_inspection_branded.jpg',
    featured: false,
    impact: [
      { metric: '150', label: 'Units Protected' },
      { metric: '64', label: 'Cameras' },
      { metric: '100%', label: 'Coverage' }
    ]
  }
];

const categories = [
  { id: 'all', name: 'All Projects', count: projects.length },
  { id: 'Electrical Consulting', name: 'Electrical Consulting', count: projects.filter(p => p.category === 'Electrical Consulting').length },
  { id: 'Civil & Structural Engineering', name: 'Civil & Structural', count: projects.filter(p => p.category === 'Civil & Structural Engineering').length },
  { id: 'Mechanical Engineering', name: 'Mechanical Engineering', count: projects.filter(p => p.category === 'Mechanical Engineering').length },
  { id: 'Town & Regional Planning', name: 'Town Planning', count: projects.filter(p => p.category === 'Town & Regional Planning').length },
  { id: 'Security Design & Installation', name: 'Security Systems', count: projects.filter(p => p.category === 'Security Design & Installation').length }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Completed': return 'bg-green-100 text-green-800 border-green-200';
    case 'In Progress': return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'Planning': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'Ongoing': return 'bg-purple-100 text-purple-800 border-purple-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  // Auto-scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredProject = projects.find(p => p.featured);

  return (
    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div 
              className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Project Portfolio
            </motion.div>
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="block"
              >
                Engineering Excellence
              </motion.span>
              <motion.span 
                className="block text-4xl lg:text-5xl text-gray-600 font-light"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                across Africa
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Explore our portfolio of innovative engineering projects across KwaZulu-Natal, delivering electrical, civil, mechanical, and security solutions that make a difference.
            </motion.p>

            {/* Quick Stats with Enhanced Animations */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {[
                { value: "120+", label: "Projects Delivered" },
                { value: "8", label: "Years Experience" },
                { value: "65MW", label: "Total Capacity" },
                { value: "75K+", label: "People Impacted" }
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="text-center group"
                  initial={{ scale: 0, rotateY: -90 }}
                  animate={{ scale: 1, rotateY: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1.1 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div 
                    className="text-3xl font-bold text-gray-900"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <motion.div 
                    className="text-sm text-gray-500"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                  >
                    {stat.label}
                  </motion.div>
                  
                  {/* Animated underline */}
                  <motion.div
                    className="w-8 h-0.5 bg-gray-300 mx-auto mt-2 group-hover:bg-gray-900 group-hover:w-12 transition-all duration-300"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 px-8 lg:px-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "solid" : "bordered"}
                  size="sm"
                  className={`${
                    selectedCategory === category.id 
                      ? "bg-gray-900 text-white border-gray-900" 
                      : "border-gray-300 text-gray-600 hover:border-gray-900 hover:text-gray-900"
                  } rounded-full font-medium transition-all duration-200`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>

            {/* Search */}
            <div className="w-full lg:w-auto">
              <Input
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                startContent={<Icon name="search" size={20} color="#9ca3af" className="text-gray-400" />}
                classNames={{
                  input: "text-gray-700",
                  inputWrapper: "border-gray-300 hover:border-gray-900 bg-white"
                }}
                className="w-full lg:w-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      {featuredProject && selectedCategory === 'all' && (
        <ScrollReveal>
          <section className="py-20 px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-8 text-center">
                Featured Project
              </div>
              
              <Card className="overflow-hidden border border-gray-200 shadow-lg">
                <CardBody className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative h-80 lg:h-auto">
                      <Image
                        src={featuredProject.imageUrl}
                        alt={featuredProject.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-6 left-6">
                        <span className={`px-3 py-1 text-xs font-medium border rounded-full ${getStatusColor(featuredProject.status)}`}>
                          {featuredProject.status}
                        </span>
                      </div>
                    </div>

                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                        {featuredProject.category}
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        {featuredProject.title}
                      </h2>
                      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        {featuredProject.fullDescription}
                      </p>

                      <div className="grid grid-cols-2 gap-6 mb-8">
                        <div>
                          <div className="text-sm text-gray-500 mb-1">Location</div>
                          <div className="font-medium text-gray-900">{featuredProject.location}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 mb-1">Capacity</div>
                          <div className="font-medium text-gray-900">{featuredProject.capacity}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 mb-1">Duration</div>
                          <div className="font-medium text-gray-900">{featuredProject.duration}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 mb-1">Year</div>
                          <div className="font-medium text-gray-900">{featuredProject.year}</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                        {featuredProject.impact.map((item, index) => (
                          <div key={index} className="text-center">
                            <div className="text-2xl font-bold text-gray-900">{item.metric}</div>
                            <div className="text-xs text-gray-500">{item.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </section>
        </ScrollReveal>
      )}

      {/* Projects Grid */}
      <ScrollReveal>
        <section className="py-20 px-8 lg:px-16 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {filteredProjects.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.filter(p => !p.featured).map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50, rotateX: -15 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.15,
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      y: -15,
                      rotateY: 5,
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                    className="group cursor-pointer perspective-1000"
                    onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                  >
                    <Card className="h-full overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-500 transform-gpu">
                      <CardBody className="p-0 relative">
                        <motion.div 
                          className="relative h-48 overflow-hidden"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.4 }}
                        >
                          <motion.div
                            initial={{ scale: 1.2, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.15 + 0.2 }}
                          >
                            <Image
                              src={project.imageUrl}
                              alt={project.title}
                              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                            />
                          </motion.div>
                          
                          {/* Animated overlays */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                          
                          <motion.div 
                            className="absolute top-4 right-4"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ 
                              duration: 0.6, 
                              delay: index * 0.15 + 0.4,
                              type: "spring",
                              stiffness: 200
                            }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <span className={`px-3 py-1 text-xs font-medium border rounded-full ${getStatusColor(project.status)} backdrop-blur-sm`}>
                              {project.status}
                            </span>
                          </motion.div>
                          
                          <motion.div 
                            className="absolute bottom-4 left-4"
                            initial={{ scale: 0, x: -20 }}
                            animate={{ scale: 1, x: 0 }}
                            transition={{ 
                              duration: 0.6, 
                              delay: index * 0.15 + 0.5,
                              type: "spring"
                            }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <span className="px-3 py-1 text-xs font-medium bg-white/95 text-gray-800 rounded-full backdrop-blur-sm">
                              {project.category}
                            </span>
                          </motion.div>
                        </motion.div>

                        <motion.div 
                          className="p-6"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                        >
                          <motion.h3 
                            className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            {project.title}
                          </motion.h3>
                          <motion.p 
                            className="text-gray-600 mb-4 leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                          >
                            {project.description}
                          </motion.p>

                          <motion.div 
                            className="grid grid-cols-2 gap-4 text-sm"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
                          >
                            <motion.div whileHover={{ scale: 1.05 }}>
                              <div className="text-gray-500">Location</div>
                              <div className="font-medium text-gray-900">{project.location}</div>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }}>
                              <div className="text-gray-500">Capacity</div>
                              <div className="font-medium text-gray-900">{project.capacity}</div>
                            </motion.div>
                          </motion.div>

                          {selectedProject === project.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0, scale: 0.9 }}
                              animate={{ opacity: 1, height: 'auto', scale: 1 }}
                              exit={{ opacity: 0, height: 0, scale: 0.9 }}
                              transition={{ 
                                duration: 0.5,
                                ease: "easeOut"
                              }}
                              className="mt-6 pt-6 border-t border-gray-200 overflow-hidden"
                            >
                              <motion.p 
                                className="text-gray-600 mb-4 leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                              >
                                {project.fullDescription}
                              </motion.p>
                              <motion.div 
                                className="grid grid-cols-3 gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                              >
                                {project.impact.map((item, i) => (
                                  <motion.div 
                                    key={i} 
                                    className="text-center"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ 
                                      duration: 0.3, 
                                      delay: 0.3 + i * 0.1,
                                      type: "spring"
                                    }}
                                    whileHover={{ scale: 1.1 }}
                                  >
                                    <div className="text-lg font-bold text-gray-900">{item.metric}</div>
                                    <div className="text-xs text-gray-500">{item.label}</div>
                                  </motion.div>
                                ))}
                              </motion.div>
                            </motion.div>
                          )}
                        </motion.div>

                        {/* Floating animation elements */}
                        <motion.div
                          className="absolute top-2 left-2 w-1 h-1 bg-gray-400/30 rounded-full"
                          animate={{ 
                            y: [0, -10, 0],
                            opacity: [0.3, 0.7, 0.3]
                          }}
                          transition={{ 
                            duration: 3, 
                            repeat: Infinity,
                            delay: index * 0.5
                          }}
                        />
                      </CardBody>
                    </Card>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <Icon name="search" size={64} color="#d1d5db" className="text-gray-300 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No projects found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>
      </ScrollReveal>

      <CallToActionSection
        title="Have a Project in Mind?"
        description="Let's discuss how we can bring your electrical infrastructure vision to life with our proven expertise."
        buttonText="Start Your Project"
      />
    </div>
  );
};

export default Projects;
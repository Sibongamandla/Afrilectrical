import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Image, Button, Input } from '@heroui/react';
import { ScrollReveal } from '../components/ui';
import { Icon } from '../components/ui';

// AFRILECTRICAL company stories
const stories = [
  {
    id: 1,
    type: 'Feature Story',
    title: 'Empowering KwaZulu-Natal: Rural Electrification Success Story',
    excerpt: 'How AFRILECTRICAL brought reliable electricity to 15 rural communities, transforming lives and enabling economic development.',
    content: 'The KwaZulu-Natal Rural Electrification project represents AFRILECTRICAL\'s commitment to community development. Over 12 months, our team designed and implemented comprehensive electrical infrastructure, bringing power to 8,500 households across 15 previously underserved communities.',
    author: 'Sipho Dlamini',
    role: 'Chief Electrical Engineer',
    date: '2023-11-15',
    readTime: '8 min read',
    category: 'Case Study',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    featured: true,
    tags: ['Rural Electrification', 'Community Development', 'KwaZulu-Natal'],
    metrics: [
      { value: '15', label: 'Communities' },
      { value: '8.5K', label: 'Households Connected' },
      { value: '12', label: 'Months Duration' }
    ]
  },
  {
    id: 2,
    type: 'Innovation Spotlight',
    title: 'Smart Security Solutions: Protecting Pietermaritzburg Communities',
    excerpt: 'How AFRILECTRICAL\'s integrated security systems are enhancing safety and peace of mind for residents and businesses.',
    content: 'The Scottsville Security Upgrade project showcases our expertise in comprehensive security design and installation. Working closely with the community, we implemented state-of-the-art CCTV surveillance, access control, and integrated alarm systems.',
    author: 'Thandiwe Khumalo',
    role: 'Security Systems Specialist',
    date: '2023-11-08',
    readTime: '6 min read',
    category: 'Innovation',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    featured: false,
    tags: ['Security Systems', 'CCTV', 'Community Safety'],
    metrics: [
      { value: '150', label: 'Units Protected' },
      { value: '64', label: 'Cameras Installed' },
      { value: '100%', label: 'Coverage' }
    ]
  },
  {
    id: 3,
    type: 'Leadership Interview',
    title: 'Building Excellence: A Conversation with Our Managing Director',
    excerpt: 'Nomusa Mthembu shares insights on AFRILECTRICAL\'s journey, our commitment to BBBEE transformation, and the future of engineering in KwaZulu-Natal.',
    content: 'In this exclusive interview, Managing Director Nomusa Mthembu discusses AFRILECTRICAL\'s growth as a 100% black-owned engineering firm, our commitment to quality and community development, and the exciting opportunities ahead.',
    author: 'Mpho Radebe',
    role: 'Project Manager',
    date: '2023-10-25',
    readTime: '12 min read',
    category: 'Interview',
    image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    featured: false,
    tags: ['Leadership', 'BBBEE', 'Transformation'],
    metrics: [
      { value: '8', label: 'Years Excellence' },
      { value: 'Level 1', label: 'BBBEE Status' },
      { value: '120+', label: 'Projects Delivered' }
    ]
  },
  {
    id: 4,
    type: 'Company News',
    title: 'AFRILECTRICAL Expands Service Offerings with Town Planning',
    excerpt: 'We\'re excited to announce the addition of Town & Regional Planning services to our comprehensive engineering solutions.',
    content: 'This expansion strengthens our ability to provide integrated engineering solutions, from spatial development frameworks to infrastructure planning, supporting sustainable development across KwaZulu-Natal.',
    author: 'Thandiwe Khumalo',
    role: 'Civil Engineering Lead',
    date: '2023-10-18',
    readTime: '4 min read',
    category: 'News',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    featured: false,
    tags: ['Town Planning', 'Service Expansion', 'Development'],
    metrics: [
      { value: '5', label: 'Service Areas' },
      { value: '100%', label: 'BBBEE Compliant' },
      { value: '8', label: 'Years Experience' }
    ]
  },
  {
    id: 5,
    type: 'Technical Deep Dive',
    title: 'Healthcare Engineering: Critical Systems for the Midlands Medical Centre',
    excerpt: 'Exploring our approach to designing and installing mission-critical electrical systems for healthcare facilities.',
    content: 'The Midlands Medical Centre project highlights our expertise in healthcare electrical systems, including emergency power supplies, medical gas systems, and specialized lighting for surgical suites.',
    author: 'Sipho Dlamini',
    role: 'Chief Electrical Engineer',
    date: '2023-10-10',
    readTime: '10 min read',
    category: 'Technical',
    image: 'https://images.unsplash.com/photo-1516841273335-e39b37888115?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    featured: false,
    tags: ['Healthcare', 'Emergency Power', 'Medical Systems'],
    metrics: [
      { value: '99.9%', label: 'System Uptime' },
      { value: '50K', label: 'Patients/Year' },
      { value: '24/7', label: 'Emergency Power' }
    ]
  },
  {
    id: 6,
    type: 'Industry Insights',
    title: 'Engineering Excellence in KwaZulu-Natal: Industry Outlook 2024',
    excerpt: 'Analyzing infrastructure development trends and opportunities in KwaZulu-Natal\'s growing engineering sector.',
    content: 'As KwaZulu-Natal continues to develop, the demand for quality engineering services grows. This analysis explores the opportunities for sustainable development and infrastructure advancement in our province.',
    author: 'Nomusa Mthembu',
    role: 'Managing Director',
    date: '2023-09-28',
    readTime: '15 min read',
    category: 'Research',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    featured: false,
    tags: ['KwaZulu-Natal', 'Infrastructure', 'Development'],
    metrics: [
      { value: '2024', label: 'Outlook Year' },
      { value: '5', label: 'Service Areas' },
      { value: 'Level 1', label: 'BBBEE Status' }
    ]
  }
];

const categories = [
  { id: 'all', name: 'All Stories' },
  { id: 'Case Study', name: 'Case Studies' },
  { id: 'Innovation', name: 'Innovation' },
  { id: 'Interview', name: 'Interviews' },
  { id: 'News', name: 'Company News' },
  { id: 'Technical', name: 'Technical' },
  { id: 'Research', name: 'Research' }
];

const Stories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStory, setSelectedStory] = useState<number | null>(null);

  // Auto-scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredStories = stories.filter(story => {
    const matchesCategory = selectedCategory === 'all' || story.category === selectedCategory;
    const matchesSearch = story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         story.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         story.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredStory = stories.find(s => s.featured);
  const regularStories = filteredStories.filter(s => !s.featured);

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
              Stories & Insights
            </motion.div>
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span
                initial={{ y: 100, rotateX: -90 }}
                animate={{ y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="block"
              >
                Stories from the
              </motion.span>
              <motion.span 
                className="block text-4xl lg:text-5xl text-gray-600 font-light"
                initial={{ y: 100, opacity: 0, rotateX: -90 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                field & beyond
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Discover the stories behind our projects, innovations, and the people who are building better communities across KwaZulu-Natal through engineering excellence.
            </motion.p>
            
            {/* Animated decorative elements */}
            <motion.div
              className="flex justify-center mt-8 space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-gray-400 rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                />
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
                  {category.name}
                </Button>
              ))}
            </div>

            {/* Search */}
            <div className="w-full lg:w-auto">
              <Input
                placeholder="Search stories..."
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

      {/* Featured Story */}
      {featuredStory && selectedCategory === 'all' && (
        <ScrollReveal>
          <section className="py-20 px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-8 text-center">
                Featured Story
              </div>
              
              <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  <Card className="overflow-hidden border border-gray-200 shadow-lg h-full">
                    <CardBody className="p-0 h-full">
                      <div className="relative h-80">
                        <Image
                          src={featuredStory.image}
                          alt={featuredStory.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-6 left-6">
                          <span className="px-3 py-1 text-xs font-medium bg-white text-gray-900 rounded-full">
                            {featuredStory.type}
                          </span>
                        </div>
                      </div>

                      <div className="p-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                          {featuredStory.title}
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                          {featuredStory.content}
                        </p>

                        <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                          <div className="flex items-center gap-4">
                            <div>
                              <div className="font-medium text-gray-900">{featuredStory.author}</div>
                              <div className="text-sm text-gray-500">{featuredStory.role}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-500">{featuredStory.readTime}</div>
                            <div className="text-sm text-gray-500">
                              {new Date(featuredStory.date).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Project Impact</h3>
                    <div className="space-y-4">
                      {featuredStory.metrics.map((metric, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                          <span className="text-gray-600">{metric.label}</span>
                          <span className="font-bold text-gray-900">{metric.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Related Topics</h3>
                    <div className="flex flex-wrap gap-2">
                      {featuredStory.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button 
                    variant="bordered"
                    className="w-full border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-medium transition-all duration-300"
                  >
                    Read Full Story
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>
      )}

      {/* Stories Grid */}
      <ScrollReveal>
        <section className="py-20 px-8 lg:px-16 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {regularStories.length > 0 ? (
              <div className="space-y-12">
                {regularStories.map((story, index) => (
                  <motion.div
                    key={story.id}
                    initial={{ opacity: 0, y: 60, rotateX: -15 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.2,
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      y: -8,
                      transition: { duration: 0.3 }
                    }}
                    className="group cursor-pointer perspective-1000"
                    onClick={() => setSelectedStory(selectedStory === story.id ? null : story.id)}
                  >
                    <motion.div 
                      className="grid lg:grid-cols-4 gap-8 items-center"
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div 
                        className="lg:col-span-1"
                        initial={{ opacity: 0, x: -50, rotateY: -30 }}
                        animate={{ opacity: 1, x: 0, rotateY: 0 }}
                        transition={{ 
                          duration: 0.8, 
                          delay: index * 0.2 + 0.2,
                          ease: "easeOut"
                        }}
                        whileHover={{ 
                          rotateY: 5,
                          scale: 1.05,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <div className="relative aspect-square overflow-hidden rounded-lg">
                          <motion.div
                            initial={{ scale: 1.3, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                          >
                            <Image
                              src={story.image}
                              alt={story.title}
                              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                            />
                          </motion.div>
                          
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                          
                          <motion.div 
                            className="absolute top-4 left-4"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ 
                              duration: 0.6, 
                              delay: index * 0.2 + 0.5,
                              type: "spring",
                              stiffness: 200
                            }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <span className="px-3 py-1 text-xs font-medium bg-white/95 text-gray-900 rounded-full backdrop-blur-sm">
                              {story.type}
                            </span>
                          </motion.div>
                        </div>
                      </motion.div>

                      <motion.div 
                        className="lg:col-span-2"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                      >
                        <motion.div 
                          className="text-sm text-gray-500 mb-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                        >
                          {story.category}
                        </motion.div>
                        <motion.h3 
                          className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-600 transition-colors"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                          whileHover={{ x: 5 }}
                        >
                          {story.title}
                        </motion.h3>
                        <motion.p 
                          className="text-gray-600 leading-relaxed mb-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                        >
                          {story.excerpt}
                        </motion.p>
                        
                        <motion.div 
                          className="flex items-center gap-6 text-sm text-gray-500"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 + 0.7 }}
                        >
                          <motion.span whileHover={{ scale: 1.05 }}>By {story.author}</motion.span>
                          <motion.span whileHover={{ scale: 1.05 }}>{story.readTime}</motion.span>
                          <motion.span whileHover={{ scale: 1.05 }}>{new Date(story.date).toLocaleDateString()}</motion.span>
                        </motion.div>

                        {selectedStory === story.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, scale: 0.95 }}
                            animate={{ opacity: 1, height: 'auto', scale: 1 }}
                            exit={{ opacity: 0, height: 0, scale: 0.95 }}
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
                              {story.content}
                            </motion.p>
                            <motion.div 
                              className="flex flex-wrap gap-2"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, delay: 0.2 }}
                            >
                              {story.tags.map((tag, i) => (
                                <motion.span 
                                  key={tag} 
                                  className="px-3 py-1 text-xs bg-white text-gray-700 rounded-full border"
                                  initial={{ scale: 0, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  transition={{ 
                                    duration: 0.3, 
                                    delay: 0.3 + i * 0.1,
                                    type: "spring"
                                  }}
                                  whileHover={{ scale: 1.1 }}
                                >
                                  {tag}
                                </motion.span>
                              ))}
                            </motion.div>
                          </motion.div>
                        )}
                      </motion.div>

                      <motion.div 
                        className="lg:col-span-1"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                      >
                        <div className="space-y-4">
                          {story.metrics.map((metric, i) => (
                            <motion.div 
                              key={i} 
                              className="text-center lg:text-right"
                              initial={{ scale: 0, rotateY: -90 }}
                              animate={{ scale: 1, rotateY: 0 }}
                              transition={{ 
                                duration: 0.6, 
                                delay: index * 0.2 + 0.6 + i * 0.1,
                                type: "spring",
                                stiffness: 120
                              }}
                              whileHover={{ 
                                scale: 1.1,
                                transition: { duration: 0.2 }
                              }}
                            >
                              <motion.div 
                                className="text-2xl font-bold text-gray-900"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.2 + 0.8 + i * 0.1 }}
                              >
                                {metric.value}
                              </motion.div>
                              <motion.div 
                                className="text-sm text-gray-500"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.2 + 0.9 + i * 0.1 }}
                              >
                                {metric.label}
                              </motion.div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </motion.div>

                    <motion.div 
                      className="mt-8 h-px bg-gray-200"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.8 }}
                    />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <Icon name="search" size={64} color="#d1d5db" className="text-gray-300 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No stories found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>
      </ScrollReveal>

      {/* Newsletter Section */}
      <section className="py-24 px-8 lg:px-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">
            Stay Updated with Our Latest Stories
          </h3>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Get insights, project updates, and industry analysis delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              type="email"
              classNames={{
                input: "text-gray-900",
                inputWrapper: "bg-white border-0"
              }}
              className="flex-1"
            />
            <Button 
              variant="bordered"
              className="border-white text-white hover:bg-white hover:text-gray-900 font-medium px-8 transition-all duration-300"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stories;
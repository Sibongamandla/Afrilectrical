import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Image, Button, Input } from '@heroui/react';
import { ScrollReveal } from '../components/ui';
import { Icon } from '../components/ui';
import CallToActionSection from '../components/shared/CallToActionSection';

// AFRILECTRICAL industry news
const newsArticles = [
  {
    id: 1,
    title: 'AFRILECTRICAL Strengthens BBBEE Commitment with Level 1 Status',
    excerpt: 'AFRILECTRICAL maintains its Level 1 BBBEE contributor status, reinforcing its commitment to transformation in the engineering sector.',
    content: 'As a 100% black-owned consulting engineering firm, AFRILECTRICAL continues to lead by example in economic transformation, creating opportunities and building capacity within local communities across KwaZulu-Natal.',
    category: 'Achievement',
    date: '2023-12-01',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    featured: true,
    tags: ['BBBEE', 'Transformation', 'Achievement'],
    author: 'AFRILECTRICAL Communications'
  },
  {
    id: 2,
    title: 'KwaZulu-Natal Engineering Sector Shows Strong Growth in 2023',
    excerpt: 'Industry report highlights significant growth in engineering services demand across KwaZulu-Natal, with AFRILECTRICAL contributing to regional development.',
    content: 'The provincial engineering sector has shown remarkable resilience and growth, with increased demand for electrical consulting, civil engineering, and security systems across both urban and rural areas.',
    category: 'Industry News',
    date: '2023-11-28',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    featured: false,
    tags: ['KwaZulu-Natal', 'Growth', 'Engineering'],
    author: 'Industry Analysis'
  },
  {
    id: 3,
    title: 'Pietermaritzburg Industrial Development Drives Engineering Demand',
    excerpt: 'New industrial developments in the Pietermaritzburg area create increased demand for comprehensive engineering services.',
    content: 'The growth in industrial activity has created opportunities for local engineering firms like AFRILECTRICAL to provide electrical consulting, civil engineering, and security solutions for new developments.',
    category: 'Development',
    date: '2023-11-25',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    featured: false,
    tags: ['Pietermaritzburg', 'Industrial', 'Development'],
    author: 'Development News'
  },
  {
    id: 4,
    title: 'AFRILECTRICAL Expands Team with Senior Engineering Appointments',
    excerpt: 'AFRILECTRICAL announces key senior appointments to support growing project portfolio and service expansion.',
    content: 'The new appointments strengthen our capabilities across all service areas, bringing additional expertise in electrical consulting, civil engineering, and project management to better serve our clients.',
    category: 'Company News',
    date: '2023-11-20',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80',
    featured: false,
    tags: ['Team Growth', 'Appointments', 'Expansion'],
    author: 'AFRILECTRICAL HR'
  },
  {
    id: 5,
    title: 'South African Engineering Sector Embraces Digital Transformation',
    excerpt: 'Industry trend toward digital tools and technologies creates new opportunities for engineering firms to enhance service delivery.',
    content: 'The adoption of digital design tools, project management software, and remote collaboration technologies is transforming how engineering services are delivered across South Africa.',
    category: 'Technology',
    date: '2023-11-15',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    featured: false,
    tags: ['Digital Transformation', 'Technology', 'Innovation'],
    author: 'Industry Technology'
  },
  {
    id: 6,
    title: 'Rural Electrification Programs Show Positive Impact in KwaZulu-Natal',
    excerpt: 'Government and private sector collaboration delivers improved electricity access to rural communities across the province.',
    content: 'Rural electrification initiatives have successfully brought reliable power to previously underserved communities, with engineering firms like AFRILECTRICAL playing key roles in project delivery.',
    category: 'Social Impact',
    date: '2023-11-10',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    featured: false,
    tags: ['Rural Electrification', 'Community', 'Infrastructure'],
    author: 'Infrastructure Development'
  }
];

const categories = [
  { id: 'all', name: 'All News' },
  { id: 'Achievement', name: 'Achievements' },
  { id: 'Industry News', name: 'Industry News' },
  { id: 'Development', name: 'Development' },
  { id: 'Company News', name: 'Company News' },
  { id: 'Technology', name: 'Technology' },
  { id: 'Social Impact', name: 'Social Impact' }
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Achievement': return 'bg-green-100 text-green-800 border-green-200';
    case 'Industry News': return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'Development': return 'bg-purple-100 text-purple-800 border-purple-200';
    case 'Company News': return 'bg-orange-100 text-orange-800 border-orange-200';
    case 'Technology': return 'bg-indigo-100 text-indigo-800 border-indigo-200';
    case 'Social Impact': return 'bg-pink-100 text-pink-800 border-pink-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Auto-scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredNews = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = newsArticles.find(article => article.featured);
  const regularNews = filteredNews.filter(article => !article.featured);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
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
              Latest News & Updates
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Stay Informed with
              <span className="block text-4xl lg:text-5xl text-gray-600 font-light">
                industry insights
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get the latest updates on our projects, partnerships, innovations, and industry developments shaping Africa's electrical infrastructure landscape.
            </p>
          </motion.div>
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
                placeholder="Search news..."
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

      {/* Featured Article */}
      {featuredArticle && selectedCategory === 'all' && (
        <ScrollReveal>
          <section className="py-20 px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-8 text-center">
                Breaking News
              </div>
              
              <Card className="overflow-hidden border border-gray-200 shadow-lg">
                <CardBody className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative h-80 lg:h-auto overflow-hidden">
                      <Image
                        src={featuredArticle.image}
                        alt={featuredArticle.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-6 left-6">
                        <span className={`px-3 py-1 text-xs font-medium border rounded-full ${getCategoryColor(featuredArticle.category)}`}>
                          {featuredArticle.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                        {featuredArticle.title}
                      </h2>
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        {featuredArticle.content}
                      </p>

                      <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                        <div className="flex items-center gap-4">
                          <div>
                            <div className="font-medium text-gray-900">{featuredArticle.author}</div>
                            <div className="text-sm text-gray-500">{featuredArticle.readTime}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-500">
                            {new Date(featuredArticle.date).toLocaleDateString()}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-6">
                        {featuredArticle.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                            {tag}
                          </span>
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

      {/* News Grid */}
      <ScrollReveal>
        <section className="py-20 px-8 lg:px-16 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {regularNews.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularNews.map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="h-full overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 group">
                      <CardBody className="p-0 flex flex-col">
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-4 right-4">
                            <span className={`px-3 py-1 text-xs font-medium border rounded-full ${getCategoryColor(article.category)}`}>
                              {article.category}
                            </span>
                          </div>
                        </div>

                        <div className="p-6 flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-600 transition-colors leading-tight">
                            {article.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed mb-4">
                            {article.excerpt}
                          </p>

                          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                            <span>{article.author}</span>
                            <span>{article.readTime}</span>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">
                              {new Date(article.date).toLocaleDateString()}
                            </span>
                            <Button 
                              variant="bordered"
                              size="sm"
                              className="border-gray-300 text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-all duration-200"
                            >
                              Read More
                            </Button>
                          </div>

                          <div className="flex flex-wrap gap-2 mt-4">
                            {article.tags.slice(0, 2).map((tag) => (
                              <span key={tag} className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <Icon name="search" size={64} color="#d1d5db" className="text-gray-300 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No news found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>
      </ScrollReveal>

      <CallToActionSection
        title="Never Miss an Update"
        description="Subscribe to our newsletter for the latest news, project updates, and industry insights delivered directly to your inbox."
        buttonText="Subscribe"
        variant="newsletter"
        isNewsletter={true}
        newsletterProps={{
          email,
          setEmail,
          subscribed,
          onSubmit: handleSubscribe
        }}
      />

      {subscribed && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-100 text-green-800 text-center py-4 px-8"
        >
          Thank you for subscribing! We'll keep you updated.
        </motion.div>
      )}
    </div>
  );
};

export default News;
import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Badge
} from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from './ui';

const HeaderHeroUI: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Stories', href: '/stories' },
    { name: 'Expertise', href: '/expertise' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' }
  ];

  const solutionItems = [
    { name: 'Buildings', href: '/solutions/buildings', icon: 'home' },
    { name: 'Renewable Energy', href: '/solutions/renewable-energy', icon: 'sun' },
    { name: 'Industry', href: '/solutions/industry', icon: 'cpu' },
    { name: 'Risk & Safety', href: '/solutions/risk-and-safety', icon: 'shield' },
    { name: 'Sustainability', href: '/solutions/sustainability-and-environment', icon: 'leaf' },
    { name: 'Power Grid', href: '/solutions/transmission-and-distribution', icon: 'zap' },
    { name: 'Urban Planning', href: '/solutions/urban-planning', icon: 'map' },
    { name: 'Transportation', href: '/solutions/transportation-and-mobility', icon: 'truck' }
  ];

  return (
    <Navbar 
      onMenuOpenChange={setIsMenuOpen}
      className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50"
      maxWidth="full"
      height="64px"
      classNames={{
        wrapper: "bg-white/95 backdrop-blur-md",
        brand: "",
        content: "",
        item: "",
        menu: "bg-white/95 backdrop-blur-md",
        menuItem: ""
      }}
    >
      {/* Logo/Brand */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-primary-600"
        />
        <NavbarBrand>
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gray-900 flex items-center justify-center">
              <Icon name="lightning" size={24} color="white" className="text-white" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">
                Afrilectrical
              </p>
              <p className="hidden sm:block text-xs text-gray-500 -mt-1">Engineering Excellence</p>
            </div>
          </motion.div>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Navigation */}
      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarItem>
          <Link 
            href="/" 
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link 
            href="/about" 
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button 
                variant="light" 
                className="text-gray-700 hover:text-gray-900 font-medium p-0 h-auto"
                endContent={<Icon name="chevron-down" size={16} />}
              >
                Solutions
              </Button>
            </DropdownTrigger>
            <DropdownMenu 
              aria-label="Solutions"
              className="min-w-[280px] bg-white/95 backdrop-blur-md border border-gray-200 shadow-lg"
              itemClasses={{
                base: "gap-3 p-3 hover:bg-gray-50 transition-colors",
                title: "text-base font-semibold text-gray-900",
                description: "text-small text-gray-500"
              }}
            >
              {solutionItems.map((item) => (
                <DropdownItem
                  key={item.name}
                  href={item.href}
                  startContent={
                    <div className="p-2 rounded-lg bg-gray-100 text-gray-700">
                      <Icon name={item.icon as any} size={18} />
                    </div>
                  }
                  className="text-gray-700 hover:text-gray-900"
                >
                  {item.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <Link 
            href="/projects" 
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link 
            href="/stories" 
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            Stories
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link 
            href="/expertise" 
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            Expertise
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Badge content="5" color="default" size="sm" className="bg-gray-900 text-white">
            <Link 
              href="/news" 
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              News
            </Link>
          </Badge>
        </NavbarItem>
      </NavbarContent>

      {/* Desktop CTA */}
      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex gap-3">
          <Link 
            href="/contact"
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            Contact
          </Link>
          <Button 
            variant="bordered" 
            color="primary"
            size="sm"
            className="font-medium border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900"
            href="/careers"
            as={Link}
          >
            Careers
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-white/95 backdrop-blur-md">
        <div className="flex flex-col gap-4 pt-6">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={item.name}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 font-medium text-lg"
                  size="lg"
                >
                  {item.name}
                </Link>
              </motion.div>
            </NavbarMenuItem>
          ))}
          
          {/* Mobile Solutions */}
          <NavbarMenuItem>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              className="mt-4"
            >
              <p className="text-primary-600 font-semibold mb-3">Solutions</p>
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3">
                {solutionItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-2 p-3 rounded-lg bg-gray-50 hover:bg-primary-50 transition-colors"
                  >
                    <Icon name={item.icon as any} size={16} className="text-primary-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-700 truncate">{item.name}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </NavbarMenuItem>

          {/* Mobile CTA */}
          <NavbarMenuItem>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              className="flex flex-col gap-3 mt-6"
            >
              <Button 
                color="primary" 
                className="font-medium text-white w-full"
                endContent={<Icon name="arrow-right" size={16} />}
              >
                Get Started
              </Button>
              <Button 
                variant="bordered" 
                color="primary"
                className="font-medium w-full"
              >
                View Careers
              </Button>
            </motion.div>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </Navbar>
  );
};

export default HeaderHeroUI;
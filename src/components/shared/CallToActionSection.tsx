import React from 'react';
import { motion } from 'framer-motion';
import { Button, Input } from '@heroui/react';
import { ScrollReveal } from '../ui';

interface CallToActionSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonAction?: () => void;
  buttonHref?: string;
  variant?: 'default' | 'blue' | 'newsletter';
  compact?: boolean;
  className?: string;
  // Newsletter specific props
  isNewsletter?: boolean;
  newsletterProps?: {
    email: string;
    setEmail: (email: string) => void;
    subscribed: boolean;
    onSubmit: (e: React.FormEvent) => void;
  };
}

const CallToActionSection: React.FC<CallToActionSectionProps> = ({
  title,
  description,
  buttonText,
  buttonAction,
  buttonHref,
  variant = 'default',
  compact = false,
  className = '',
  isNewsletter = false,
  newsletterProps
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'blue':
        return {
          sectionClass: 'bg-blue-600 text-white',
          buttonClass: 'bg-white text-blue-600 hover:bg-blue-50',
          descriptionClass: 'text-blue-100'
        };
      case 'newsletter':
        return {
          sectionClass: 'bg-gray-900 text-white',
          buttonClass: 'border-white text-white hover:bg-white hover:text-gray-900',
          descriptionClass: 'text-gray-300'
        };
      default:
        return {
          sectionClass: 'bg-white text-gray-900',
          buttonClass: 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white',
          descriptionClass: 'text-gray-600'
        };
    }
  };

  const styles = getVariantStyles();
  const paddingClass = compact ? 'py-16' : 'py-24';

  const ButtonComponent = () => (
    <Button 
      variant={variant === 'default' ? 'bordered' : 'solid'}
      size="lg"
      className={`${styles.buttonClass} font-semibold px-8 py-3 transition-all duration-300 ${className}`}
      onClick={buttonAction}
      as={buttonHref ? 'a' : 'button'}
      href={buttonHref}
    >
      {buttonText}
    </Button>
  );

  return (
    <ScrollReveal>
      <section className={`${paddingClass} px-8 lg:px-16 ${styles.sectionClass} relative overflow-hidden`}>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={`${compact ? 'text-2xl lg:text-3xl' : 'text-3xl lg:text-4xl'} font-bold mb-4 leading-tight`}>
              {title}
            </h3>
            <p className={`text-lg ${styles.descriptionClass} mb-8 max-w-2xl mx-auto`}>
              {description}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isNewsletter && newsletterProps ? (
              <form onSubmit={newsletterProps.onSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  placeholder="Enter your email"
                  type="email"
                  value={newsletterProps.email}
                  onChange={(e) => newsletterProps.setEmail(e.target.value)}
                  required
                  classNames={{
                    input: "text-gray-900",
                    inputWrapper: "bg-white border-0"
                  }}
                  className="flex-1"
                />
                <Button 
                  type="submit"
                  variant="bordered"
                  className={styles.buttonClass}
                  disabled={newsletterProps.subscribed}
                >
                  {newsletterProps.subscribed ? 'Subscribed!' : buttonText}
                </Button>
              </form>
            ) : (
              <ButtonComponent />
            )}
          </motion.div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default CallToActionSection;
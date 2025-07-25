// Image optimization utilities

// Generate responsive image URLs for Unsplash
export const generateResponsiveImageUrl = (
  baseUrl: string,
  width: number,
  height?: number,
  quality: number = 80
): string => {
  // Handle Unsplash URLs specifically
  if (baseUrl.includes('unsplash.com')) {
    const params = new URLSearchParams();
    params.set('w', width.toString());
    if (height) {
      params.set('h', height.toString());
    }
    params.set('q', quality.toString());
    params.set('fm', 'webp'); // Use WebP format when supported
    params.set('fit', 'crop');
    
    return `${baseUrl}?${params.toString()}`;
  }
  
  return baseUrl;
};

// Create responsive image sources for different screen sizes
export const createResponsiveSources = (baseUrl: string) => {
  return {
    mobile: generateResponsiveImageUrl(baseUrl, 480, 320),
    tablet: generateResponsiveImageUrl(baseUrl, 768, 512),
    desktop: generateResponsiveImageUrl(baseUrl, 1200, 800),
    large: generateResponsiveImageUrl(baseUrl, 1920, 1280)
  };
};

// WebP support detection
export const supportsWebP = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
};

// Lazy loading image component props
export interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  placeholder?: string;
}

// Image preloader with progressive enhancement
export const createImagePreloader = () => {
  const imageCache = new Map<string, boolean>();
  
  return {
    preload: (src: string): Promise<void> => {
      if (imageCache.has(src)) {
        return Promise.resolve();
      }
      
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          imageCache.set(src, true);
          resolve();
        };
        img.onerror = reject;
        img.src = src;
      });
    },
    
    isLoaded: (src: string): boolean => {
      return imageCache.has(src);
    },
    
    clear: (): void => {
      imageCache.clear();
    }
  };
};

// Critical images that should be preloaded
export const CRITICAL_IMAGES = [
  'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e',
  'https://images.unsplash.com/photo-1509391366360-2e959784a276',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'
];

// Preload critical images
export const preloadCriticalImages = async (): Promise<void> => {
  const preloader = createImagePreloader();
  
  try {
    await Promise.all(
      CRITICAL_IMAGES.map(src => 
        preloader.preload(generateResponsiveImageUrl(src, 800, 600))
      )
    );
    console.log('Critical images preloaded successfully');
  } catch (error) {
    console.warn('Some critical images failed to preload:', error);
  }
};
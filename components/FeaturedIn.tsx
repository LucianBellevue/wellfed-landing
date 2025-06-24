"use client"

import { motion } from "framer-motion";
import Image from "next/image";

type FeaturedInProps = {
  className?: string;
}

export function FeaturedIn({ className = '' }: FeaturedInProps) {
  const featuredLogos = [
    {
      name: "Apple News",
      image: "/images/logos/apple_badge.svg",
      url: "https://apple.news/AkEC_cWptQhmXvZSbqgg6uw"
    },
    {
      name: "The Grit Daily",
      image: "/images/logos/GritDaily_Logo-Horizontal_Black_Blue.png",
      url: "https://gritdaily.com/jaclynn-b-morgan-pioneering-health-and-nutrition/"
    },
    {
      name: "Business Insider",
      image: "/images/logos/business_insider_logo.png",
      url: "https://markets.businessinsider.com/news/stocks/marquis-who-s-who-honors-jaclynn-b-morgan-for-expertise-in-health-care-1034808067"
    }
  ];

  return (
    <section className={`py-16 relative ${className}`} id="featured-in">
      {/* Light background with subtle pattern */}
      <div className="absolute inset-0 bg-white opacity-80"></div>
      
      <div className="relative z-10 text-center w-full px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary">As Featured In</span>
        </motion.h2>
        
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-16 sm:gap-x-16 md:gap-x-24">
            {featuredLogos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <a 
                  href={logo.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center transition-all duration-300"
                >
                  {/* Drop shadow effect underneath */}
                  <div 
                    className="absolute w-32 h-16 sm:w-40 sm:h-20 opacity-30 blur-md" 
                    style={{ 
                      background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 70%)',
                      transform: 'translateY(15px) scale(0.9)',
                      zIndex: 1
                    }} 
                  />
                  
                  {/* Floating logo */}
                  <motion.div 
                    className="relative z-10 w-40 h-24 sm:w-48 sm:h-28 flex items-center justify-center"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ 
                      duration: 4, 
                      ease: "easeInOut", 
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: index * 0.3
                    }}
                  >
                    <Image
                      src={logo.image}
                      alt={`${logo.name} logo`}
                      width={160}
                      height={80}
                      className="object-contain max-h-full max-w-full"
                      sizes="(max-width: 768px) 160px, 200px"
                    />
                  </motion.div>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
    </section>
  );
}

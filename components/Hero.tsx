// components/Hero.tsx
'use client'
import { AppDemo } from "@/components/AppDemo";
import { AppStoreLink } from "@/components/AppStoreLink";
import { GoogleStoreLink } from "@/components/GoogleStoreLink";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { PhoneFrame } from "@/components/PhoneFrame";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';

function PlayIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="11.5" stroke="#b64b29" />
      <path
        d="M9.5 14.382V9.618a.5.5 0 0 1 .724-.447l4.764 2.382a.5.5 0 0 1 0 .894l-4.764 2.382a.5.5 0 0 1-.724-.447Z"
        fill="#b64b29"
        stroke="#b64b29"
      />
    </svg>
  );
}

export function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerControls = useAnimation();
  
  // Parallax effect for background image
  const bgYPosition = useTransform(scrollY, [0, 500], ['0%', '20%']);
  
  // Trigger animations when component mounts
  useEffect(() => {
    headerControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    });
  }, [headerControls]);

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 xl:pb-36">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: bgYPosition }}
      >
        <Image
          src="/images/hero-food-bg.jpeg"
          alt="Healthy food background"
          fill
          priority
          sizes="100vw"
          quality={90}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </motion.div>
      
      {/* Gradient overlay to blend into white background */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-white" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-x-8 lg:gap-y-20">
          {/* Text Content */}
          <motion.div 
            className="lg:col-span-6 xl:col-span-5 z-10 relative px-1 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="block">Cook smarter,</span>
              <span className="block mt-1">eat better with</span>
              <motion.span 
                className="inline-block text-secondary"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                WellFed
              </motion.span>
            </motion.h1>
            
            <motion.div 
              className="mt-6 rounded-md bg-white/80 p-6 backdrop-blur-sm shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <p className="text-lg text-gray-800">
                Discover nutritious recipes tailored to your tastes, schedule
                meals with ease, and enjoy personalized ingredient suggestions.
                WellFed helps you build healthy eating habits, one delicious meal
                at a time.
              </p>
            </motion.div>
            
            <motion.div 
              className="mt-6 sm:mt-8 flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-4 mb-16 sm:mb-20 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                transition={{ type: "spring", stiffness: 400 }}
                className="shadow-lg"
              >
                <AppStoreLink color="white" />
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                transition={{ type: "spring", stiffness: 400 }}
                className="shadow-lg"
              >
                <GoogleStoreLink url="https://play.google.com/store/apps/details?id=com.example.yourapp" />
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Button
                  onClick={() => setIsVideoOpen(true)}
                  variant="outline"
                  color="primary"
                  className="relative z-10 border border-white/40 bg-white/30 backdrop-blur-sm text-primary hover:bg-white/40 w-full sm:w-auto flex items-center justify-center"
                >
                  <PlayIcon className="h-6 w-6 flex-none" />
                  <span className="ml-2.5">Watch how it works</span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Phone Frame - Positioned to overlap with Features section */}
          <div className="lg:col-span-6 xl:col-span-7 relative mt-0 lg:mt-0">
            <div className="relative h-0 md:h-[500px] lg:h-[600px]">
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-auto md:right-[5%] lg:right-[10%] top-[-120px] sm:top-[-140px] md:top-auto md:bottom-[-80px] lg:bottom-[-120px] xl:bottom-[-180px] z-20 w-[280px] sm:w-[320px] md:w-[340px] lg:w-[366px] max-w-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{
                  filter: 'drop-shadow(0 25px 25px rgba(0,0,0,0.15))',
                }}
              >
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    repeatType: "reverse", 
                    ease: "easeInOut" 
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, rotate: -1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="transform scale-90 sm:scale-95 md:scale-100"
                  >
                    <PhoneFrame className="mx-auto" priority>
                      <AppDemo />
                    </PhoneFrame>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>

      {/* Video Modal */}
      {isVideoOpen && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="relative w-full max-w-4xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <motion.button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 flex items-center gap-2 text-lg font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
              Close
            </motion.button>
            <div className="relative pt-[56.25%] rounded-xl overflow-hidden shadow-2xl">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://biteable.com/watch/embed/4277806/9bf1d2fc53a65d17b8f1e45a3e5bbc41"
                allowFullScreen
                allow="autoplay"
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

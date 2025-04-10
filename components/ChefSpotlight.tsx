// components/ChefSpotlight.tsx
"use client";

import { Container } from "@/components/Container";
import Image from "next/image";
import { motion } from "framer-motion";

export function ChefSpotlight() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/5 rounded-full blur-3xl opacity-70"></div>
      
      <Container>
        {/* Heading & Description */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              Chef Spotlight
            </h2>
            <h3 className="text-xl sm:text-2xl font-medium text-gray-700 mb-6">
              Alex Nurmi
            </h3>
          </motion.div>
          
          <motion.p 
            className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A visionary gastronomist, harmonizing flavors and nutrition to craft
            a menu that not only tantalizes the taste buds but also nourishes
            the body. Like a{" "}
            <span className="italic font-medium text-primary">nutritional architect</span>, he designs
            culinary experiences that seamlessly integrate health-conscious
            ingredients, ensuring every dish contributes to the overall
            well-being of his diners.
          </motion.p>
        </motion.div>
        {/* Interactive Collage */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {[
            { src: "/images/chef5.jpeg", delay: 0 },
            { src: "/images/chef3.jpeg", delay: 0.1 },
            { src: "/images/chef2.jpeg", delay: 0.2 },
            { src: "/images/chef6.jpeg", delay: 0.3 }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ 
                scale: 1.05, 
                rotate: index % 2 === 0 ? 2 : -2,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ 
                duration: 0.4, 
                delay: item.delay,
                ease: "easeOut"
              }}
              className="relative h-64 overflow-hidden rounded-xl shadow-lg transform transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
              <Image
                src={item.src}
                alt={`Chef Alex Nurmi in action ${index + 1}`}
                width={500}
                height={300}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                className="transition-transform duration-500 ease-in-out hover:scale-110"
              />
              
              {index === 0 && (
                <motion.div 
                  className="absolute bottom-3 left-3 z-20 text-white font-medium text-sm px-3 py-1 bg-primary/80 rounded-full"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  Head Chef
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
        

      </Container>
    </section>
  );
}

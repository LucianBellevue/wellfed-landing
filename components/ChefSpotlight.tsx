// components/ChefSpotlight.tsx
"use client";

import { Container } from "@/components/Container";
import Image from "next/image";
import { motion } from "framer-motion";

export function ChefSpotlight() {
  return (
    <section className="py-16 bg-white">
      <Container>
        {/* Heading & Description */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
            Chef Spotlight
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            A visionary gastronomist, harmonizing flavors and nutrition to craft
            a menu that not only tantalizes the taste buds but also nourishes
            the body. Like a{" "}
            <span className="italic">nutritional architect</span>, he designs
            culinary experiences that seamlessly integrate health-conscious
            ingredients, ensuring every dish contributes to the overall
            well-being of his diners.
          </p>
        </div>
        {/* Interactive Collage */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "/images/chef1.jpg",
            "/images/chef2.jpg",
            "/images/chef3.jpg",
            "/images/chef4.jpg",
            "/images/chef5.jpg",
            "/images/chef6.jpg"
          ].map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
              transition={{ duration: 0.3 }}
              className="relative h-64 overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={src}
                alt={`Chef in action ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

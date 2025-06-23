"use client"

import { motion } from "framer-motion";
import Image from "next/image";

export function FeaturedIn() {
  const featuredLogos = [
    {
      name: "Apple News",
      image: "/images/logos/apple-news.png",
      url: "https://www.apple.com/newsroom/"
    },
    {
      name: "The Grit Daily",
      image: "/images/logos/grit-daily.png",
      url: "https://gritdaily.com/"
    },
    {
      name: "Business Insider",
      image: "/images/logos/business-insider.png",
      url: "https://www.businessinsider.com/"
    }
  ];

  return (
    <section className="relative z-20 pt-8 pb-4" id="featured-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 px-6 py-2 inline-block rounded-xl bg-white/30 backdrop-blur-md shadow-lg">
          As Featured In
        </h2>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 sm:gap-x-12">
          {featuredLogos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <a
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center w-48 h-24 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={logo.image}
                  alt={`${logo.name} logo`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

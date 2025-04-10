// app/careers/page.tsx
"use client";

import { Container } from '@/components/Container'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Careers() {
  return (
    <Container>
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-16 mt-24"
      >
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-primary mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Join Our Team
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl text-gray-700 mb-8"
          >
            Help us revolutionize the way people experience food and nutrition
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative w-full h-64 md:h-80 mb-12 rounded-2xl overflow-hidden"
          >
            <Image 
              src="/images/team-placeholder.jpg" 
              alt="WellFed Team" 
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-2xl"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              We&apos;re Growing!
            </h2>
            
            <div className="text-lg text-gray-700 space-y-4">
              <p>
                At WellFed, we&apos;re building the future of personalized nutrition and meal planning. 
                Our mission is to make healthy eating simple, delicious, and accessible for everyone.
              </p>
              <p>
                We&apos;re currently building our team and will be posting open positions soon. 
                If you&apos;re passionate about food, nutrition, technology, and making a difference 
                in people&apos;s lives, we&apos;d love to hear from you!
              </p>
            </div>
            
            <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Get in Touch
              </h3>
              <p className="text-gray-700 mb-6">
                No open positions listed yet? Send your resume and tell us why you&apos;d be a great fit for WellFed.
              </p>
              <Link
                href="mailto:info@wellfed.us" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200"
              >
                Contact Us at info@wellfed.us
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Why Work With Us?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Impactful Work</h3>
                <p className="text-gray-700">Help people live healthier lives through better nutrition and meal planning.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexible Environment</h3>
                <p className="text-gray-700">Work in a modern, flexible environment that values work-life balance.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Growth Opportunities</h3>
                <p className="text-gray-700">Join a growing startup with plenty of opportunities to learn and advance.</p>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/"
                className="inline-flex items-center text-primary-600 hover:text-primary-800 transition-colors duration-200"
              >
                <span>Return to Home</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
    </Container>
  )
}

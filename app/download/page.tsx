'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function DownloadPage() {
  const [selectedPlatform, setSelectedPlatform] = useState<'android' | 'ios' | null>(null)
  
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="my-12 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary">
            Download WellFed
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your platform to download our app and start your journey to healthier eating habits today.
          </p>
        </motion.div>
        
        {/* Platform Selection */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Android Option */}
          <motion.div 
            className={`border-2 rounded-2xl p-6 cursor-pointer transition-all ${
              selectedPlatform === 'android' 
                ? 'border-primary bg-primary/50' 
                : 'border-gray-200 hover:border-primary hover:bg-gray-50'
            }`}
            onClick={() => setSelectedPlatform('android')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-black rounded-full p-3 mr-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.13333 2.66667C4.9 2.66667 4.66667 2.73333 4.46667 2.86667L12.8667 11.2667L15.8 8.33333L5.8 2.8C5.6 2.7 5.36667 2.66667 5.13333 2.66667ZM4 3.86667V20.1333C4 20.4 4.06667 20.6333 4.2 20.8333L12.6 12.4333L4 3.86667ZM16.8 9.06667L13.6 12.2667L16.8333 15.4667L20.9333 13.0667C21.6333 12.6667 21.6333 11.8 20.9333 11.4L16.8 9.06667ZM4.46667 21.1333C4.66667 21.2667 4.9 21.3333 5.13333 21.3333C5.36667 21.3333 5.6 21.3 5.8 21.2L15.8 15.6667L12.8667 12.7333L4.46667 21.1333Z" fill="white"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">Android</h3>
                <p className="text-gray-600">Download from Google Play</p>
              </div>
            </div>
            <p className="text-gray-500 mb-4">
              Get the latest version of WellFed for your Android device. Requires Android 8.0 or higher.
            </p>
            <Link 
              href="https://play.google.com/store/apps/details?id=com.wellfedv2.myapp&pcampaignid=web_share" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center w-full py-3 px-4 rounded-lg font-medium ${
                selectedPlatform === 'android' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="mr-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="currentColor"/>
                </svg>
              </span>
              Download for Android
            </Link>
          </motion.div>
          
          {/* iOS Option */}
          <motion.div 
            className={`border-2 rounded-2xl p-6 cursor-pointer transition-all ${
              selectedPlatform === 'ios' 
                ? 'border-primary bg-primary/50' 
                : 'border-gray-200 hover:border-primary hover:bg-gray-50'
            }`}
            onClick={() => setSelectedPlatform('ios')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-black rounded-full p-3 mr-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.1116 1.42857C16.0768 1.39955 14.6795 1.45759 13.1786 2.9375C11.6777 4.41741 11.8058 6.02679 11.8304 6.02679C11.8549 6.02679 13.3259 6.01562 14.7321 4.48661C16.1384 2.95759 16.1464 1.45759 16.1116 1.42857ZM20.7857 17.3594C20.7857 17.3304 19.0179 16.0379 19.0179 13.9955C19.0179 11.6518 21.1875 10.2857 21.2143 10.2679C21.2411 10.25 20.1696 8.67188 18.4554 8.67188C18.4286 8.67188 17.8125 8.64955 16.4732 9.19196C15.5893 9.55357 14.4375 10.1339 14.4375 10.1339C14.4375 10.1339 13.2946 9.53125 12.1339 9.11161C11.3304 8.83036 10.5179 8.67188 9.69643 8.67188C7.32143 8.67188 5.08929 10.4286 5.08929 13.4598C5.08929 15.0446 5.67857 16.7857 6.57143 18.2857C7.32143 19.5714 8.25 20.8571 9.5 20.8571C10.75 20.8571 11.1429 20.1429 12.6429 20.1429C14.1429 20.1429 14.5 20.8571 15.8571 20.8571C17.2143 20.8571 18.0714 19.5714 18.8214 18.2857C19.3929 17.2857 19.7143 16.2857 19.7143 16.2143C19.7143 16.1429 20.7857 17.3884 20.7857 17.3594Z" fill="white"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">iOS</h3>
                <p className="text-gray-600">Download from App Store</p>
              </div>
            </div>
            <p className="text-gray-500 mb-4">
              Get the latest version of WellFed for your iPhone or iPad. Requires iOS 14.0 or higher.
            </p>
            <Link 
              href="https://apps.apple.com/us/app/wellfed/id6743497707" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center w-full py-3 px-4 rounded-lg font-medium ${
                selectedPlatform === 'ios' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="mr-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="currentColor"/>
                </svg>
              </span>
              Download for iOS
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Features Section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-center mb-8">App Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Meal Planning</h3>
              <p className="text-gray-600">
                Plan your meals ahead of time with our easy-to-use meal planning tools.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Recipe Database</h3>
              <p className="text-gray-600">
                Access thousands of healthy recipes tailored to your dietary preferences.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 4V10M8 4V10M4 8H20M5 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44772 4 5 4Z" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Nutrition Tracking</h3>
              <p className="text-gray-600">
                Track your daily nutrition intake and monitor your progress over time.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

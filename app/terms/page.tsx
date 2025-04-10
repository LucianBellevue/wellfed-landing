// app/terms/page.tsx
"use client";

import { Container } from '@/components/Container'
import { motion } from 'framer-motion'

export default function TermsOfService() {
  return (
    <Container>
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-16 mt-24"
      >
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl font-bold text-gray-900 mb-8 text-center"
        >
          Terms of Service
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg text-gray-700 mb-6"
        >
          Welcome to WellFed! These Terms of Service (&quot;Terms&quot;) govern your use of the WellFed application
          and website (collectively, the &quot;Service&quot;). By accessing or using the Service, you agree to be bound
          by these Terms. If you do not agree to these Terms, please do not use the Service.
        </motion.p>

        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-2xl font-semibold text-gray-900 mt-8 mb-4"
        >
          1. Acceptance of Terms
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg text-gray-700 mb-6"
        >
          By creating an account or using any part of the Service, you acknowledge that you have read,
          understood, and agree to be bound by these Terms. If you are using the Service on behalf of an
          organization, you represent and warrant that you have the authority to bind that organization to
          these Terms.
        </motion.p>

        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-2xl font-semibold text-gray-900 mt-8 mb-4"
        >
          2. Account Registration and Security
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-lg text-gray-700 mb-6"
        >
          To use certain features of the Service, you may need to create an account. You agree to provide
          accurate, current, and complete information during the registration process and to update such
          information to keep it accurate, current, and complete. You are responsible for safeguarding your
          password and for all activities that occur under your account. You agree to notify us immediately
          of any unauthorized use of your account.
        </motion.p>

        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-2xl font-semibold text-gray-900 mt-8 mb-4"
        >
          3. User Content and Conduct
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-lg text-gray-700 mb-6"
        >
          Our Service allows you to post, store, and share content, including meal plans, recipes, and
          dietary information (&quot;User Content&quot;). You retain all rights in your User Content, but you grant
          WellFed a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish,
          translate, and distribute your User Content in connection with the Service.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="text-lg text-gray-700 mb-6"
        >
          You agree not to post User Content that:
        </motion.p>
        <motion.ul 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="list-disc list-inside text-lg text-gray-700 mb-6"
        >
          <li>Infringes on the intellectual property rights of others</li>
          <li>Contains harmful, threatening, abusive, or harassing content</li>
          <li>Contains false or misleading health or nutritional information</li>
          <li>Violates any applicable law or regulation</li>
          <li>Contains viruses, malware, or other harmful code</li>
        </motion.ul>

        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-2xl font-semibold text-gray-900 mt-8 mb-4"
        >
          4. Intellectual Property Rights
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-lg text-gray-700 mb-6"
        >
          The Service and its original content, features, and functionality are owned by WellFed and are
          protected by international copyright, trademark, patent, trade secret, and other intellectual
          property laws. You may not copy, modify, create derivative works from, publicly display, publicly
          perform, republish, download, or distribute any portion of the Service without prior written
          consent from WellFed.
        </motion.p>

        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="text-2xl font-semibold text-gray-900 mt-8 mb-4"
        >
          5. Disclaimer of Warranties
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="text-lg text-gray-700 mb-6"
        >
          THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS. WELLFED DISCLAIMS ALL WARRANTIES
          OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WELLFED DOES NOT WARRANT
          THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.95 }}
          className="text-lg text-gray-700 mb-6"
        >
          WELLFED DOES NOT PROVIDE MEDICAL ADVICE. THE CONTENT PROVIDED THROUGH THE SERVICE IS FOR
          INFORMATIONAL PURPOSES ONLY AND IS NOT INTENDED TO BE A SUBSTITUTE FOR PROFESSIONAL MEDICAL
          ADVICE, DIAGNOSIS, OR TREATMENT. ALWAYS SEEK THE ADVICE OF YOUR PHYSICIAN OR OTHER QUALIFIED
          HEALTH PROVIDER WITH ANY QUESTIONS YOU MAY HAVE REGARDING A MEDICAL CONDITION.
        </motion.p>

        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="text-2xl font-semibold text-gray-900 mt-8 mb-4"
        >
          6. Limitation of Liability
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="text-lg text-gray-700 mb-6"
        >
          IN NO EVENT SHALL WELLFED, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS, BE LIABLE FOR ANY
          INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION,
          LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO
          OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE.
        </motion.p>

        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="text-2xl font-semibold text-gray-900 mt-8 mb-4"
        >
          7. Termination
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="text-lg text-gray-700 mb-6"
        >
          We may terminate or suspend your account and access to the Service immediately, without prior
          notice or liability, for any reason whatsoever, including without limitation if you breach these
          Terms. Upon termination, your right to use the Service will immediately cease.
        </motion.p>

        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="text-2xl font-semibold text-gray-900 mt-8 mb-4"
        >
          8. Changes to Terms
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="text-lg text-gray-700 mb-6"
        >
          We reserve the right to modify or replace these Terms at any time. If a revision is material, we
          will provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes a
          material change will be determined at our sole discretion. By continuing to access or use our
          Service after any revisions become effective, you agree to be bound by the revised terms.
        </motion.p>

        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="text-2xl font-semibold text-gray-900 mt-8 mb-4"
        >
          9. Governing Law
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="text-lg text-gray-700 mb-6"
        >
          These Terms shall be governed by and construed in accordance with the laws of the United States,
          without regard to its conflict of law provisions. Any legal action or proceeding arising out of
          or relating to these Terms or the Service shall be brought exclusively in the federal or state
          courts located in the United States, and you consent to the personal jurisdiction of such courts.
        </motion.p>

        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.4 }}
          className="text-2xl font-semibold text-gray-900 mt-8 mb-4"
        >
          Contact Us
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.4 }}
          className="text-lg text-gray-700"
        >
          If you have any questions about these Terms of Service, please contact us at{' '}
          <a href="mailto:info@wellfed.us" className="text-primary underline">
            info@wellfed.us
          </a>.
        </motion.p>
      </motion.section>
    </Container>
  )
}

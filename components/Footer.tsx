// components/Footer.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { Container } from '@/components/Container'
import Logomark from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'

function QrCodeBorder(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <Container>
        {/* Slogan Section */}
        <div className="pt-8">
          <motion.h2
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary text-center"
          >
            Crave your health through great taste
          </motion.h2>
        </div>

        <div className="flex flex-col items-start justify-between gap-y-10 pb-6 pt-10 lg:flex-row lg:items-center lg:py-16">
          <div>
            <div className="flex items-center text-gray-900">
              <Logomark className="h-auto w-auto flex-none fill-primary" />
              <div className="ml-4">
                {/* Additional logo text can go here if needed */}
              </div>
            </div>
            <nav className="mt-11 flex gap-8">
              <NavLinks />
            </nav>
          </div>
          <div className="group relative -mx-4 flex items-center self-stretch p-4 transition-colors hover:bg-gray-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
            <div className="relative flex h-24 w-24 flex-none items-center justify-center">
              <QrCodeBorder className="absolute inset-0 h-full w-full stroke-gray-300 transition-colors group-hover:stroke-secondary" />
              <Image src="/images/qr-code.jpg" alt="QR code for app download" width={90} height={90} />
            </div>
            <div className="ml-8 lg:w-64">
              <p className="text-base font-semibold text-gray-900">
                <Link href="#">
                  <span className="absolute inset-0 sm:rounded-2xl" />
                  Download the app
                </Link>
              </p>
              <p className="mt-1 text-sm text-gray-700">
                Scan the QR code to download the app from the App Store.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:justify-between md:pt-6">
          <p className="flex justify-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} WellFed. All rights reserved.
            <Link href="/privacy" className="underline">Privacy Policy</Link>
          </p>
        </div>
      </Container>
    </footer>
  )
}

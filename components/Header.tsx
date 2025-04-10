'use client'

import Link from 'next/link'
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import Logo from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavLink(
  props: Omit<
    React.ComponentPropsWithoutRef<typeof PopoverButton<typeof Link>>,
    'as' | 'className'
  >,
) {
  return (
    <PopoverButton
      as={Link}
      className="block text-base leading-7 tracking-tight text-gray-700 font-medium hover:text-primary transition-colors duration-200 ease-in-out"
      {...props}
    />
  )
}

export function Header() {
  const { scrollY } = useScroll();
  
  // Transform opacity based on scroll position
  const headerBgOpacity = useTransform(scrollY, [0, 50], [0, 1]);
  const headerShadowOpacity = useTransform(scrollY, [0, 100], [0, 0.1]);
  
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 w-full z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.div 
        className="absolute inset-0 bg-white/80 backdrop-blur-md"
        style={{ 
          opacity: headerBgOpacity,
          boxShadow: useTransform(
            headerShadowOpacity,
            (opacity) => `0 4px 20px rgba(0, 0, 0, ${opacity})`
          )
        }}
      />
      <nav>
        <Container className="relative z-50 flex justify-between py-6">
          {/* Logo on left */}
          <motion.div 
            className="relative z-10 flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Link href="/" aria-label="Home">
                <Logo className="h-10 w-auto" />
              </Link>
            </motion.div>
            <div className="hidden lg:flex lg:ml-16 lg:gap-10">
              <NavLinks />
            </div>
          </motion.div>

          {/* Centered burger menu on mobile */}
          <motion.div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Popover>
              {({ open }: { open: boolean }) => (
                <>
                  <motion.div whileTap={{ scale: 0.9 }}>
                    <PopoverButton
                      className="relative z-[60] -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 ui-not-focus-visible:outline-none"
                      aria-label="Toggle site navigation"
                    >
                      {({ open }: { open: boolean }) =>
                        open ? (
                          <ChevronUpIcon className="h-6 w-6" />
                        ) : (
                          <MenuIcon className="h-6 w-6" />
                        )
                      }
                    </PopoverButton>
                  </motion.div>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <PopoverBackdrop
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                        />
                        <PopoverPanel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="fixed inset-x-0 top-0 z-50 origin-top rounded-b-2xl bg-white/90 backdrop-blur-md px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/10"
                        >
                          <div className="space-y-4">
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 }}
                            >
                              <MobileNavLink href="/#features">Features</MobileNavLink>
                            </motion.div>
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 }}
                            >
                              <MobileNavLink href="/#reviews">Reviews</MobileNavLink>
                            </motion.div>
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 }}
                            >
                              <MobileNavLink href="/#articles">Articles</MobileNavLink>
                            </motion.div>
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 }}
                            >
                              <MobileNavLink href="/#faqs">FAQs</MobileNavLink>
                            </motion.div>
                          </div>
                          <motion.div 
                            className="mt-8 flex flex-col gap-4"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                          >
                            <Button href="/download" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg">
                              Download the app
                            </Button>
                          </motion.div>
                        </PopoverPanel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
          </motion.div>

          {/* Right side buttons (desktop only) */}
          <motion.div 
            className="flex items-center gap-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="hidden lg:block"
            >
              <Button 
                href="/download" 
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-md"
              >
                Download
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </nav>
    </motion.header>
  )
}

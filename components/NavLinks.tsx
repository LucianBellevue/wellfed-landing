'use client'

import { useRef, useState, useMemo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'

interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'Features', href: '/#features' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'Articles', href: '/#articles' },
  { label: 'FAQs', href: '/#faqs' },
]

export function NavLinks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const timeoutRef = useRef<number | null>(null)
  const pathname = usePathname()

  // Memoize the nav items to prevent unnecessary re-renders
  const navLinks = useMemo(() => {
    return navItems.map(({ label, href }, index) => {
      const isActive = pathname === href || pathname.startsWith(`${href}/`)

      return (
        <Link
          key={label}
          href={href}
          className={`relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm transition-colors delay-150 ${
            isActive
              ? 'text-gray-900 font-medium'
              : 'text-gray-700 hover:text-gray-900 hover:delay-0'
          }`}
          onMouseEnter={() => {
            if (timeoutRef.current) {
              window.clearTimeout(timeoutRef.current)
            }
            setHoveredIndex(index)
          }}
          onMouseLeave={() => {
            timeoutRef.current = window.setTimeout(() => {
              setHoveredIndex(null)
            }, 200)
          }}
          aria-current={isActive ? 'page' : undefined}
        >
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.span
                className="absolute inset-0 rounded-lg bg-gray-100"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15 },
                }}
              />
            )}
          </AnimatePresence>
          <span className="relative z-10">{label}</span>
        </Link>
      )
    })
  }, [pathname])

  return <>{navLinks}</>
}

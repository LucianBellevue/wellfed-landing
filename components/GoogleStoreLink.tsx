// components/GoogleStoreLink.tsx
'use client'

import clsx from 'clsx'
import React from 'react'

interface GoogleStoreLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  url: string
  className?: string
}

/**
 * A simple SVG replicating a stylized Google Play icon.
 * You can replace the paths below with your own or an official badge shape.
 */
function GooglePlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 512 512"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <title>Google Play</title>
      <path
        d="M77.4 77.4v357.2l250.8-178.6L77.4 77.4z"
        fill="#EA4335"
      />
      <path
        d="M434.6 233.4L328.2 177l-106.4 78.6 106.4 78.6 106.4-56.4c11.6-6.2 11.6-38.2 0-44.4z"
        fill="#34A853"
      />
      <path
        d="M328.2 177L77.4 77.4c-11.6-6.2-23.2 1.4-23.2 13.1v331c0 11.7 11.6 19.3 23.2 13.1l250.8-99.6V177z"
        fill="#FBBC04"
      />
      <path
        d="M328.2 334.2l-250.8 99.6c11.6 6.2 23.2-1.4 23.2-13.1 0 0 227.6-205.1 227.6-205.1v118.6z"
        fill="#4285F4"
      />
    </svg>
  )
}

/**
 * GoogleStoreLink:
 * Renders a stylized link to the Google Play Store using an SVG icon.
 */
export function GoogleStoreLink({
  url,
  className,
  ...props
}: GoogleStoreLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        'flex items-center space-x-2 rounded-md bg-white px-4 py-3 shadow hover:bg-gray-50',
        'transition-colors duration-200 ease-in-out',
        className
      )}
      {...props}
    >
      <GooglePlayIcon />
      <span className="font-medium text-gray-700">Google Play</span>
    </a>
  )
}

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
      {/* A simplified multi-color shape to approximate the Google Play icon */}
      <path
        d="M325.3 234.3 104.7 43.6c-8.1-6.2-19.9-0.3-19.9 9.6v405.5c0 9.9 11.8 15.7 19.9 9.6l220.5-190.7c6.7-4.2 6.7-14.9 0-19.2z"
        fill="#32BBF5"
      />
      <path
        d="m355.9 253.5-43.1-18.2-11.3 9.8 39.8 33.6 14.6-25.2z"
        fill="#00AABF"
      />
      <path
        d="m295.2 269.6 41.7 35.2-232.2 147c5.6 2.1 11.9-0.3 15.3-4.4l196.5-177.8c5.1-4.5 3.1-13.6-1.3-16z"
        fill="#A7A7A7"
      />
      <path
        d="m295.2 242.4c4.3-2.5 6.4-11.5 1.3-16L100 48.6c-3.4-4.1-9.7-6.5-15.3-4.4l232.2 147  -21.7 18.8z"
        fill="#FFBA00"
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

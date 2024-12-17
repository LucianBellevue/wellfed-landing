import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

interface LogoProps {

  className?: string;

}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link className={`w-full ${className}`} href="/">
        <Image src="/wellfed-logo.png" alt="Wellfed Logo" width={100} height={100} />
    </Link>
  )
}

export default Logo


import React from 'react'
import Image from 'next/image'

interface LogoProps {

  className?: string;

}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return <Image src="/wellfed-logo.png" alt="Wellfed Logo" width={100} height={100} className={className} />
}

export default Logo

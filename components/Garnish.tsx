// components/Garnish.tsx
import Image from 'next/image'
import clsx from 'clsx'

interface GarnishProps {
  src: string
  alt: string
  className?: string
  style?: React.CSSProperties
}

export function Garnish({ src, alt, className, style }: GarnishProps) {
  return (
    <div className={clsx('pointer-events-none absolute', className)} style={style}>
      <Image src={src} alt={alt} width={80} height={80} className="object-contain" />
    </div>
  )
}

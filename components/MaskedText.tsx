// components/MaskedText.tsx
import clsx from 'clsx'

interface MaskedTextProps {
  text: string
  imageSrc: string
  className?: string
}

export function MaskedText({ text, imageSrc, className }: MaskedTextProps) {
  return (
    <div
      className={clsx(
        'relative text-6xl font-bold uppercase inline-block',
        'bg-clip-text text-transparent',
        className
      )}
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {text}
    </div>
  )
}

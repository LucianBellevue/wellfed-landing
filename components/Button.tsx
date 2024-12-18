import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold transition-colors',
  outline:
    'inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm transition-colors',
}

const variantStyles = {
  solid: {
    gradient:
      'relative overflow-hidden bg-gradient-to-r from-primary to-secondary text-white ' +
      'before:absolute before:inset-0 before:transition-colors ' +
      'hover:before:bg-white/10 active:text-white/80',
    // Additional solid variants can be added here if desired.
  },
  outline: {
    // You can define outline variants if needed,
    // e.g. using brand colors for borders and text.
    primary:
      'border-primary text-primary hover:border-secondary hover:text-secondary active:text-primary/80 active:border-primary/80',
  },
}

type SolidColor = keyof typeof variantStyles.solid
type OutlineColor = keyof typeof variantStyles.outline

type ButtonProps = (
  | {
      variant?: 'solid'
      color?: SolidColor
    }
  | {
      variant: 'outline'
      color?: OutlineColor
    }
) &
  (
    | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'color'>
    | (Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> & {
        href?: undefined
      })
  )

export function Button({ className, variant = 'solid', color = 'gradient', ...props }: ButtonProps) {
  className = clsx(
    baseStyles[variant],
    (variantStyles[variant] as Record<string, string>)[color],
    className
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}

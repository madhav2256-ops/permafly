import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'icon'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  target?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, href, target, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-primary)] disabled:opacity-50 disabled:pointer-events-none'

    const variants = {
      primary:
        'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] hover:scale-[1.03] hover:shadow-[0_0_30px_var(--color-accent-glow)] rounded-[var(--radius-md)]',
      secondary:
        'bg-transparent text-[var(--color-text-primary)] border border-[var(--color-border)] hover:border-[var(--color-border-accent)] hover:text-[var(--color-accent)] rounded-[var(--radius-md)]',
      ghost:
        'bg-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent-glow)]  rounded-[var(--radius-md)]',
      icon:
        'bg-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent-glow)] rounded-full',
    }

    const sizes = {
      sm: variant === 'icon' ? 'w-8 h-8' : 'px-4 py-2 text-sm',
      md: variant === 'icon' ? 'w-10 h-10' : 'px-6 py-3 text-base',
      lg: variant === 'icon' ? 'w-12 h-12' : 'px-8 py-4 text-lg',
    }

    if (href) {
      return (
        <a
          href={href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className={cn(baseStyles, variants[variant], sizes[size], className)}
        >
          {children}
        </a>
      )
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export { Button }

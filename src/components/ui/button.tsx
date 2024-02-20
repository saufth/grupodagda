import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'w-max inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 transition-colors duration-300',
  {
    variants: {
      variant: {
        default: 'bg-gradient-to-tr from-accent via-accent/95 to-accent/80 backdrop-filter backdrop-blur-lg backdrop-saturate-150 text-accent-foreground hover:bg-accent',
        destructive: 'bg-destructive/95 text-destructive-foreground hover:bg-destructive',
        outline: 'border border-primary text-primary hover:bg-muted text-primary hover:text-primary-foreground',
        secondary: 'bg-gradient-to-tr from-primary via-primary to-primary/80 backdrop-filter backdrop-blur-lg backdrop-saturate-150 text-primary-foreground hover:bg-primary',
        ghost: 'bg-gradient-to-tr from-secondary/90 via-secondary/80 to-secondary/60 hover:bg-secondary backdrop-filter backdrop-blur-lg backdrop-saturate-150 text-secondary-foreground border',
        link: 'hover:underline'
      },
      size: {
        default: 'h-8 lg:h-9 px-4 text-sm lg:text-base',
        xs: 'text-xs lg:text-sm',
        sm: 'px-1 text-sm lg:text-base',
        lg: 'w-fit h-12 lg:h-[50px] px-4 lg:px-6 lg:text-lg font-medium',
        full: 'w-full md:w-fit h-12 lg:h-[50px] px-4 lg:px-6 lg:text-lg font-medium',
        icon: 'h-7 lg:h-[33px] w-7 lg:w-[33px]'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export type ButtonVariantProps = VariantProps<typeof buttonVariants>

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantProps {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
